import React from "react";
import { addons, types } from "@storybook/addons";
import { AddonPanel } from "@storybook/components";
import { ADDON_ID, TOOL_ID, PANEL_ID } from "../constants";
import Addon from "../Addon";
import CompiledStoryPanel from "../compiled-story-panel";
import { PARAM_KEY } from "../compiled-story-panel/constants";

addons.register(ADDON_ID, (api) => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "Anima Actions",
    match: () => true,
    render: Addon,
  });

  addons.addPanel(PANEL_ID, {
    type: types.PANEL,
    paramKey: PARAM_KEY,
    title: "Compiled Story",
    match: ({ viewMode }) => viewMode === "story",
    render: ({ key, active }) => {
      if (!active || !api.getCurrentStoryData()) {
        return null;
      }

      return (
        <AddonPanel key={key} active={active}>
          <CompiledStoryPanel />
        </AddonPanel>
      );
    },
  });
});
