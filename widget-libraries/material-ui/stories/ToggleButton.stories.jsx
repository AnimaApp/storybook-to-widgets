import React from "react";
import * as MuiMaterial from "@mui/material";
import { iconOptions, iconTransform, keyTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Material UI/ToggleButton",
  component: MuiMaterial.ToggleButton,
  argTypes: {
    color: {
      description: "Color",
      type: "options",
      options: ["primary", "secondary", "success", "error", "info", "warning"],
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
    selected: {
      description: "Selected",
      type: "boolean",
    },
    iconName: {
      type: "options",
      options: iconOptions,
      description: "Icon",
      transform: iconTransform,
    },
    itemKey: {
      description: "Key",
      hidden: true,
      transform: keyTransform,
    },
  },
  decorators: [withIconMapped],
};

const Template = (args) => {
  return (
    <MuiMaterial.ToggleButton
      value={args.value}
      color={args.color}
      size={args.size}
      disabled={args.disabled}
      disableRipple={args.disableRipple}
      key={args.itemKey}
    >
      {args.iconName}
    </MuiMaterial.ToggleButton>
  );
};

export const SimpleToggleButton = Template.bind({});

SimpleToggleButton.args = {
  color: "primary",
  size: "medium",
  iconName: "Build",
  disabled: false,
  disableRipple: false,
  itemKey: "1",
};

SimpleToggleButton.storyInfo = {
  name: "SimpleToggleButton",
  kind: "Material UI/ToggleButton",
};
