import React from "react";
import * as MuiMaterial from "@mui/material";
import { options, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Material UI/Chip",
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

    iconName: {
      type: "options",
      options: options,
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
