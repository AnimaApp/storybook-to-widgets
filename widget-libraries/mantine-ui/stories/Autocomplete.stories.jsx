import React from "react";
import * as Mantine from "@mantine/core";

export default {
  title: "Mantine/Autocomplete",
  component: Mantine.Autocomplete,
  parameters: {
    docs: {
      description: {
        component: "Autocomplete",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    description: { description: "Description", type: "string" },
    error: { description: "Error", type: "string" },
    disabled: { description: "Disabled", type: "boolean" },
    required: { description: "Required", type: "boolean" },
    initiallyOpened: { description: "Initially opened", type: "boolean" },
    dropdownPosition: {
      description: "Dropdown position",
      control: { type: "select" },
      options: ["bottom", "top", "flip"],
    },
    limit: { description: "Limit", type: "number" },
    maxDropdownHeight: { description: "Max Dropdown Height", type: "number" },
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

const data = ['React', 'Angular', 'Svelte', 'Vue']


const Template = (args) => {
  return (
    <Mantine.Autocomplete
      label={args.label}
      description={args.description}
      error={args.error}
      disabled={args.disabled}
      required={args.required}
      initiallyOpened={args.initiallyOpened}
      dropdownPosition={args.dropdownPosition}
      limit={args.limit}
      maxDropdownHeight={args.maxDropdownHeight}
      size={args.size}
      icon={args.icon}
      iconWidth={args.iconWidth}
      variant={args.variant}
      data={args.data}
    />
  );
};

export const SimpleAutocomplete = Template.bind({});

SimpleAutocomplete.args = {
  label: "Label",
  description: "Description",
  error: "Error",
  disabled: false,
  required: false,
  initiallyOpened: false,
  dropdownPosition: "top",
  limit: 100,
  maxDropdownHeight: 100,
  size: "md",
  // icon: to do
  iconWidth: 20,
  variant: "filled",
  data: data,
};


