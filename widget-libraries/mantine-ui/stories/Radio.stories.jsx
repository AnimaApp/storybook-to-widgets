import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine/Radio",
  component: MantineCore.Radio,
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
  return <MantineCore.Radio label={args.label} />;
};

export const SimpleRadio = Template.bind({});

SimpleRadio.args = {
  label: "Label",
};

SimpleRadio.storyInfo = {
  name: "SimpleRadio",
  kind: "Mantine/Radio",
};
