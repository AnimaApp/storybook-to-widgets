import React from "react";
import * as MuiMaterial from "@mui/material";

export default {
  title: "New Material UI/Checkbox",
  component: MuiMaterial.Checkbox,
  parameters: {
    useFigmaLayers: true,
  },
  argTypes: {
    color: {
      description: "Color",
      control: { type: "select" },
      options: [
        "inherit",
        "primary",
        "secondary",
        "success",
        "error",
        "info",
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

const Template = (args) => (
  <MuiMaterial.Checkbox
    color={args.color}
    disabled={args.disabled}
    defaultChecked={args.defaultChecked}
    size={args.size}
  />
);

export const SimpleCheckbox = Template.bind({});
SimpleCheckbox.args = {
  color: "primary",
  size: "medium",
  disabled: false,
  defaultChecked: true,
};
