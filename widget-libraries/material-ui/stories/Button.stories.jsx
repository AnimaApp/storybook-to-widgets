import React from "react";
import * as MuiMaterial from "@mui/material";
import withIconMapped from "../decorators/withIconMapped";
import { iconOptions, iconTransform } from "../utils";

export default {
  title: "Material UI/Button",
  component: MuiMaterial.Button,
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
    startIcon: {
      control: { type: "select" },
      options: iconOptions,
      description: "Start Icon",
      transform: iconTransform,
    },
    endIcon: {
      control: { type: "select" },
      options: iconOptions,
      description: "End Icon",
      transform: iconTransform,
    },
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["contained", "outlined", "text"],
      defaultValue: "contained",
    },
    size: {
      description: "Size",
      control: { type: "select" },
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
  decorators: [withIconMapped],
};

const Template = (args) => {
  return (
    <MuiMaterial.Button
      color={args.color}
      variant={args.variant}
      size={args.size}
      disabled={args.disabled}
      disableElevation={args.disableElevation}
      startIcon={args.startIcon}
      endIcon={args.endIcon}
    >
      {args.label}
    </MuiMaterial.Button>
  );
};

export const SimpleButton = Template.bind({});
SimpleButton.args = {
  color: "primary",
  variant: "contained",
  size: "medium",
  label: "Click me",
  disabled: false,
  disableElevation: false,
  disableRipple: false,
  startIcon: "None",
  endIcon: "None",
};

SimpleButton.storyInfo = {
  name: "SimpleButton",
  kind: "Material UI/Button",
};
