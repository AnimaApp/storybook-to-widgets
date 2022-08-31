import React from "react";
import * as MuiMaterial from "@mui/material";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "New Material UI/Icon",
  component: MuiMaterial.Icon,
  argTypes: {
    color: {
      description: "Color",
      control: { type: "select" },
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
      control: { type: "select" },
      options: ["inherit", "large", "medium", "small"],
    },
    iconName: {
      control: { type: "select" },
      options: iconOptions,
      description: "Icon",
      transform: iconTransform,
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
  iconName: "AddCircleOutline",
};
