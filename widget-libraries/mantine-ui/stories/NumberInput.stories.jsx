import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine/NumberInput",
  component: MantineCore.NumberInput,
  parameters: {
    docs: {
      description: {
        component: "NumberInput",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    placeholder: { description: "Placeholder", type: "string" },
    description: { description: "Description", type: "string" },
    error: { description: "Error", type: "string" },
    disabled: { description: "Disabled", type: "boolean" },
    required: { description: "Required", type: "boolean" },
    decimalSeparator: { description: "Decimal Separator", type: "string" },
    precision: { description: "Precision", type: "number" },
    min: { description: "Min", type: "number" },
    max: { description: "Max", type: "number" },
    step: { description: "Step", type: "number" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    // icon: to do
    iconWidth: { description: "Icon width", type: "number" },
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["unstyled", "filled", "default"],
    },
    hideControls: { description: "Hide controls", type: "boolean" },
  },
};

const Template = (args) => {
  return (
    <MantineCore.NumberInput
      label={args.label}
      placeholder={args.placeholder}
      description={args.description}
      error={args.error}
      disabled={args.disabled}
      required={args.required}
      decimalSeparator={args.decimalSeparator}
      precision={args.precision}
      min={args.min}
      max={args.max}
      size={args.size}
      icon={args.icon}
      iconWidth={args.iconWidth}
      variant={args.variant}
      hideControls={args.hideControls}
    />
  );
};

export const SimpleNumberInput = Template.bind({});

SimpleNumberInput.args = {
  label: "Label",
  placeholder: "",
  description: "",
  error: "",
  disabled: false,
  required: false,
  decimalSeparator: ",",
  precision: 1,
  min: 1,
  max: 10,
  step: 1,
  size: "md",
  // icon: to do
  iconWidth: 20,
  variant: "default",
  hideControls: false,
};
