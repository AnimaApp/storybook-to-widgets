import React from "react";
import * as MuiMaterial from "@mui/material";

export default {
  title: "Material UI/TextField",
  component: MuiMaterial.TextField,
  argTypes: {
    color: {
      description: "Color",
      control: { type: "select" },
      options: ["primary", "secondary", "error", "info", "success", "warning"],
    },
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["filled", "outlined", "standard"],
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
    label: {
      description: "Label",
      type: "string",
    },
    width: {
      description: "Width",
      type: "string",
      defaultValue: "50%",
    },
  },
};

const Template = (args) => {
  return (
    <MuiMaterial.TextField
      sx={{ width: args.width }}
      color={args.color}
      disabled={args.disabled}
      size={args.size}
      variant={args.variant}
      label={args.label}
    />
  );
};

export const SimpleTextField = Template.bind({});
SimpleTextField.args = {
  color: "primary",
  size: "medium",
  disabled: false,
  variant: "outlined",
  label: "Username",
  width: "250px",
};
