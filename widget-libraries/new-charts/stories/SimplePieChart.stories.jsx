import React from "react";
import * as Recharts from "recharts";
import { SimpleTooltip } from "./Tooltip.stories";
import { SimpleLegend } from "./Legend.stories";

export default {
  title: "New Charts/SimplePieChart",
  component: Recharts.PieChart,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  argTypes: {
    dataFillColor: { description: "Fill Color" },
    dataKey: { description: "Data Key" },
    tooltip: {
      type: "story",
      storyInfo: SimpleTooltip.storyInfo,
    },
    legend: {
      type: "story",
      storyInfo: SimpleLegend.storyInfo,
    },
  },
};

const Template = (args) => (
  <Recharts.PieChart {...args}>
    <Recharts.Pie
      data={args.data}
      dataKey={args.dataKey}
      cx="50%"
      cy="50%"
      outerRadius={args.dataOuterRadius}
      fill={args.dataFillColor}
      label
    />
    <SimpleTooltip {...args.tooltip} />
    <SimpleLegend {...args.legend} />
  </Recharts.PieChart>
);

export const SinglePie = Template.bind({});
SinglePie.args = {
  width: 280,
  height: 150,
  margin: {
    top: 5,
    right: 30,
    left: 20,
    bottom: 5,
  },
  dataFillColor: "#3366FF",
  dataOuterRadius: 60,
  dataKey: "value",
  data: [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ],
  legend: {
    align: "center",
    verticalAlign: "top",
  },
  tooltip: {
    offset: 10,
  },
};
