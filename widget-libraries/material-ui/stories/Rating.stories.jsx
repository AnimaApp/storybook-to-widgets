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
  },
  decorators: [withIconMapped],
};

const Template = (args) => {
  return (
    <MuiMaterial.Rating
      name="size-small"
      defaultValue={2}
      size={args.size}
      precision={args.precision}
      max={args.max}
    />
  );
};

export const SimpleRating = Template.bind({});

SimpleRating.args = {
  size: "medium",
  disabled: false,
  label: "Username",
  precision: 0.5,
  max: 5,
};
