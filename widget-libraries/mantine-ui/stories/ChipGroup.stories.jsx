import React from "react";
import * as MantineCore from "@mantine/core";
import { SimpleChip } from "./Chip.stories";

export default {
  title: "Mantine UI/Chip Group",
  component: MantineCore.Chip.Group,
  parameters: {
    docs: {
      description: {
        component: "Chip Group",
      },
    },
  },
  argTypes: {
    offset: {
      description: "Offset",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    spacing: {
      description: "Spacing",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    multiple: { description: "Multiple", type: "boolean" },
    position: {
      description: "Position",
      control: { type: "select" },
      options: ["left", "right", "center", "apart"],
    },
    item: {
      type: "story",
      description: "item",
      storyInfo: SimpleChip.storyInfo,
    },
    item2: {
      type: "story",
      description: "item",
      storyInfo: SimpleChip.storyInfo,
    },
    item3: {
      type: "story",
      description: "item",
      storyInfo: SimpleChip.storyInfo,
    },
  },
};

const Template = (args) => {
  return (
    <MantineCore.Chip.Group
      offset={args.offset}
      spacing={args.spacing}
      multiple={args.multiple}
      position={args.position}
    >
      <SimpleChip {...args.item} />
      <SimpleChip {...args.item2} />
      <SimpleChip {...args.item3} />
    </MantineCore.Chip.Group>
  );
};
export const SimpleChipGroup = Template.bind({});

SimpleChipGroup.args = {
  offset: "md",
  spacing: "md",
  multiple: false,
  position: "left",
  item: {
    ...SimpleChip.args,
    label: "Label",
  },
  item2: {
    ...SimpleChip.args,
    label: "Label",
  },
  item3: {
    ...SimpleChip.args,
    label: "Label",
  },
};
