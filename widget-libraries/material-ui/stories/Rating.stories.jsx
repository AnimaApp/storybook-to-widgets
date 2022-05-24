import React from "react";
import * as MuiMaterial from "@mui/material";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Material UI/Rating",
  component: MuiMaterial.Rating,
  argTypes: {
    size: {
      description: "Size",
      type: "options",
      options: ["small", "medium", "large"],
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
    max: {
      description: "Max Number",
      type: "number",
      defaultValue: 5,
    },
    precision: {
      description: "Precision",
      type: "number",
    },
    defaultValue: {
      description: "Default Value",
      type: "number",
    },
  },
  decorators: [withIconMapped],
};

const Template = (args) => {
  return (
    <MuiMaterial.Rating
      defaultValue={args.defaultValue}
      size={args.size}
      precision={args.precision}
      max={args.max}
      disabled={args.disabled}
    />
  );
};

export const SimpleRating = Template.bind({});

SimpleRating.args = {
  size: "medium",
  disabled: false,
  precision: 0.5,
  max: 5,
  defaultValue: 2,
};
