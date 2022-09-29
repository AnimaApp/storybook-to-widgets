import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine/NativeSelect",
  component: MantineCore.NativeSelect,
  parameters: {
    docs: {
      description: {
        component: "NativeSelect",
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
  },
};

const data = ["React", "Vue", "Angular", "Svelte"];

const Template = (args) => {
  return (
    <MantineCore.NativeSelect
      label={args.label}
      placeholder={args.placeholder}
      description={args.description}
      error={args.error}
      disabled={args.disabled}
      required={args.required}
      size={args.size}
      icon={args.icon}
      iconWidth={args.iconWidth}
      variant={args.variant}
      data={args.data}
    />
  );
};

export const SimpleNativeSelect = Template.bind({});

SimpleNativeSelect.args = {
  label: "Label",
  placeholder: "Placeholder",
  description: "Description",
  error: "",
  disabled: false,
  required: false,
  size: "md",
  // icon: to do
  iconWidth: 20,
  variant: "filled",
  data: data,
};
