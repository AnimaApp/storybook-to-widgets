import React from "react";
import * as Recharts from "recharts";

export default {
  title: "New Charts/XAxis",
  component: Recharts.XAxis,
  parameters: {
    docs: {
      description: {
        component: "X Axis",
      },
    },
    onlyAddedOnce: true,
  },
  argTypes: {
    xAxisDataKey: { description: "X Axis Data Key" },
  },
};

const Template = (args) => {
  return <Recharts.XAxis dataKey={args.xAxisDataKey} />;
};

export const SimpleXAxis = Template.bind({});
SimpleXAxis.args = {
  xAxisDataKey: "name",
};
SimpleXAxis.storyInfo = {
  name: "SimpleXAxis",
  kind: "New Charts/XAxis",
};
