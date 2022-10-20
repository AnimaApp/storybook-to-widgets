import React from "react";
import * as MuiMaterial from "@mui/material";
import withIconMapped from "../decorators/withIconMapped";
import { iconOptions, iconTransform } from "../utils";

export default {
  title: "Material UI/Custom Switch",
  component: MuiMaterial.Switch,
  parameters: {
    useFigmaLayers: true,
  },
  argTypes: {
    color: {
      description: "Color",
      control: { type: "select" },
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
      control: { type: "select" },
      options: ["small", "medium"],
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
    defaultChecked: {
      description: "Checked",
      type: "boolean",
    },
    iconName: {
      control: { type: "select" },
      options: iconOptions,
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
      defa={args.defaultChecked}
      checkedIcon={args.iconName}
    />
  );
};

export const SwitchWithCustomIcon = Template.bind({});
SwitchWithCustomIcon.args = {
  color: "primary",
  size: "medium",
  disabled: false,
  defaultChecked: true,
  iconName: "AddOutlined",
};
