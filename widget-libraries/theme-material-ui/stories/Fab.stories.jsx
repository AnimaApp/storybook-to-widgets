import React from "react";
import * as MuiMaterial from "@mui/material";
import withIconMapped from "../decorators/withIconMapped";
import { iconOptions, iconTransform } from "../utils";

export default {
  title: "New Material UI/Fab",
  component: MuiMaterial.Fab,
  parameters: {
    useFigmaLayers: true,
  },
  argTypes: {
    color: {
      description: "Color",
      control: { type: "select" },
      options: [
        "default",
        "error",
        "info",
        "inherit",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
    },
    iconName: {
      control: { type: "select" },
      options: iconOptions,
      description: "Icon",
      transform: iconTransform,
    },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["circular", "extended"],
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
    disableRipple: {
      description: "Disable Ripple",
      type: "boolean",
    },
    label: {
      description: "Label",
      type: "string",
    },
  },
  decorators: [withIconMapped],
};

const Template = (args) => {
  return (
    <MuiMaterial.Fab
      color={args.color}
      size={args.size}
      variant={args.variant}
      disabled={args.disabled}
      disableRipple={args.disableRipple}
    >
      {args.label && args.label}
      {args.iconName}
    </MuiMaterial.Fab>
  );
};

export const SimpleFab = Template.bind({});
SimpleFab.args = {
  color: "primary",
  variant: "circular",
  iconName: "AddOutlined",
  size: "medium",
  disabled: false,
  disableRipple: false,
  label: "",
};
