import React from "react";
import * as MuiMaterial from "@mui/material";

export default {
  title: "Material UI/Chip with avatar",
  component: MuiMaterial.Chip,
  parameters: {
    useFigmaLayers: true,
  },
  argTypes: {
    color: {
      description: "Color",
      control: { type: "select" },
      options: ["primary", "secondary", "error", "info", "success", "warning"],
    },
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["filled", "outlined"],
    },
    size: {
      description: "Size",
      control: { type: "select" },
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
