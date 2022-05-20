import React from "react";
import * as MuiMaterial from "@mui/material";
import { options, iconTransformSnakeCase } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Material UI/Icon",
  component: MuiMaterial.Icon,
  argTypes: {
    color: {
      description: "Color",
      type: "options",
      options: [
        "inherit",
        "action",
        "disabled",
        "primary",
        "secondary",
        "error",
        "info",
        "success",
        "warning",
      ],
    },
    fontSize: {
      description: "Size",
      type: "options",
      options: ["inherit", "large", "medium", "small"],
    },

    iconName: {
      type: "options",
      options: options,
      description: "Icon",
      transform: iconTransformSnakeCase,
    },
  },
  decorators: [withIconMapped],
};

const Template = (args) => {
  return (
    <MuiMaterial.Icon color={args.color} fontSize={args.fontSize}>
      {args.iconName}
    </MuiMaterial.Icon>
  );
};

export const SimpleIcon = Template.bind({});
SimpleIcon.args = {
  color: "primary",
  fontSize: "medium",
  iconName: "Build",
};
