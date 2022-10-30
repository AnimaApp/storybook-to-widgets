import * as aws from "@aws-sdk/client-s3";
import fs from "fs/promises";
import yargs from "yargs";
import chalk from "chalk";
import fastGlob from "fast-glob";
import nodePath from "path";
import playwright from "playwright";
import { hideBin } from "yargs/helpers";
import { Listr, ListrTaskWrapper } from "listr2";

interface Ctx {
  stories: Record<string, Story>;
  manualScreenshots: string[];
  libraries: string[];
  components: string[];
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
const screenshotsDir = nodePath.join(__dirname, "screenshots");

const options = yargs(hideBin(process.argv))
  .command("$0", "Screenshots all stories and uploads them")
  .boolean([
    "interactive",
    "cachedStories",
    "screenshots",
    "uploads",
    "manual-screenshots-uploads",
  ])
  .number("containerPadding")
  .alias("i", "interactive")
  .describe("i", "Stories to take screenshots of")
  .describe("cachedStories", "Use data from stories.json")
  .describe("screenshots", "Skips the screenshots step")
  .describe("uploads", "Skips uploading screenshots")
  .describe(
    "manual-screenshots-uploads",
    "Skips uploading the manual screenshots"
  )
  .describe("container-padding", "Padding around the story container")
  .default("containerPadding", 10)
  .default("cachedStories", false)
  .default("screenshots", true)
  .default("uploads", true)
  .default("manualScreenshotsUploads", true).parseSync();

let page: playwright.Page;
let browser: playwright.BrowserContext;

async function prepare(ctx: Ctx) {
  try {
    await fs.rm(screenshotsDir, { recursive: true });
  } catch (error) {}

  browser = await playwright.chromium.launchPersistentContext(
    nodePath.join(__dirname, ".user_data"),
    {
      headless: true,
      deviceScaleFactor: 2, // Higher quality screenshots
    }
  );

  page = await browser.newPage();
  page.setDefaultTimeout(60_000);

  ctx.stories = {};
  ctx.libraries = [];
  ctx.components = [];
  ctx.manualScreenshots = await fastGlob([
    nodePath.join(__dirname, "manual-screenshots/**/*.png"),
  ]);
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
        nodePath.join(
          __dirname,
          `../widget-libraries/${sbLibraryName}/metadata.js`
        )
      );

      librariesMetadata[sbLibraryName] = metadata;
    }

    const { name: libraryName } = librariesMetadata[sbLibraryName];

    task.stdout().write(`${libraryName}: ${componentName}`);

    ctx.stories[id] = { sbLibraryName, componentName, libraryName };
  }

  await fs.writeFile(
    nodePath.join(__dirname, "stories.json"),
    JSON.stringify(ctx.stories, null, 2),
    "utf-8"
  );

  task.title = `${task.title} (found ${Object.keys(ctx.stories).length})`;
}

async function takeScreenshots(ctx: Ctx, task: ListrTaskWrapper<Ctx, any>) {
  let index = 1;
  for (const id of ctx.components) {
    task.title = `Taking screenshots (${index} of ${ctx.components.length})`;

    const { libraryName, componentName } = ctx.stories[id];

    try {
      await takeScreenshot(id);
    } catch (error) {
      const path = `${libraryName}: ${componentName}`;
      task.output = [task.output, `${chalk.redBright("✖")} ${path}`]
        .filter(Boolean)
        .join("\n");
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
    { containerPadding: options.containerPadding }
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
  const { stories } = ctx;

  const s3 = new aws.S3Client({ region: "us-west-2" });
  const ids = ctx.components;

  let index = 1;
  let failed = 0;
  for (const id of ids) {
    try {
      task.title = `Uploading screenshot ${index} of ${ids.length}${
        !!failed ? chalk.redBright(` (${failed} failed)`) : ""
      }`;

      const { libraryName, componentName } = stories[id];

      const uploadCommand = new aws.PutObjectCommand({
        ACL: "public-read",
        Key: `components-library/${libraryName}/${componentName.toLowerCase()}.png`,
        Body: await fs.readFile(`${screenshotsDir}/${id}.png`),
        Bucket: bucketName,
        ContentType: "image/png",
      });

      await s3.send(uploadCommand);
    } catch (error) {
      failed++;
      task.title = `Uploading screenshot ${index} of ${ids.length}${
        !!failed ? chalk.redBright(` (${failed} failed)`) : ""
      }`;
    } finally {
      index++;
    }
  }
}

async function uploadManualScreenshots(
  { manualScreenshots }: Ctx,
  task: ListrTaskWrapper<Ctx, any>
) {
  const s3 = new aws.S3Client({ region: "us-west-2" });

  let index = 1;
  let failed = 0;
  for (const path of manualScreenshots) {
    try {
      task.title = `Uploading manual screenshot ${index} of ${
        manualScreenshots.length
      }${!!failed ? chalk.redBright(` (${failed} failed)`) : ""}`;

      const [_, libraryName, componentName] = path.match(
        /manual\-screenshots\/([^\/]+)\/(.*).png/
      );

      const uploadCommand = new aws.PutObjectCommand({
        ACL: "public-read",
        Key: `components-library/${libraryName}/${componentName.toLowerCase()}.png`,
        Body: await fs.readFile(path),
        Bucket: bucketName,
        ContentType: "image/png",
      });

      await s3.send(uploadCommand);
    } catch (error) {
      failed++;
      task.title = `Uploading manual screenshot ${index} of ${
        manualScreenshots.length
      }${!!failed ? chalk.redBright(` (${failed} failed)`) : ""}`;
    } finally {
      index++;
    }
  }
}

const tasks = new Listr<Ctx>([
  { title: "Preparing", task: prepare },
  {
    title: "Collecting stories",
    skip: () => options.cachedStories,
    task: collectStories,
  },
  {
    skip: () => !options.cachedStories,
    task: async (ctx, task) => {
      ctx.stories = JSON.parse(
        await fs.readFile(nodePath.join(__dirname, "stories.json"), "utf-8")
      );

      task.title = `Using cached stories (found ${
        Object.keys(ctx.stories).length
      })`;
    },
  },
  {
    task: async (ctx, task) => {
      const libraries = Array.from(
        new Set(Object.values(ctx.stories).map((s) => s.libraryName))
      );

      if (!options.interactive) return (ctx.libraries = libraries);

      ctx.libraries = await task.prompt({
        type: "MultiSelect",
        footer: chalk.gray(
          "(<space> to select, <a> to toggle all, <return> to submit)"
        ),
        message: "Choose libraries to screenshot",
        choices: libraries,
      });
    },
  },
  {
    skip: (ctx) => !ctx.libraries.length,
    task: async (ctx, task) => {
      if (!options.interactive) {
        return (ctx.components = Object.keys(ctx.stories));
      }

      for (const lib of ctx.libraries) {
        const choices = Object.entries(ctx.stories).map(([key, s]) =>
          s.libraryName !== lib ? null : { name: s.componentName, value: key }
        );

        ctx.components = ctx.components.concat(
          await task.prompt({
            type: "multiselect",
            footer: chalk.gray(
              "(<space> to select, <a> to toggle all, <return> to submit)"
            ),
            message: `${chalk.green.underline(lib)} components to screenshot`,
            choices: choices.filter(Boolean),
            multiple: true,
            result(names) {
              return Object.values(this.map(names));
            },
          })
        );
      }
    },
  },
  {
    title: "Taking screenshots",
    skip: (ctx) => !options.screenshots || !ctx.components.length,
    task: takeScreenshots,
    options: { persistentOutput: true },
  },
  {
    title: "Uploading screenshots",
    task: (_ctx, task) =>
      task.newListr(
        [
          {
            title: "Automated screenshots",
            task: uploadScreenshots,
            skip: () => !options.uploads,
          },
          {
            title: "Manual screenshots",
            task: uploadManualScreenshots,
            skip: () => !options.manualScreenshotsUploads,
          },
        ],
        { concurrent: true, rendererOptions: { collapse: false } }
      ),
  },
  { title: "Cleaning up", task: async () => await browser?.close() },
]);

tasks.run();
