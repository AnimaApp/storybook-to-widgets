import React from "react";
import * as MuiMaterial from "@mui/material";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "New Material UI/Chip",
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
    <MuiMaterial.Chip
      color={args.color}
      disabled={args.disabled}
      size={args.size}
      variant={args.variant}
      label={args.label}
      clickable={args.clickable}
      icon={args.iconName}
    />
  );
};

export const SimpleChip = Template.bind({});
SimpleChip.args = {
  color: "primary",
  size: "medium",
  disabled: false,
  clickable: true,
  variant: "outlined",
  label: "Chip Label",
  iconName: "Build",
};
