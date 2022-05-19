import React from "react";
import * as MuiMaterial from "@mui/material";
import { SimpleButton } from "./Button.stories";

export default {
  title: "Material UI/ButtonGroup",
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
      options: ["filled", "outlined", "standard"],
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
      storyInfo: SimpleButton.storyInfo,
    },
    button2: {
      type: "story",
      description: "button",
      storyInfo: SimpleButton.storyInfo,
    },
    button3: {
      type: "story",
      description: "button",
      storyInfo: SimpleButton.storyInfo,
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
      <SimpleButton {...args.button} />
      <SimpleButton {...args.button2} />
      <SimpleButton {...args.button3} />
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
  size: "large",
  button: {
    ...SimpleButton.args,
    color: SimpleButtonGroup.color,
    variant: SimpleButtonGroup.variant,
    label: "Button 1",
    size: SimpleButtonGroup.size,
  },
  button2: {
    ...SimpleButton.args,
    color: SimpleButtonGroup.color,
    variant: SimpleButtonGroup.variant,
    label: "Button 2",
    size: SimpleButtonGroup.size,
  },
  button3: {
    ...SimpleButton.args,
    color: SimpleButtonGroup.color,
    variant: SimpleButtonGroup.variant,
    label: SimpleButtonGroup.variant,
    size: SimpleButtonGroup.size,
  },
};
