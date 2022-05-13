import React from "react";
import * as MuiMaterial from "@mui/material";
import * as MuiIconsMaterial from "@mui/icons-material";
import withIconMapped from "../decorators/withIconMapped";

const options = ["None", ...Object.keys(MuiIconsMaterial)];
const iconTransform =
  "<% if (param !== 'None') { %><MuiIconsMaterial.<%= param %> /><% } else { %> '' <% } %>";

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
    startIcon: {
      type: "options",
      options: options,
      description: "Icon",
      transform: iconTransform,
    },
    endIcon: {
      type: "options",
      options: options,
      description: "Icon",
      transform: iconTransform,
    },
    variant: {
      description: "Variant",
      type: "options",
      options: ["contained", "outlined", "text"],
      defaultValue: "contained",
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
  startIcon: "ArrowLeft",
  endIcon: "ArrowRight",
};
