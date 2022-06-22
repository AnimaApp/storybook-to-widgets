import React from "react";
import * as Recharts from "recharts";
import { SimpleCell } from "./Cell.stories";
import { SimpleTooltip } from "./Tooltip.stories";
import { SimpleLegend } from "./Legend.stories";

export default {
  title: "New Charts/DonutChart",
  component: Recharts.PieChart,
  parameters: {},
  argTypes: {
    dataFillColor: { description: "Fill Color" },
    dataKey: { description: "Data Key" },
    dataInnerRadius: { description: "Inner Radius" },
    dataOuterRadius: { description: "Outer Radius" },
    cell1: {
      type: "story",
      storyInfo: SimpleCell.storyInfo,
    },
    cell2: {
      type: "story",
      storyInfo: SimpleCell.storyInfo,
    },
    cell3: {
      type: "story",
      storyInfo: SimpleCell.storyInfo,
    },
    cell4: {
      type: "story",
      storyInfo: SimpleCell.storyInfo,
    },
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
  <Recharts.PieChart
    width={args.width}
    height={args.height}
    margin={args.margin}
  >
    <Recharts.Pie
      data={args.data}
      dataKey={args.dataKey}
      cx="50%"
      cy="50%"
      outerRadius={args.dataOuterRadius}
      innerRadius={args.dataInnerRadius}
      fill={args.dataFillColor}
      label
    >
      <SimpleCell {...args.cell1} />
      <SimpleCell {...args.cell2} />
      <SimpleCell {...args.cell3} />
      <SimpleCell {...args.cell4} />
    </Recharts.Pie>
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
  dataOuterRadius: 50,
  dataInnerRadius: 40,
  dataKey: "value",
  data: [
    { name: "Group A", value: 400, color: "#3366FF" },
    { name: "Group B", value: 300, color: "#009379" },
    { name: "Group C", value: 300, color: "#FF6250" },
    { name: "Group D", value: 200, color: "#FFDF90" },
  ],
  cell1: {
    color: "#3366FF",
    index: "1",
  },
  cell2: {
    color: "#009379",
    index: "2",
  },
  cell3: {
    color: "#FF6250",
    index: "3",
  },
  cell4: {
    color: "#FFDF90",
    index: "4",
  },
  legend: {
    align: "center",
    verticalAlign: "top",
  },
  tooltip: {
    offset: 10,
  },
};
