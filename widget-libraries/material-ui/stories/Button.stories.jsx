import React from "react";
import Button from "@mui/material/Button";

export default {
  title: "Material UI/Button",
  component: Button,
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
      infotip: "Remove image URL to switch to Letter avatar",
    },
  },
};

const Template = (args) => (
  <Button
    color={args.color}
    variant={args.variant}
    size={args.size}
    disabled={args.disabled}
    disableElevation={args.disableElevation}
  >
    {args.label}
  </Button>
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
