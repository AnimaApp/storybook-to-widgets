import React from "react";
import * as MantineCore from "@mantine/core";
import { SimpleTab } from "./Tab.stories";

export default {
  title: "Mantine/Tabs",
  component: MantineCore.Tabs,
  parameters: {
    docs: {
      description: {
        component: "Tabs",
      },
    },
  },
  argTypes: {
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["outline", "default", "pills"],
    },
    orientation: {
      description: "Orientation",
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    value: { description: "Value", type: "string" },
    item: {
      type: "story",
      description: "item",
      storyInfo: SimpleTab.storyInfo,
    },
    item2: {
      type: "story",
      description: "item",
      storyInfo: SimpleTab.storyInfo,
    },
    item3: {
      type: "story",
      description: "item",
      storyInfo: SimpleTab.storyInfo,
    },
  },
};

const Template = (args) => {
  return (
    <MantineCore.Tabs
      variant={args.variant}
      orientation={args.orientation}
      value={args.value}
    >
      <SimpleTab {...args.item} />
      <SimpleTab {...args.item2} />
      <SimpleTab {...args.item3} />
    </MantineCore.Tabs>
  );
};

export const SimpleTabs = Template.bind({});

SimpleTabs.args = {
  variant: "pills",
  orientation: "vertical",
  value: "label1",
  item: {
    ...SimpleTab.args,
    value: "label1",
    // iconName: "Icon2fa",
    label: "Label 1",
  },
  item2: {
    ...SimpleTab.args,
    value: "Label",
    // iconName: "Icon2fa",
    label: "Label 2",
  },
  item3: {
    ...SimpleTab.args,
    value: "Labe PEWNRl",
    // iconName: "Icon2fa",
    label: "Label 3",
  },
};
