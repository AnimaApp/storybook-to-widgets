import React from "react";
import * as Mantine from "@mantine/core";
import { ColorInput } from "@mantine/core";

export default {
  title: "Mantine/ColorInput",
  component: Mantine.ColorInput,
  parameters: {
    docs: {
      description: {
        component: "ColorInput",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    description: { description: "Description", type: "string" },
    error: { description: "Description", type: "string" },
    required: { description: "Required", type: "boolean" },
    disabled: { description: "Disabled", type: "boolean" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    format: {
      description: "Format",
      control: { type: "select" },
      options: ["hex", "rgba", "rgb", "hsl", "hsla"],
    },
    // icon: to do
    iconWidth: { description: "Icon width", type: "number" },
    withPicker: { description: "With picker", type: "boolean" },
    withPreview: { description: "With Preview", type: "boolean" },
    withinPortal: { description: "Within portal", type: "boolean" },
    swatches: { description: "Swatches", type: "string" },
    swatchesPerRow: { description: "Swatches per row", type: "number" },
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["unstyled", "default", "filled"],
    },
  },
};

const Template = (args) => {
  return (
    <Mantine.ColorInput
      label={args.label}
      description={args.description}
      error={args.error}
      required={args.required}
      disabled={args.disabled}
      size={args.size}
      format={args.format}
      icon={args.icon}
      iconWidth={args.iconWidth}
      withPicker={args.withPicker}
      withPreview={args.withPreview}
      withinPortal={args.withinPortal}
      swatches={args.swatches}
      swatchesPerRow={args.swatchesPerRow}
      variant={args.variant}
    />
  );
};

export const SimpleColorInput = Template.bind({});

SimpleColorInput.args = {
  label: "Label",
  description: "",
  error: "",
  required: false,
  disabled: false,
  size: "md",
  format: "hex",
  // icon: to do
  iconWidth: 10,
  withPicker: false,
  withPreview: false,
  withinPortal: false,
  swatches: "",
  swatchesPerRow: 1,
  variant: "default",
};

