import React from "react";
import * as Recharts from "recharts";
import { SimpleTooltip } from "./Tooltip.stories";
import { SimpleLegend } from "./Legend.stories";
import { SimpleXAxis } from "./XAxis.stories";
import { SimpleYAxis } from "./YAxis.stories";
import { SimpleCartesianGrid } from "./CartesianGrid.stories";
import { SimpleLine } from "./Line.stories";

export default {
  title: "New Charts/LineChart",
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
    {args.ShowCartesianGrid && <Recharts.CartesianGrid strokeDasharray="3 3" />}
    <Recharts.XAxis dataKey="name" hide={!args.ShowXAxis} />
    <Recharts.YAxis hide={!args.ShowYAxis} />
    {args.ShowTooltip && <Recharts.Tooltip />}
    {args.ShowLegend && (
      <Recharts.Legend align={args.align} verticalAlign={args.verticalAlign} />
    )}
    <Recharts.Line
      type="monotone"
      dataKey={args.line1Key}
      stroke={args.line1Color}
      dot={false}
    />
    <Recharts.Line
      type="monotone"
      dataKey={args.line2Key}
      stroke={args.line2Color}
      dot={false}
    />
  </Recharts.LineChart>
);

export const Simple = Template.bind({});
Simple.args = {
  width: 450,
  height: 170,
  margin: {
    top: 5,
    right: 30,
    left: 20,
    bottom: 5,
  },
  line1Color: "#3366FF",
  line2Color: "#009379",
  line1Key: "blue",
  line2Key: "green",
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
  align: "center",
  verticalAlign: "bottom",
  ShowCartesianGrid: true,
  ShowXAxis: false,
  ShowYAxis: false,
  ShowTooltip: true,
  ShowLegend: false,
};
