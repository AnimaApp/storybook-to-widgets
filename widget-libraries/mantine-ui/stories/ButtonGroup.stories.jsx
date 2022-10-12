import React from "react";
import * as Mantine from "@mantine/core";

export default {
  title: "Mantine/Button Group",
  component: Mantine.Button.Group,
  parameters: {
    docs: {
      description: {
        component: "Button Group",
      },
    },
  },
  argTypes: {
    orientation: {
      description: "Orientation",
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    buttonBorderWidth: { description: "Button border width", type: "number" },
  },
};

const Template = (args) => {
  return (
    <Mantine.Button.Group
      orientation={args.orientation}
      buttonBorderWidth={args.buttonBorderWidth}
    >
      <Mantine.Button variant="default">First</Mantine.Button>
      <Mantine.Button variant="default">Second</Mantine.Button>
      <Mantine.Button variant="default">Second</Mantine.Button>
    </Mantine.Button.Group>
  );
};

export const SimpleButtonGroup = Template.bind({});

SimpleButtonGroup.args = {
  orientation: "horizontal",
  buttonBorderWidth: 20,
};

SimpleButtonGroup.storyInfo = {
  name: "SimpleButtonGroup",
  kind: "Mantine/ButtonGroup",
};
