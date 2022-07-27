import { Story, ArgTypes, API } from "@storybook/api";
import startCase from "lodash.startcase";
import { UserParam, createUserParams } from "../utils/index";

type StoriesCollection = { [key: string]: Story };

export type StoryInfo = {
  id: string;
  name: string;
  title: string;
  description?: string;
  userParams?: UserParam[];
  source: string;
  codeTemplate?: string;
  custom_css?: string;
  root?: boolean;
  subStoriesNames?: Array<string>;
  subStoriesIds?: Array<string>;
  titleArg?: string;
  onlyAddedOnce?: boolean;
  layout?: string;
  useFigmaLayers?: boolean;
};

const storyIdFromStoryInfo = (
  storyInfo: { name: string; kind: string },
  sbApi: API
): string => {
  return sbApi.storyId(storyInfo.kind, startCase(storyInfo.name));
};

export const retreiveAllStoriesFromArgs = (
  sbApi: API,
  argTypes: ArgTypes,
  stories: StoriesCollection = {}
): StoriesCollection => {
  let allStories: StoriesCollection = stories;

  for (const [key, value] of Object.entries(argTypes)) {
    if (!value?.storyInfo) continue;

    const connectedStoryInfo = value.storyInfo as {
      name: string;
      kind: string;
    };
    const storyId = storyIdFromStoryInfo(connectedStoryInfo, sbApi);
    if (!storyId) continue;

    const story = sbApi.resolveStory(storyId) as Story;
    if (story && !allStories[connectedStoryInfo.name]) {
      allStories[connectedStoryInfo.name] = story;
      allStories = retreiveAllStoriesFromArgs(
        sbApi,
        story.argTypes,
        allStories
      );
    }
  }
  return allStories;
};

const getStoryInfo = (story: Story, sbApi: API): StoryInfo => {
  const storySource = story?.parameters?.storySource?.source;
  const storyId = story?.id;
  const storyName = story?.name?.replace(/\s/g, "");
  const userParams = createUserParams(story, sbApi);
  const description = story?.parameters?.docs?.description?.component || "";
  const custom_css = story?.parameters?.custom_css || "";
  const titleArg = story?.parameters?.titleArg;
  const onlyAddedOnce = story?.parameters?.onlyAddedOnce || false;
  const layout = story?.parameters?.layout;
  const useFigmaLayers = story?.parameters?.useFigmaLayers || false;

  // @ts-expect-error
  const title = story?.title ? story?.title : "";

  let subStoriesNames: Set<string> = new Set();
  let subStoriesIds: Set<string> = new Set();
  for (const [key, value] of Object.entries(story?.argTypes)) {
    if (!value?.storyInfo) continue;

    const subStoryInfo = value.storyInfo as { name: string; kind: string };
    const subStoryId = storyIdFromStoryInfo(subStoryInfo, sbApi);
    subStoriesNames.add(subStoryInfo.name);
    subStoriesIds.add(subStoryId);
  }

  let storyCodeInfo: StoryInfo = {
    id: storyId,
    name: storyName,
    source: storySource,
    userParams,
    title,
    description,
    custom_css,
    subStoriesNames: Array.from(subStoriesNames),
    subStoriesIds: Array.from(subStoriesIds),
    titleArg,
    layout,
    onlyAddedOnce,
    useFigmaLayers
  };
  return storyCodeInfo;
};

export const generateStoriesInfo = (
  sbApi: API,
  story: Story
): { [key: string]: StoryInfo } => {
  const argTypes = story?.argTypes;
  const connectedStories: StoriesCollection = retreiveAllStoriesFromArgs(
    sbApi,
    argTypes
  );

  let storiesInfo: { [key: string]: StoryInfo } = {};
  const rootStoryInfo = getStoryInfo(story, sbApi);
  rootStoryInfo.root = true;
  storiesInfo[rootStoryInfo.name] = rootStoryInfo;

  Object.entries(connectedStories).map(([key, value]) => {
    const storyInfo = getStoryInfo(value, sbApi);
    storiesInfo[storyInfo.name] = storyInfo;
  });

  return storiesInfo;
};

export default {};
