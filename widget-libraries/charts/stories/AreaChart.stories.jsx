import React from "react";
import * as Recharts from "recharts";
import data from "./data";

export default {
  title: "Charts/AreaChart",
  component: Recharts.AreaChart,
  parameters: {
    docs: {
      description: {
        component:
          "combines the line chart and bar chart to show how one or more groups' numeric values change over the progression of a second variable, typically that of time.",
      },
    },
  },
  argTypes: {
    fillColor: {
      description: "fill color",
    },
  },
};

const Template = (args) => (
  <Recharts.AreaChart {...args}>
    {args.AnimaComponentShowCartesianGrid && (
      <Recharts.CartesianGrid strokeDasharray="3 3" />
    )}
    {args.AnimaComponentShowXAxis && (
      <Recharts.XAxis dataKey={args.xAxisDataKey} />
    )}
    {args.AnimaComponentShowYAxis && <Recharts.YAxis />}
    {args.AnimaComponentShowTooltip && <Recharts.Tooltip />}
    {args.AnimaComponentShowLegend && (
      <Recharts.Legend align={args.align} verticalAlign={args.verticalAlign} />
    )}
    <Recharts.Area
      type="monotone"
      dataKey={args.dataKey}
      stroke={args.strokeColor}
      fill={args.fillColor}
    />
  </Recharts.AreaChart>
);

export const Simple = Template.bind({});
Simple.args = {
  width: 500,
  height: 300,
  margin: {
    top: 5,
    right: 30,
    left: 20,
    bottom: 5,
  },
  fillColor: "#8884d8",
  strokeColor: "8884d8",
  dataKey: "uv",
  xAxisDataKey: "name",
  align: "center",
  verticalAlign: "bottom",
  data: data,
  AnimaComponentShowCartesianGrid: true,
  AnimaComponentShowXAxis: true,
  AnimaComponentShowYAxis: true,
  AnimaComponentShowTooltip: true,
  AnimaComponentShowLegend: true,
  AnimaWidgetDescription:
    "An area chart combines the line chart and bar chart to show how one or more groups' numeric values change over the progression of a second variable, typically that of time.",
};
