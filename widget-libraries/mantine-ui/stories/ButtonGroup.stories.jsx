import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine/Button Group",
  component: MantineCore.Button.Group,
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
    <MantineCore.Button.Group
      orientation={args.orientation}
      buttonBorderWidth={args.buttonBorderWidth}
    >
      <MantineCore.Button variant="default">First</MantineCore.Button>
      <MantineCore.Button variant="default">Second</MantineCore.Button>
      <MantineCore.Button variant="default">Second</MantineCore.Button>
    </MantineCore.Button.Group>
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
