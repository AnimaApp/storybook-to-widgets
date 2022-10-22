import React from "react";
import * as MantineCore from "@mantine/core";

export default {
  title: "Mantine UI/Radio",
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
    value: { description: "Value", type: "string" },
  },
};

const Template = (args) => {
  const [checked, setChecked] = React.useState(args.value);
  return <MantineCore.Radio label={args.label} value={args.value} />;
};

export const SimpleRadio = Template.bind({});

SimpleRadio.args = {
  label: "Label",
};

SimpleRadio.storyInfo = {
  name: "SimpleRadio",
  kind: "Mantine UI/Radio",
};
