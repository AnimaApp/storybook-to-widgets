import React from "react";
import * as MuiMaterial from "@mui/material";

export default {
  title: "Material UI/TextField",
  component: MuiMaterial.TextField,
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
  },
};

const Template = (args) => {
  return (
    <MuiMaterial.TextField
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
};
