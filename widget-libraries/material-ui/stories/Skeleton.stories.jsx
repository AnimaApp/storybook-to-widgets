import React from "react";
import * as MuiMaterial from "@mui/material";

export default {
  title: "Material UI/Skeleton",
  component: MuiMaterial.Skeleton,
  argTypes: {
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["circular", "rectangular", "text"],
    },
    animation: {
      description: "Animation",
      control: { type: "select" },
      options: ["pulse", "wave", false],
    },
    width: {
      description: "Width",
      type: "string",
    },
    height: {
      description: "Height",
      type: "string",
    },
  },
};

const Template = (args) => {
  return (
    <MuiMaterial.Skeleton
      variant={args.variant}
      animation={args.animation}
      height={args.height}
      width={args.width}
    />
  );
};

export const SimpleSkeleton = Template.bind({});
SimpleSkeleton.args = {
  variant: "rectangular",
  animation: "pulse",
  width: "250px",
  height: "50px",
};
