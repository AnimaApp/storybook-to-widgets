import React from "react";
import * as MuiMaterial from "@mui/material";

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
    defaultChecked: {
      description: "Checked",
      type: "boolean",
    },
  },
};

const Template = (args) => {
  return (
    <MuiMaterial.Switch
      color={args.color}
      disabled={args.disabled}
      size={args.size}
      defaultChecked={args.defaultChecked}
    />
  );
};

export const SimpleSwitch = Template.bind({});
SimpleSwitch.args = {
  color: "primary",
  size: "medium",
  disabled: false,
  defaultChecked: true,
};
