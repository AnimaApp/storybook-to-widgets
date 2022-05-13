import React from "react";
import * as MuiMaterial from "@mui/material";

export default {
  title: "Material UI/Button",
  component: MuiMaterial.Button,
  argTypes: {
    color: {
      description: "Color",
      type: "options",
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
    variant: {
      description: "Variant",
      type: "options",
      options: ["contained", "outlined", "text"],
    },
    size: {
      description: "Size",
      type: "options",
      options: ["small", "medium", "large"],
    },
    label: {
      description: "Label",
      type: "string",
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
    disableElevation: {
      description: "Disable Elevation",
      type: "boolean",
    },
    disableRipple: {
      description: "Disable Ripple",
      type: "boolean",
    },
  },
};

const Template = (args) => (
  <MuiMaterial.Button
    color={args.color}
    variant={args.variant}
    size={args.size}
    disabled={args.disabled}
    disableElevation={args.disableElevation}
  >
    {args.label}
  </MuiMaterial.Button>
);

export const SimpleButton = Template.bind({});
SimpleButton.args = {
  color: "primary",
  variant: "contained",
  size: "medium",
  label: "Click me",
  disabled: false,
  disableElevation: false,
  disableRipple: false,
};
