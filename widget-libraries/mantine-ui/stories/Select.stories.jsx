import React from "react";
import * as MantineCore from "@mantine/core";
import { iconOptions, iconTransform } from "../utils";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Mantine/Select",
  component: MantineCore.Select,
  parameters: {
    docs: {
      description: {
        component: "Select",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
    description: { description: "Description", type: "string" },
    error: { description: "Error", type: "string" },
    disabled: { description: "Disabled", type: "boolean" },
    required: { description: "Required", type: "boolean" },
    allowDeselect: { description: "Allow deselect", type: "boolean" },
    clearable: { description: "Clearable", type: "boolean" },
    initiallyOpened: { description: "Initially opened", type: "boolean" },
    dropdownPosition: {
      description: "Dropdown position",
      control: { type: "select" },
      options: ["bottom", "top", "flip"],
    },
    limit: { description: "Limit", type: "number" },
    maxDropdownHeight: { description: "Max Dropdown Height", type: "number" },
    searchable: { description: "Searchable", type: "boolean" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    iconName: {
      control: { type: "select" },
      options: iconOptions,
      description: "Icon",
      transform: iconTransform,
      required: false,
    },
    iconWidth: { description: "Icon width", type: "number" },
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["unstyled", "filled", "default"],
    },
    width: { description: "Width", type: "string" },
  },
  decorators: [withIconMapped],
};

const data = [
  {
    image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
    label: "Bender Bending Rodríguez",
    value: "Bender Bending Rodríguez",
    description: "Fascinated with cooking",
  },

  {
    image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
    label: "Carol Miller",
    value: "Carol Miller",
    description: "One of the richest people on Earth",
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
    label: "Homer Simpson",
    value: "Homer Simpson",
    description: "Overweight, lazy, and often ignorant",
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png",
    label: "Spongebob Squarepants",
    value: "Spongebob Squarepants",
    description: "Not just a sponge",
  },
];

const Template = (args) => {
  return (
    <MantineCore.Select
      label={args.label}
      description={args.description}
      error={args.error}
      disabled={args.disabled}
      required={args.required}
      allowDeselect={args.allowDeselect}
      clearable={args.clearable}
      initiallyOpened={args.initiallyOpened}
      dropdownPosition={args.dropdownPosition}
      limit={args.limit}
      maxDropdownHeight={args.maxDropdownHeight}
      searchable={args.searchable}
      size={args.size}
      icon={args.iconName}
      iconWidth={args.iconWidth}
      variant={args.variant}
      data={args.data}
      style={{ width: args.width }}
    />
  );
};

export const SimpleSelect = Template.bind({});

SimpleSelect.args = {
  label: "Label",
  description: "Description",
  error: "",
  disabled: false,
  required: false,
  allowDeselect: false,
  clearable: false,
  initiallyOpened: false,
  dropdownPosition: "top",
  limit: 100,
  maxDropdownHeight: 100,
  searchable: false,
  size: "md",
  variant: "filled",
  data: data,
  width: "300px",
};
