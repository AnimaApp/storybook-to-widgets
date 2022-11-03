import React from "react";
import * as MuiMaterial from "@mui/material";

export default {
  title: "Material UI/Circular progress",
  component: MuiMaterial.CircularProgress,
  parameters: {
    useFigmaLayers: true,
  },
  argTypes: {
    color: {
      description: "Color",
      control: { type: "select" },
      options: ["primary", "secondary", "error", "info", "success", "warning"],
    },
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["determinate", "indeterminate"],
    },
    size: {
      description: "Size",
      type: "string",
    },
    thickness: {
      description: "Thickness",
      type: "number",
    },
    value: {
      description: "Value",
      type: "number",
    },
    disableShrink: {
      description: "Disable Shrink",
      type: "boolean",
    },
  },
};

const Template = (args) => {
  return (
    <MuiMaterial.CircularProgress
      color={args.color}
      variant={args.variant}
      size={args.size}
      thickness={args.thickness}
      value={args.value}
      disableShrink={args.disableShrink}
    />
  );
};

export const SimpleCircularProgress = Template.bind({});
SimpleCircularProgress.args = {
  color: "primary",
  variant: "indeterminate",
  size: "50px",
  thickness: 2,
  value: 50,
  disableShrink: false,
};
