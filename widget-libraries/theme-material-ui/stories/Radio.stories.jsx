import React from "react";
import * as MuiMaterial from "@mui/material";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "New Material UI/Radio",
  component: MuiMaterial.Radio,
  parameters: {
    useFigmaLayers: true,
  },
  argTypes: {
    color: {
      description: "Color",
      control: { type: "select" },
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
      control: { type: "select" },
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
      control: { type: "select" },
      options: iconOptions,
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
  iconName: "RadioButtonChecked",
  label: "Label",
};
