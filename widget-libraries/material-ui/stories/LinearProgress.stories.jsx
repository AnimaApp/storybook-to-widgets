import React from "react";
import * as MuiMaterial from "@mui/material";

export default {
  title: "Material UI/LinearProgress",
  component: MuiMaterial.LinearProgress,
  argTypes: {
    color: {
      description: "Color",
      control: { type: "select" },
      options: ["primary", "secondary", "error", "info", "success", "warning"],
    },
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["buffer", "determinate", "indeterminate", "query"],
    },
    value: {
      thickness: "Value",
      type: "number",
    },
    valueBuffer: {
      thickness: "Value Buffer",
      type: "number",
    },
  },
};

const Template = (args) => {
  return (
    <MuiMaterial.LinearProgress
      color={args.color}
      variant={args.variant}
      value={args.value}
      valueBuffer={args.valueBuffer}
    />
  );
};

export const SimpleLinearProgress = Template.bind({});
SimpleLinearProgress.args = {
  color: "primary",
  variant: "buffer",
  value: 20,
  valueBuffer: 30,
};
