import { DecoratorFunction } from "@storybook/addons";
import React from "react";

export const withStoryContainer: DecoratorFunction = (story, context) => {
  const StoryContainer = context?.parameters?.container;
  return (
    <>{StoryContainer ? <StoryContainer>{story()}</StoryContainer> : story()}</>
  );
};
