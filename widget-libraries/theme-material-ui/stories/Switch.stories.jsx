import React from "react";
import * as MuiMaterial from "@mui/material";

export default {
  title: "New Material UI/Switch",
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
