import { Story, useStorybookApi } from "@storybook/api";
import { createStoryCode, StoryCompiler } from "@anima/story-code-parser";
import { generateStoriesInfo } from "../code-generator";

const useStoryCompiledCode = () => {
  const sbApi = useStorybookApi();

  const currentStoryData = sbApi.getCurrentStoryData() as Story;
  const storiesInfo = generateStoriesInfo(sbApi, currentStoryData);
  // TODO: We should avoid this mapping
  // https://app.asana.com/0/1202114683897430/1202231982545037/f
  const storiesInfoMapped = Object.fromEntries(
    Object.entries(storiesInfo).map(([key, story]) => {
      return [
        story.id,
        {
          ...story,
          story_id: story.id,
          sub_stories_ids: story.subStoriesIds,
          user_params: story.userParams.map((param) => {
            return {
              ...param,
              story_id: param.storyId,
            };
          }),
        },
      ];
    })
  );
  const rootStoryInfo = Object.values(storiesInfoMapped).find(
    (story) => story.root
  );

  const storyCode = createStoryCode(rootStoryInfo, storiesInfoMapped, true);
  const storyCompiler = new StoryCompiler(storyCode, storiesInfoMapped);

  storyCompiler.compile();

  const code = storyCompiler.evaluate(currentStoryData.args);

  return code;
};

export default useStoryCompiledCode;
