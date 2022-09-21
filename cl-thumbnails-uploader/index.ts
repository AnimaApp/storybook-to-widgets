import * as aws from "@aws-sdk/client-s3";
import fs from "fs/promises";
import yargs from "yargs";
import chalk from "chalk";
import fastGlob from "fast-glob";
import playwright from "playwright";
import { hideBin } from "yargs/helpers";
import { Listr, ListrTaskWrapper } from "listr2";

interface Ctx {
  stories: Record<string, Story>;
  failed: string[];
  manualScreenshots: string[];
}

interface Story {
  libraryName: string;
  sbLibraryName: string;
  componentName: string;
}

// This assumes that the storybook is running locally.
// Can also be pointed at https://storybook-to-widgets.netlify.app
const baseUrl = "http://localhost:6006";
const selector = "#story-container";
const bucketName = "anima-uploads";
const screenshotsDir = "screenshots";

const options = yargs(hideBin(process.argv)).argv;

const {
  libraries = "",
  components = "",
  skipUpload = false,
  skipScreenshots = false,
  containerPadding = 10,
  skipManualScreenshots = false,
} = options;

const toList = (value) =>
  String(value || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

const onlyLibraries = toList(libraries);
const onlyComponents = toList(components);

let page: playwright.Page;
let browser: playwright.BrowserContext;

async function prepare(ctx: Ctx) {
  try {
    await fs.rm(screenshotsDir, { recursive: true });
  } catch (error) {}

  browser = await playwright.chromium.launchPersistentContext("./.user_data", {
    headless: true,
    deviceScaleFactor: 2, // Higher quality screenshots
  });

  page = await browser.newPage();
  page.setDefaultTimeout(30_000);

  ctx.failed = [];
  ctx.stories = {};

  ctx.manualScreenshots = await fastGlob(["./manual-screenshots/**/*.png"]);
}

async function collectStories(ctx: Ctx, task: ListrTaskWrapper<Ctx, any>) {
  await page.goto(baseUrl);

  const expanders = page.locator(".sidebar-subheading-action");
  for (let i = 0; i < (await expanders.count()); i++) {
    await expanders.nth(i).click();
  }

  const stories = page.locator(`[data-nodetype="story"]`);
  const librariesMetadata = {};

  for (let i = 0; i < (await stories.count()); i++) {
    let sbLibraryName;
    let componentName;

    const story = stories.nth(i);

    const id = await story.getAttribute("data-item-id");
    const parentId = await story.getAttribute("data-parent-id");
    const parent = page.locator(`[data-item-id="${parentId}"]`);

    if ((await parent.getAttribute("data-nodetype")) === "component") {
      sbLibraryName = await parent.getAttribute("data-parent-id");
      componentName = await parent.innerText();
    } else {
      sbLibraryName = parentId;
      componentName = await story.innerText();
    }

    if (!librariesMetadata[sbLibraryName]) {
      const { default: metadata } = await import(
        `../widget-libraries/${sbLibraryName}/metadata.js`
      );

      librariesMetadata[sbLibraryName] = metadata;
    }

    const { name: libraryName } = librariesMetadata[sbLibraryName];

    const skipLibrary =
      onlyLibraries.length && !onlyLibraries.includes(libraryName);

    const skipComponent =
      onlyComponents.length && !onlyComponents.includes(componentName);

    task.stdout().write(`${libraryName}: ${componentName}`);

    if (skipLibrary || skipComponent) continue;

    ctx.stories[id] = { sbLibraryName, componentName, libraryName };
  }

  task.title = `${task.title} (found ${Object.keys(ctx.stories).length})`;
}

async function takeScreenshots(ctx: Ctx, task: ListrTaskWrapper<Ctx, any>) {
  let index = 1;
  const ids = Object.keys(ctx.stories);

  for (const id of ids) {
    task.title = `Taking screenshots (${index} of ${ids.length})`;

    const { sbLibraryName, componentName } = ctx.stories[id];

    try {
      await takeScreenshot(id);
    } catch (error) {
      const path = `${sbLibraryName}: ${componentName}`;
      task.output = [task.output, `${chalk.redBright("✖")} ${path}`]
        .filter(Boolean)
        .join("\n");
      ctx.failed.push(id);
    }

    index++;
  }
}

async function takeScreenshot(id: string) {
  await page.goto(`${baseUrl}/iframe.html?id=${id}`);
  await page.waitForSelector(selector);

  const container = await page.$(selector);

  await container.evaluate(
    (el, { containerPadding }) => (el.style.padding = `${containerPadding}px`),
    { containerPadding }
  );

  // Let animations finish. Maybe this should be configurable per story?
  await new Promise((resolve) => setTimeout(resolve, 3_000));

  await container.screenshot({
    type: "png",
    path: `${screenshotsDir}/${id}.png`,
    omitBackground: true,
  });
}

async function uploadScreenshots(ctx: Ctx, task: ListrTaskWrapper<Ctx, any>) {
  const { stories, failed } = ctx;

  const s3 = new aws.S3Client({ region: "us-west-2" });
  const ids = Object.keys(stories);
  const total = ids.length - failed.length;

  let index = 1;
  for (const id of ids) {
    task.title = `Uploading screenshots (${index} of ${total})`;
    if (failed.includes(id)) continue;

    const { libraryName, componentName } = stories[id];

    index++;

    const uploadCommand = new aws.PutObjectCommand({
      ACL: "public-read",
      Key: `components-library/${libraryName}/${componentName.toLowerCase()}.png`,
      Body: await fs.readFile(`${screenshotsDir}/${id}.png`),
      Bucket: bucketName,
      ContentType: "image/png",
    });

    await s3.send(uploadCommand);
  }
}

async function uploadManualScreenshots(
  { manualScreenshots }: Ctx,
  task: ListrTaskWrapper<Ctx, any>
) {
  const s3 = new aws.S3Client({ region: "us-west-2" });

  let index = 1;
  for (const path of manualScreenshots) {
    task.title = `Uploading manual screenshots (${index} of ${manualScreenshots.length})`;

    const [_, libraryName, componentName] = path.match(
      /manual\-screenshots\/([^\/]+)\/(.*).png/
    );

    index++;

    const uploadCommand = new aws.PutObjectCommand({
      ACL: "public-read",
      Key: `components-library/${libraryName}/${componentName.toLowerCase()}.png`,
      Body: await fs.readFile(path),
      Bucket: bucketName,
      ContentType: "image/png",
    });

    await s3.send(uploadCommand);
  }
}

const tasks = new Listr<Ctx>([
  { title: "Preparing", task: prepare },
  {
    title: "Collecting stories",
    skip: () => !!skipScreenshots,
    task: collectStories,
  },
  {
    title: "Taking screenshots",
    skip: () => !!skipScreenshots,
    task: takeScreenshots,
    options: { persistentOutput: true },
  },
  {
    title: "Uploading screenshots",
    skip: ({ stories, failed }) => {
      const total = Object.keys(stories).length;

      return (
        !!skipScreenshots || !!skipUpload || !total || total === failed.length
      );
    },
    task: uploadScreenshots,
    options: { persistentOutput: true },
  },
  {
    title: "Uploading manual screenshots",
    skip: ({ manualScreenshots }) =>
      !!skipUpload || !!skipManualScreenshots || !manualScreenshots.length,
    task: uploadManualScreenshots,
    options: { persistentOutput: true },
  },
  { title: "Cleaning up", task: async () => await browser?.close() },
]);

tasks.run();
