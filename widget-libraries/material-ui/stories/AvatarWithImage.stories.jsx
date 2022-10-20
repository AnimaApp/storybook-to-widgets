import React from "react";
import * as MuiMaterial from "@mui/material";

export default {
  title: "Material UI/Avatar with image",
  component: MuiMaterial.Avatar,
  parameters: {
    useFigmaLayers: true,
  },
  argTypes: {
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["circular", "rounded", "square"],
    },
    src: {
      description: "Source",
      type: "string",
    },
  },
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
  kind: "Material UI/Avatar with image",
};
