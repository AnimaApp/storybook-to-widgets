import React from "react";
import * as MuiMaterial from "@mui/material";
import * as MuiIconsMaterial from "@mui/icons-material";
import withIconMapped from "../decorators/withIconMapped";

const options = ["None", ...Object.keys(MuiIconsMaterial)];
const iconTransform =
  "<% if (param !== 'None') { %><MuiIconsMaterial.<%= param %> /><% } else { %> '' <% } %>";

export default {
  title: "Material UI/Fab",
  component: MuiMaterial.Fab,
  decorators: [withIconMapped],
  argTypes: {
    color: {
      description: "Color",
      type: "options",
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
      type: "options",
      options: options,
      description: "Icon",
      transform: iconTransform,
    },
    size: {
      description: "Size",
      type: "options",
      options: ["small", "medium", "large"],
    },
    variant: {
      description: "Variant",
      type: "options",
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
