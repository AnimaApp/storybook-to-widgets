import React, { useState } from "react";
import {
  useArgTypes,
  useStorybookApi,
  useParameter,
  useChannel,
  Story,
} from "@storybook/api";
import { IconButton } from "@storybook/components";
import { EVENTS } from "./constants";
import { StoryInfo, generateStoriesInfo } from "./code-generator";
import { createCodeTemplate, createCodeTemplateCompound } from "./utils/index";
import AnimaAPI from "./api";
import getStoryDependencies from "./utils/getStoryDependencies";
import getMetadataFromStory from "./utils/getMetadataFromStory";

const createWidgetStoriesApi = async (
  storiesInfo: { [key: string]: StoryInfo },
  libraryName: string
) => {
  const stories = Object.values(storiesInfo).map((story) => {
    const widgetName = story.title.split("/")[1];

    return {
      story_id: story?.id,
      name: story?.name,
      description: story?.description,
      title_arg: story?.titleArg,
      default_arg_name: widgetName.toLowerCase(),
      source_type: "react",
      source: story?.source,
      sub_stories_ids: story?.subStoriesIds,
      user_params: story?.userParams?.map((userParam) => {
        const { storyId, ...params } = userParam;
        return { ...params, story_id: storyId };
      }),
    };
  });

  let body = {
    stories,
    widget_library_name: libraryName,
  };

  await AnimaAPI.POST("/widget-stories", body);
};

const createWidgetApi = async (
  widgetStory: StoryInfo,
  dependencies: any,
  libraryName: string
) => {
  try {
    let code_template;
    code_template = createCodeTemplateCompound(dependencies);

    const widgetName = widgetStory.title.split("/")[1];

    let body = {
      source_type: "react",
      code_template,
      layout: widgetStory?.layout,
      user_params: widgetStory.userParams?.map((userParam) => {
        const { storyId, ...params } = userParam;
        return { ...params, story_id: storyId };
      }),
      custom_css: widgetStory?.custom_css,
      name: widgetName,
      description: widgetStory.description,
      widget_library_name: libraryName,
    };

    // @ts-expect-error
    body.root_story = widgetStory?.id;

    await AnimaAPI.POST("/widgets/create", body);
  } catch (error) {
    console.log(error);
  } finally {
    return true;
  }
};

const CreateWidget = () => {
  const [isCreatingWidget, setIsCreatingWidget] = useState(false);
  const sbApi = useStorybookApi();

  const storySource = useParameter("storySource", { source: "default value" });
  const args = useArgTypes();
  const currentStoryData = sbApi.getCurrentStoryData() as Story;

  const emit = useChannel({
    [EVENTS.ANALYZE_STORY_RESULT]: (result: any) =>
      console.log("Retrieved analyzed story", result),
  });

  const onCreateWidgetClick = async () => {
    const currentStory = sbApi.getCurrentStoryData() as Story;
    const metadata = await getMetadataFromStory(currentStory);
    const dependencies = await getStoryDependencies(currentStory);

    setIsCreatingWidget(true);
    emit(EVENTS.ANALYZE_STORY_REQUEST);

    const storiesInfo = generateStoriesInfo(sbApi, currentStoryData);
    console.log(storiesInfo);

    const isCompoundStory = Object.keys(storiesInfo).length > 1;

    const rootStoryInfo = Object.values(storiesInfo).find(
      (value) => value?.root
    );

    await createWidgetStoriesApi(storiesInfo, metadata.name as string);
    await createWidgetApi(rootStoryInfo, dependencies, metadata.name as string);

    setIsCreatingWidget(false);
  };

  return (
    <>
      <IconButton
        active={false}
        title="Sync to database"
        onClick={onCreateWidgetClick}
      >
        {isCreatingWidget ? (
          <svg
            className="spin"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="#999999"
          >
            <path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 32 32"
          >
            <rect width="32" height="32" fill="#3B3B3B" rx="4" />
            <path
              fill="#FF6250"
              d="M7.1287 6H24.353a.1262.1262 0 0 1 .1088.0586.1266.1266 0 0 1 .0072.1234 19.319 19.319 0 0 1-6.4955 7.4335c-4.4781 3.0214-8.9875 3.3334-10.8435 3.35a.1261.1261 0 0 1-.12-.0779.1282.1282 0 0 1-.01-.0494V6.1273A.1274.1274 0 0 1 7.1287 6Z"
            />
            <path
              fill="#FFDF90"
              d="M10.8461 25.9999c2.1241 0 3.846-1.7219 3.846-3.846 0-2.1242-1.7219-3.8461-3.846-3.8461C8.7219 18.3078 7 20.0297 7 22.1539c0 2.1241 1.722 3.846 3.8461 3.846Z"
            />
            <path
              fill="#36F"
              d="M18.708 25.7722c-1.088-.4153-1.6667-1.6127-1.298-2.6727l2.9034-8.2855c.372-1.06 1.5554-1.582 2.6434-1.1667 1.088.4161 1.6667 1.6127 1.298 2.6734l-2.9034 8.2855c-.372 1.06-1.5553 1.5827-2.6434 1.166Z"
            />
          </svg>
        )}
      </IconButton>
    </>
  );
};

export default CreateWidget;
