import React from "react";
import * as Recharts from "recharts";
import data from "./data";

export default {
  title: "Charts/LineChart",
  component: Recharts.LineChart,
};

const Template = (args) => (
  <Recharts.LineChart {...args}>
    {args.AnimaComponentShowCartesianGrid && <Recharts.CartesianGrid strokeDasharray="3 3" />}
    {args.AnimaComponentShowXAxis && <Recharts.XAxis dataKey="name" />}
    {args.AnimaComponentShowYAxis && <Recharts.YAxis />}
    {args.AnimaComponentShowTooltip && <Recharts.Tooltip />}
    {args.AnimaComponentShowLegend && (
      <Recharts.Legend align={args.align} verticalAlign={args.verticalAlign} />
    )}
    <Recharts.Line
      type="monotone"
      dataKey={args.line1Key}
      stroke={args.line1Stroke}
      activeDot={{ r: 8 }}
    />
    <Recharts.Line type="monotone" dataKey={args.line2Key} stroke={args.line2Stroke} />
  </Recharts.LineChart>
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
  line1Stroke: "#82ca9d",
  line2Stroke: "#8884d8",
  line1Key: "uv",
  line2Key: "pv",
  data: data,
  align: "center",
  verticalAlign: "bottom",
  AnimaComponentShowCartesianGrid: true,
  AnimaComponentShowXAxis: true,
  AnimaComponentShowYAxis: true,
  AnimaComponentShowTooltip: true,
  AnimaComponentShowLegend: true,
};
