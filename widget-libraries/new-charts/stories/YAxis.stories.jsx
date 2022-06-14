import React from "react";
import * as Recharts from "recharts";

export default {
  title: "New Charts/YAxis",
  component: Recharts.YAxis,
  parameters: {
    docs: {
      description: {
        component: "Y Axis",
      },
    },
  },
  argTypes: {
    yAxisDataKey: { description: "Y Axis Data Key" },
  },
};

const Template = (args) => {
  return <Recharts.YAxis />;
};

export const SimpleYAxis = Template.bind({});
SimpleYAxis.args = {};
SimpleYAxis.storyInfo = {
  name: "SimpleYAxis",
  kind: "New Charts/YAxis",
};
