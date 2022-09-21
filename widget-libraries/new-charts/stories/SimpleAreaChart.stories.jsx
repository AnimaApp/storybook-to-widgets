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
  <Recharts.AreaChart {...args}>
    {args.ShowCartesianGrid && <Recharts.CartesianGrid strokeDasharray="3 3" />}

    <Recharts.XAxis dataKey={args.xAxisDataKey} hide={!args.ShowXAxis} />
    <Recharts.YAxis hide={!args.ShowYAxis} />
    {args.ShowTooltip && <Recharts.Tooltip />}

    {args.ShowLegend && (
      <Recharts.Legend align={args.align} verticalAlign={args.verticalAlign} />
    )}
    <Recharts.Area
      type="monotone"
      dataKey={args.area1Key}
      stroke={args.area1StrokeColor}
      fill={args.fill1Color}
      fillOpacity={args.fill1Opacity}
    />
    <Recharts.Area
      type="monotone"
      dataKey={args.area2Key}
      stroke={args.area2StrokeColor}
      fill={args.fill2Color}
      fillOpacity={args.fill2Opacity}
    />
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
  fill1Color: "#3366FF",
  fill2Color: "#009379",
  fill1Opacity: 0.5,
  fill2Opacity: 0.5,
  area1StrokeColor: "#3366FF",
  area2StrokeColor: "#009379",
  area1Key: "blue",
  area2Key: "green",
  xAxisDataKey: "name",
  align: "center",
  verticalAlign: "bottom",
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
  ShowCartesianGrid: true,
  ShowXAxis: false,
  ShowYAxis: false,
  ShowTooltip: true,
  ShowLegend: false,
};
