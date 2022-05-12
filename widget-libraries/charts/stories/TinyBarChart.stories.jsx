import React from "react";
import * as Recharts from "recharts";

export default {
  title: "Charts/TinyBarChart",
  component: Recharts.BarChart,
  argTypes: {
    ShowXAxis: { description: "Show X axis" },
    ShowYAxis: { description: "Show Y axis" },
    ShowCartesianGrid: { description: "Show CartesianGrid" },
    ShowLegend: { description: "Show Legend" },
    ShowTooltip: { description: "Show Tooltip" },
    fillColor: { description: "Fill Color" },
    strokeColor: { description: "Stroke Color" },
    dataKey: { description: "Data Key" },
    xAxisDataKey: { description: "X Axis Data Key" },

    align: { description: "Align" },
    verticalAlign: { description: "Vertical Align" },
  },
};

const Template = (args) => (
  <Recharts.BarChart {...args}>
    {args.ShowCartesianGrid && <Recharts.CartesianGrid strokeDasharray="3 3" />}
    <Recharts.XAxis dataKey={args.xAxisDataKey} hide={!args.ShowXAxis} />
    <Recharts.YAxis hide={!args.ShowYAxis} />
    {args.ShowTooltip && <Recharts.Tooltip />}
    {args.ShowLegend && (
      <Recharts.Legend align={args.align} verticalAlign={args.verticalAlign} />
    )}
    <Recharts.Bar dataKey={args.dataKey} fill={args.fillColor} />
  </Recharts.BarChart>
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
  fillColor: "#3366FF",
  strokeColor: "#3366FF",
  dataKey: "blue",
  xAxisDataKey: "blue",
  data: [
    {
      blue: 60,
    },
    {
      blue: 200,
    },
    {
      blue: 400,
    },
    {
      blue: 208,
    },
    {
      blue: 450,
    },
    {
      blue: 100,
    },
  ],
  align: "center",
  verticalAlign: "bottom",
  ShowCartesianGrid: false,
  ShowXAxis: false,
  ShowYAxis: false,
  ShowTooltip: false,
  ShowLegend: false,
};
