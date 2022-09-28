import React from "react";
import * as Mantine from "@mantine/core";

export default {
  title: "Mantine/Burger",
  component: Mantine.Burger,
  parameters: {
    docs: {
      description: {
        component: "Burger",
      },
    },
  },
  argTypes: {
    opened: { description: "Opened", type: "boolean" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    transitionDuration: { description: "Transition Duration", type: "number" },
  },
};

const Template = (args) => {
  return (
    <Mantine.Burger
      opened={args.opened}
      size={args.size}
      transitionDuration={args.transitionDuration}
    />
  );
};

export const SimpleBurger = Template.bind({});

SimpleBurger.args = {
  opened: false,
  size: "md",
  transitionDuration: 100,
};

