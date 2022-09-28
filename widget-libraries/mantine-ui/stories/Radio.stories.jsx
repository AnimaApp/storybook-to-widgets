import React from "react";
import * as Mantine from "@mantine/core";

export default {
  title: "Mantine/Radio",
  component: Mantine.Radio,
  parameters: {
    docs: {
      description: {
        component: "Radio",
      },
    },
  },
  argTypes: {
    label: { description: "Label", type: "string" },
  },
};

const Template = (args) => {
  return <Mantine.Radio label={args.label} />;
};

export const SimpleRadio = Template.bind({});

SimpleRadio.args = {
  label: "Label",
};

SimpleRadio.storyInfo = {
  name: "SimpleRadio",
  kind: "Mantine/Radio",
};
