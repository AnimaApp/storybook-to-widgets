import React from "react";
import * as Recharts from "recharts";
import { SimpleTooltip } from "./Tooltip.stories";
import { SimpleLegend } from "./Legend.stories";
import { SimpleXAxis } from "./XAxis.stories";
import { SimpleYAxis } from "./YAxis.stories";
import { SimpleCartesianGrid } from "./CartesianGrid.stories";
import { SimpleBar } from "./Bar.stories";

export default {
  title: "New Charts/SimpleBarChart",
  component: Recharts.BarChart,
  argTypes: {
    tooltip: {
      type: "story",
      storyInfo: SimpleTooltip.storyInfo,
    },
    legend: {
      type: "story",
      storyInfo: SimpleLegend.storyInfo,
    },
    xaxis: {
      type: "story",
      storyInfo: SimpleXAxis.storyInfo,
    },
    yaxis: {
      type: "story",
      storyInfo: SimpleYAxis.storyInfo,
    },
    cartesiangrid: {
      type: "story",
      storyInfo: SimpleCartesianGrid.storyInfo,
    },
    bar1: {
      type: "story",
      storyInfo: SimpleBar.storyInfo,
    },
    bar2: {
      type: "story",
      storyInfo: SimpleBar.storyInfo,
    },
  },
};

const Template = (args) => (
  <Recharts.BarChart
    width={args.width}
    height={args.height}
    margin={args.margin}
    data={args.data}
  >
    <SimpleCartesianGrid {...args.cartesiangrid} />
    <SimpleXAxis {...args.xaxis} />
    <SimpleYAxis {...args.yaxis} />
    <SimpleTooltip {...args.tooltip} />
    <SimpleLegend {...args.legend} />
    <SimpleBar {...args.bar1} />
    <SimpleBar {...args.bar2} />
  </Recharts.BarChart>
);

export const Simple = Template.bind({});
Simple.args = {
  width: 280,
  height: 150,
  margin: {
    top: 5,
    right: 30,
    left: 20,
    bottom: 5,
  },
  data: [
    {
      name: "A",
      blue: 60,
      green: 240,
    },
    {
      name: "B",
      blue: 200,
      green: 139,
    },
    {
      name: "C",
      blue: 400,
      green: 200,
    },
    {
      name: "D",
      blue: 208,
      green: 390,
    },
    {
      name: "E",
      blue: 459,
      green: 480,
    },
    {
      name: "F",
      blue: 0,
      green: 380,
    },
  ],
  legend: {
    align: "center",
    verticalAlign: "top",
  },
  tooltip: {
    offset: 10,
  },
  xaxis: {
    xAxisDataKey: "name",
  },
  yaxis: {},
  cartesiangrid: {
    strokeDasharray: "3 3",
  },
  bar1: {
    dataColor: "#3366FF",
    dataKey: "blue",
  },
  bar2: {
    dataColor: "#009379",
    dataKey: "green",
  },
};
