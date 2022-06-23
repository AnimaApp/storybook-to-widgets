import React from "react";
import * as MuiMaterial from "@mui/material";
import { SimpleSpeedDialAction } from "./SpeedDialAction.stories";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

// SpeedDial
export default {
  title: "Material UI/SpeedDial",
  component: MuiMaterial.SpeedDial,
  argTypes: {
    direction: {
      description: "Direction",
      type: "options",
      options: ["down", "left", "right", "up"],
    },
    hidden: { description: "Hidden", type: "boolean" },
    speedDial1: {
      type: "story",
      description: "menuitem",
      storyInfo: SimpleSpeedDialAction.storyInfo,
    },
    speedDial2: {
      type: "story",
      description: "menuitem",
      storyInfo: SimpleSpeedDialAction.storyInfo,
    },
    speedDial3: {
      type: "story",
      description: "menuitem",
      storyInfo: SimpleSpeedDialAction.storyInfo,
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
    <MuiMaterial.SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<MuiMaterial.SpeedDialIcon />}
      direction={args.direction}
      hidden={args.hidden}
    >
      <SimpleSpeedDialAction {...args.speedDial1} />
      <SimpleSpeedDialAction {...args.speedDial2} />
      <SimpleSpeedDialAction {...args.speedDial3} />
    </MuiMaterial.SpeedDial>
  );
};

export const SimpleSpeedDial = Template.bind({});
SimpleSpeedDial.args = {
  direction: "up",
  hidden: false,
  iconName: "SpeedDialIcon",
  speedDial1: {
    tooltipPlacement: "left",
    iconName: "Save",
    tooltipTitle: "Tooltip Title",
  },
  speedDial2: {
    tooltipPlacement: "left",
    iconName: "Print",
    tooltipTitle: "Tooltip Title",
  },
  speedDial3: {
    tooltipPlacement: "left",
    iconName: "Share",
    tooltipTitle: "Tooltip Title",
  },
};
