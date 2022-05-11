import { Story } from "@storybook/api";
import getMetadataFromStory from "./getMetadataFromStory";
import getPackageJsonFromStory from "./getPackageJsonFromStory";

const getStoryDependencies = async (story: Story) => {
  const { dependencies: allDependencies } = await getPackageJsonFromStory(
    story
  );

  const { excluded_packages = [] } = await getMetadataFromStory(story);

  const filteredDependencies = Object.fromEntries(
    Object.entries(allDependencies).filter(
      ([key]) => !excluded_packages.includes(key)
    )
  );

  return filteredDependencies;
};

export default getStoryDependencies;
