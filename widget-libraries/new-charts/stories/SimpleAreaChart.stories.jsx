import React from "react";
import * as Recharts from "recharts";
import { SimpleTooltip } from "./Tooltip.stories";
import { SimpleLegend } from "./Legend.stories";
import { SimpleXAxis } from "./XAxis.stories";
import { SimpleYAxis } from "./YAxis.stories";
import { SimpleCartesianGrid } from "./CartesianGrid.stories";
import { SimpleArea } from "./Area.stories";

export default {
  title: "New Charts/AreaChart",
  component: Recharts.AreaChart,
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
    area1: {
      type: "story",
      storyInfo: SimpleArea.storyInfo,
    },
    area2: {
      type: "story",
      storyInfo: SimpleArea.storyInfo,
    },
  },
};

const Template = (args) => (
  <Recharts.AreaChart
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
    <SimpleArea {...args.area1} />
    <SimpleArea {...args.area2} />
  </Recharts.AreaChart>
);

export const SingleAreaChart = Template.bind({});
SingleAreaChart.args = {
  width: 450,
  height: 170,
  margin: {
    top: 5,
    right: 30,
    left: 20,
    bottom: 5,
  },
  data: [
    {
      name: "A",
      blue: 250,
      green: 140,
    },
    {
      name: "B",
      blue: 100,
      green: 290,
    },
    {
      name: "C",
      blue: 200,
      green: 400,
    },
    {
      name: "D",
      blue: 300,
      green: 190,
    },
    {
      name: "E",
      blue: 450,
      green: 120,
    },
    {
      name: "F",
      blue: 0,
      green: 280,
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
  area1: {
    fillColor: "#3366FF",
    fillOpacity: 0.5,
    areaStrokeColor: "#3366FF",
    areaKey: "blue",
  },
  area2: {
    fillColor: "#009379",
    fillOpacity: 0.5,
    areaStrokeColor: "#009379",
    areaKey: "green",
  },
};
