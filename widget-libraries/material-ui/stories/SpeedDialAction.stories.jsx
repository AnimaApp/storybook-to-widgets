import React from "react";
import * as MuiMaterial from "@mui/material";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Material UI/SpeedDialAction",
  component: MuiMaterial.SpeedDialAction,
  parameters: {
    docs: {
      description: {
        component: "SpeedDial Item",
      },
    },
  },
  argTypes: {
    tooltipPlacement: {
      description: "Tooltip Placement",
      type: "options",
      options: [
        "bottom-end",
        "bottom-start",
        "bottom",
        "left-end",
        "left-start",
        "left",
        "right-end",
        "right-start",
        "right",
        "top-end",
        "top-start",
        "top",
      ],
    },
    tooltipTitle: {
      description: "Tooltip Title",
      type: "string",
    },
    iconName: {
      type: "options",
      options: iconOptions,
      description: "Icon",
      transform: iconTransform,
      required: false,
    },
  },
  decorators: [withIconMapped],
};

const Template = (args) => {
  return (
    <MuiMaterial.SpeedDialAction
      tooltipPlacement={args.tooltipPlacement}
      icon={args.iconName}
      tooltipTitle={args.tooltipTitle}
    />
  );
};

export const SimpleSpeedDialAction = Template.bind({});

SimpleSpeedDialAction.args = {
  tooltipPlacement: "left",
  iconName: "Build",
  tooltipTitle: "Tooltip Title",
};

SimpleSpeedDialAction.storyInfo = {
  name: "SimpleSpeedDialAction",
  kind: "Material UI/SpeedDialAction",
};
