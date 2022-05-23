import React from "react";
import * as MuiMaterial from "@mui/material";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Material UI/Avatar With Image",
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
  return <MuiMaterial.Avatar variant={args.variant} src={args.src} />;
};

export const ImageAvatar = Template.bind({});

ImageAvatar.args = {
  variant: "square",
  src: "https://joeschmoe.io/api/v1/random",
};

ImageAvatar.storyInfo = {
  name: "ImageAvatar",
  kind: "Material UI/Avatar With Image",
};
