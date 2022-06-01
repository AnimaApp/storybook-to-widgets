import React from "react";
import * as MuiMaterial from "@mui/material";

export default {
  title: "Material UI/Chip with avatar",
  component: MuiMaterial.Chip,
  argTypes: {
    color: {
      description: "Color",
      type: "options",
      options: ["primary", "secondary", "error", "info", "success", "warning"],
    },
    variant: {
      description: "Variant",
      type: "options",
      options: ["filled", "outlined"],
    },
    size: {
      description: "Size",
      type: "options",
      options: ["small", "medium"],
    },
    clickable: {
      description: "Clickable",
      type: "boolean",
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
    label: {
      description: "Label",
      type: "string",
    },
    imageVariant: {
      description: "Image variant",
      type: "options",
      options: ["circular", "rounded", "square"],
    },
    imageSrc: {
      description: "Image source",
      type: "string",
    }
  }
};

const Template = (args) => {
  return (
    <MuiMaterial.Chip
      color={args.color}
      disabled={args.disabled}
      size={args.size}
      variant={args.variant}
      label={args.label}
      clickable={args.clickable}
      avatar={<MuiMaterial.Avatar variant={args.imageVariant} src={args.imageSrc} />}
    />
  );
};

export const SimpleChipWithAvatar = Template.bind({});
SimpleChipWithAvatar.args = {
  color: "primary",
  size: "medium",
  disabled: false,
  clickable: true,
  variant: "outlined",
  label: "Chip Label",
  imageVariant: "circular",
  imageSrc: "https://joeschmoe.io/api/v1/random"
};
