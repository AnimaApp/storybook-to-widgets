import React from "react";
import * as Recharts from "recharts";

export default {
  title: "Charts/SimplePieChart",
  component: Recharts.PieChart,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  argTypes: {
    ShowLegend: { description: "Show Legend" },
    ShowTooltip: { description: "Show Tooltip" },
    dataFillColor: { description: "Fill Color" },
    dataKey: { description: "Data Key" },
    align: { description: "Align" },
    verticalAlign: { description: "Vertical Align" },
  },
};

const Template = (args) => (
  <Recharts.PieChart {...args}>
    <Recharts.Pie
      data={args.data}
      dataKey={args.dataKey}
      cx="50%"
      cy="50%"
      outerRadius={args.dataOuterRadius}
      fill={args.dataFillColor}
      label
    />
    {args.ShowTooltip && <Recharts.Tooltip />}
    {args.ShowLegend && (
      <Recharts.Legend align={args.align} verticalAlign={args.verticalAlign} />
    )}
  </Recharts.PieChart>
);

export const SinglePie = Template.bind({});
SinglePie.args = {
  width: 450,
  height: 170,
  margin: {
    top: 5,
    right: 30,
    left: 20,
    bottom: 5,
  },
  dataFillColor: "#3366FF",
  dataOuterRadius: 60,
  dataKey: "value",
  data: [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ],
  align: "center",
  verticalAlign: "top",
  ShowTooltip: false,
  ShowLegend: false,
};
