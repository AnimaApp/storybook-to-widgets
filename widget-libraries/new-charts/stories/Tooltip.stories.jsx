import React from "react";
import * as Recharts from "recharts";

export default {
  title: "New Charts/Tooltip",
  component: Recharts.Tooltip,
  parameters: {
    docs: {
      description: {
        component: "Tooltip",
      },
    },
  },
  argTypes: {
    offset: { description: "offset", type: "number" },
  },
};

const Template = (args) => {
  return <Recharts.Tooltip offset={args.offset}></Recharts.Tooltip>;
};

export const SimpleTooltip = Template.bind({});
SimpleTooltip.args = {
  offset: 10,
};
SimpleTooltip.storyInfo = {
  name: "SimpleTooltip",
  kind: "New Charts/Tooltip",
};
