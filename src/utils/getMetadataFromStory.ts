import { Story } from "@storybook/api";

const getMetadataFromStory = async (story: Story) => {
  const fileName = story.parameters?.fileName ?? "";
  const libraryName = /(?<libraryName>[\w\d_-]+)(\/|\\)stories.*$/.exec(
    fileName
  )?.groups?.libraryName;
  const { default: metadata } = await import(
    `../../../widget-libraries/${libraryName}/metadata.js`
  );

  return metadata;
};

export default getMetadataFromStory;
