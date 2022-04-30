import React from "react";
import * as Recharts from "recharts";
import data from "./data";

export default {
  title: "Charts/BarChart",
  component: Recharts.BarChart,
};

const Template = (args) => (
  <Recharts.BarChart {...args}>
    {args.AnimaComponentShowCartesianGrid && <Recharts.CartesianGrid strokeDasharray="3 3" />}
    {args.AnimaComponentShowXAxis && <Recharts.XAxis dataKey="name" />}
    {args.AnimaComponentShowYAxis && <Recharts.YAxis />}
    {args.AnimaComponentShowTooltip && <Recharts.Tooltip />}
    {args.AnimaComponentShowLegend && (
      <Recharts.Legend align={args.align} verticalAlign={args.verticalAlign} />
    )}
    <Recharts.Bar dataKey={args.data1Key} fill={args.data1Color} />
    <Recharts.Bar dataKey={args.data2Key} fill={args.data2Color} />
  </Recharts.BarChart>
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
  data1Color: "#82ca9d",
  data2Color: "#8884d8",
  data1Key: "uv",
  data2Key: "pv",
  data: data,
  align: "center",
  verticalAlign: "bottom",
  AnimaComponentShowCartesianGrid: true,
  AnimaComponentShowXAxis: true,
  AnimaComponentShowYAxis: true,
  AnimaComponentShowTooltip: true,
  AnimaComponentShowLegend: true,
};
