import { Story } from "@storybook/api";

const getPackageJsonFromStory = async (story: Story) => {
  const fileName = story.parameters?.fileName ?? "";
  const libraryName = /(?<libraryName>[\w\d_-]+)(\/|\\)stories.*$/.exec(fileName)?.groups?.libraryName;
  const { default: packageJson } = await import(`../../../widget-libraries/${libraryName}/package.json`);

  return packageJson;
};

export default getPackageJsonFromStory;
