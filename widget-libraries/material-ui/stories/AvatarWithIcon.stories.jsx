import React from "react";
import * as MuiMaterial from "@mui/material";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Material UI/Avatar with icon",
  component: MuiMaterial.Avatar,
  argTypes: {
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["circular", "rounded", "square"],
    },

    iconName: {
      control: { type: "select" },
      options: iconOptions,
      description: "Icon",
      transform: iconTransform,
      required: false,
    },
  },
  decorators: [withIconMapped],
};

const Template = (args) => {
  return (
    <MuiMaterial.Avatar variant={args.variant}>
      {args.iconName}
    </MuiMaterial.Avatar>
  );
};

export const IconAvatar = Template.bind({});
IconAvatar.args = {
  variant: "square",
  iconName: "Build",
};
