import React from "react";
import * as MuiMaterial from "@mui/material";
import { SimpleButtonInGroup } from "./ButtonInGroup.stories";

export default {
  title: "Material UI/Button group",
  component: MuiMaterial.ButtonGroup,
  argTypes: {
    color: {
      description: "Color",
      type: "options",
      options: ["primary", "secondary", "error", "info", "success", "warning"],
    },
    variant: {
      description: "Variant",
      type: "options",
      options: ["text", "outlined", "contained"],
    },
    size: {
      description: "Size",
      type: "options",
      options: ["small", "medium", "large"],
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
    disableRipple: {
      description: "Disable Ripple",
      type: "boolean",
    },
    disableElevation: {
      description: "Disable Elevation",
      type: "boolean",
    },
    orientation: {
      description: "Orientation",
      type: "options",
      options: ["vertical", "horizontal"],
      defaultValue: "horizontal",
    },
    button: {
      type: "story",
      description: "button",
      storyInfo: SimpleButtonInGroup.storyInfo,
    },
    button2: {
      type: "story",
      description: "button",
      storyInfo: SimpleButtonInGroup.storyInfo,
    },
    button3: {
      type: "story",
      description: "button",
      storyInfo: SimpleButtonInGroup.storyInfo,
    },
  },
};

const Template = (args) => {
  return (
    <MuiMaterial.ButtonGroup
      color={args.color}
      variant={args.variant}
      disabled={args.disabled}
      disableElevation={args.disableElevation}
      disableRipple={args.disableRipple}
      orientation={args.orientation}
      size={args.size}
    >
      <SimpleButtonInGroup {...args.button} />
      <SimpleButtonInGroup {...args.button2} />
      <SimpleButtonInGroup {...args.button3} />
    </MuiMaterial.ButtonGroup>
  );
};

export const SimpleButtonGroup = Template.bind({});
SimpleButtonGroup.args = {
  color: "primary",
  variant: "outlined",
  disabled: false,
  disableRipple: false,
  disableElevation: false,
  size: "small",
  button: {
    ...SimpleButtonInGroup.args,
    label: "Button 1",
  },
  button2: {
    ...SimpleButtonInGroup.args,
    label: "Button 2",
  },
  button3: {
    ...SimpleButtonInGroup.args,
    label: "Button 3",
  },
};
