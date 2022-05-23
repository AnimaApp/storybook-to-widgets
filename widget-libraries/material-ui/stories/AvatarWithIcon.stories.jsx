import React from "react";
import * as MuiMaterial from "@mui/material";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Material UI/Avatar With Icon",
  component: MuiMaterial.Avatar,
  argTypes: {
    variant: {
      description: "Variant",
      type: "options",
      options: ["circular", "rounded", "square"],
    },

    iconName: {
      type: "options",
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
