import React from "react";
import * as MuiMaterial from "@mui/material";

export default {
  title: "Material UI/CircularProgress",
  component: MuiMaterial.CircularProgress,
  argTypes: {
    color: {
      description: "Color",
      type: "options",
      options: ["primary", "secondary", "error", "info", "success", "warning"],
    },
    variant: {
      description: "Variant",
      type: "options",
      options: ["determinate", "indeterminate"],
    },
    size: {
      description: "Size",
      type: "string",
    },
    thickness: {
      thickness: "Thickness",
      type: "number",
    },
    value: {
      thickness: "Value",
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
