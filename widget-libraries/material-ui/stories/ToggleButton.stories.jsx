import React from "react";
import * as MuiMaterial from "@mui/material";
import { options, iconTransform } from "../utils";
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
      options: options,
      description: "Icon",
      transform: iconTransform,
    },
  },
  decorators: [withIconMapped],
};

const Template = (args) => {
  return (
    <MuiMaterial.ToggleButton
      color={args.color}
      size={args.size}
      disabled={args.disabled}
      selected={args.selected}
      disableRipple={args.disableRipple}
    >
      {args.iconName}
    </MuiMaterial.ToggleButton>
  );
};

export const SimpleToggleButton = Template.bind({});
SimpleToggleButton.args = {
  color: "primary",
  size: "medium",
  iconName: "ArrowUp",
  disabled: false,
  selected: false,
  disableRipple: false,
};
