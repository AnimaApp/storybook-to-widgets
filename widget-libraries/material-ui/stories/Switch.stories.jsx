import React from "react";
import * as MuiMaterial from "@mui/material";
import withIconMapped from "../decorators/withIconMapped";
import { options, iconTransform } from "../utils";

export default {
  title: "Material UI/Switch",
  component: MuiMaterial.Switch,
  argTypes: {
    color: {
      description: "Color",
      type: "options",
      options: [
        "default",
        "primary",
        "secondary",
        "error",
        "info",
        "success",
        "warning",
      ],
    },
    size: {
      description: "Size",
      type: "options",
      options: ["small", "medium"],
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
    checked: {
      description: "Checked",
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
    <MuiMaterial.Switch
      color={args.color}
      disabled={args.disabled}
      size={args.size}
      checked={args.checked}
    />
  );
};

const CustomSwitchTemplate = (args) => {
  return (
    <MuiMaterial.Switch
      color={args.color}
      disabled={args.disabled}
      size={args.size}
      checked={args.checked}
      checkedIcon={args.iconName}
    />
  );
};

export const SimpleSwitch = Template.bind({});
SimpleSwitch.args = {
  color: "primary",
  size: "medium",
  disabled: false,
  checked: true,
};

export const SwitchWithCustomIcon = CustomSwitchTemplate.bind({});
SwitchWithCustomIcon.args = {
  color: "primary",
  size: "medium",
  disabled: false,
  checked: true,
  iconName: "AddOutlined",
};
