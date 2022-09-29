import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine/MultiSelect",
  component: MantineCore.MultiSelect,
  parameters: {
    docs: {
      description: {
        component: "MultiSelect",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    description: { description: "Description", type: "string" },
    error: { description: "Error", type: "string" },
    disabled: { description: "Disabled", type: "boolean" },
    required: { description: "Required", type: "boolean" },
    clearable: { description: "Clearable", type: "boolean" },
    initiallyOpened: { description: "Initially opened", type: "boolean" },
    dropdownPosition: {
      description: "Dropdown position",
      control: { type: "select" },
      options: ["bottom", "top", "flip"],
    },
    limit: { description: "Limit", type: "number" },
    maxDropdownHeight: { description: "Max Dropdown Height", type: "number" },
    maxSelectedValues: { description: "Max Selected Values", type: "number" },
    searchable: { description: "Searchable", type: "boolean" },
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
    // data: to do
  },
};

const data = [
  { value: "react", label: "React" },
  { value: "ng", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "vue", label: "Vue" },
  { value: "riot", label: "Riot" },
  { value: "next", label: "Next.js" },
  { value: "blitz", label: "Blitz.js" },
];

const Template = (args) => {
  return (
    <MantineCore.MultiSelect
      label={args.label}
      description={args.description}
      error={args.error}
      disabled={args.disabled}
      required={args.required}
      clearable={args.clearable}
      initiallyOpened={args.initiallyOpened}
      dropdownPosition={args.dropdownPosition}
      limit={args.limit}
      maxDropdownHeight={args.maxDropdownHeight}
      maxSelectedValues={args.maxSelectedValues}
      searchable={args.searchable}
      size={args.size}
      icon={args.icon}
      iconWidth={args.iconWidth}
      variant={args.variant}
      data={args.data}
    />
  );
};

export const SimpleMultiSelect = Template.bind({});

SimpleMultiSelect.args = {
  label: "Label",
  description: "",
  error: "",
  disabled: false,
  required: false,
  clearable: false,
  initiallyOpened: false,
  dropdownPosition: "top",
  limit: 100,
  maxDropdownHeight: 100,
  maxSelectedValues: 100,
  searchable: false,
  size: "md",
  // icon: to do
  iconWidth: 20,
  variant: "default",
  data: data,
};
