import React from "react";
import * as MuiMaterial from "@mui/material";
import { options, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Material UI/Radio",
  component: MuiMaterial.Radio,
  argTypes: {
    color: {
      description: "Color",
      type: "options",
      options: [
        "default",
        "primary",
        "secondary",
        "error",
        "info",
        "success",
        "warning",
      ],
    },
    size: {
      description: "Size",
      type: "options",
      options: ["small", "medium"],
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
    checked: {
      description: "Checked",
      type: "boolean",
    },
    iconName: {
      type: "options",
      options: options,
      description: "Icon",
      transform: iconTransform,
    },
    label: {
      description: "Label",
      type: "string",
    },
  },
  decorators: [withIconMapped],
};

const Template = (args) => (
  <MuiMaterial.FormControlLabel
    label={args.label}
    control={
      <MuiMaterial.Radio
        color={args.color}
        disabled={args.disabled}
        checked={args.checked}
        size={args.size}
        checkedIcon={args.iconName}
      />
    }
  />
);

export const SimpleRadio = Template.bind({});
SimpleRadio.args = {
  color: "primary",
  size: "medium",
  disabled: false,
  checked: true,
  iconName: "RadioButtonIcon",
  label: "Label",
};
