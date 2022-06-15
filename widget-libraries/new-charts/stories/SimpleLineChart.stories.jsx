import React from "react";
import * as Recharts from "recharts";
import { SimpleTooltip } from "./Tooltip.stories";
import { SimpleLegend } from "./Legend.stories";
import { SimpleXAxis } from "./XAxis.stories";
import { SimpleYAxis } from "./YAxis.stories";
import { SimpleCartesianGrid } from "./CartesianGrid.stories";
import { SimpleLine } from "./Line.stories";

export default {
  title: "New Charts/SimpleLineChart",
  component: Recharts.LineChart,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
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
    line1: {
      type: "story",
      storyInfo: SimpleLine.storyInfo,
    },
    line2: {
      type: "story",
      storyInfo: SimpleLine.storyInfo,
    },
  },
};

const Template = (args) => (
  <Recharts.LineChart {...args}>
    <SimpleCartesianGrid {...args.cartesiangrid} />
    <SimpleXAxis {...args.xaxis} />
    <SimpleYAxis {...args.yaxis} />
    <SimpleTooltip {...args.tooltip} />
    <SimpleLegend {...args.legend} />
    <SimpleLine {...args.line1} />
    <SimpleLine {...args.line2} />
  </Recharts.LineChart>
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
      blue: 450,
      green: 480,
    },
    {
      name: "F",
      blue: 0,
      green: 380,
    },
  ],
  line1: {
    lineColor: "#3366FF",
    lineKey: "blue",
  },
  line2: {
    lineColor: "#009379",
    lineKey: "green",
  },
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
};
