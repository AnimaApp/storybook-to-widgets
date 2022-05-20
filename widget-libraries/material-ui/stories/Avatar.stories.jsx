import React from "react";
import * as MuiMaterial from "@mui/material";
import { options, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Material UI/Avatar",
  component: MuiMaterial.Avatar,
  argTypes: {
    variant: {
      description: "Variant",
      type: "options",
      options: ["circular", "rounded", "square"],
    },

    iconName: {
      type: "options",
      options: options,
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
      {args.letter}
    </MuiMaterial.Avatar>
  );
};

const TemplateIcon = (args) => {
  return (
    <MuiMaterial.Avatar variant={args.variant}>
      {args.iconName}
    </MuiMaterial.Avatar>
  );
};

const TemplateImage = (args) => {
  return <MuiMaterial.Avatar variant={args.variant} src={args.src} />;
};

export const IconAvatar = TemplateIcon.bind({});
IconAvatar.args = {
  variant: "square",
  iconName: "Build",
};

export const LetterAvatar = Template.bind({});
LetterAvatar.args = {
  variant: "square",
  letter: "P9",
};

export const ImageAvatar = TemplateImage.bind({});

ImageAvatar.args = {
  variant: "square",
  src: "https://joeschmoe.io/api/v1/random",
};

ImageAvatar.storyInfo = {
  name: "ImageAvatar",
  kind: "Material UI/Avatar",
};
