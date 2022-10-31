import React from "react";
import * as Recharts from "recharts";

export default {
  title: "Charts/SimpleDonutChart",
  component: Recharts.PieChart,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  argTypes: {
    ShowTooltip: { description: "Show Tooltip" },
    dataFillColor: { description: "Fill Color" },
    dataKey: { description: "Data Key" },
    align: { description: "Align" },
    verticalAlign: { description: "Vertical Align" },
    dataInnerRadius: { description: "Inner Radius" },
    dataOuterRadius: { description: "Outer Radius" },
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
      innerRadius={args.dataInnerRadius}
      fill={args.dataFillColor}
      label
    >
      {args.data.map((entry, index) => (
        <Recharts.Cell key={`cell-${index}`} fill={entry.color} />
      ))}
    </Recharts.Pie>
    {args.ShowTooltip && <Recharts.Tooltip />}
    <Recharts.Legend align={args.align} verticalAlign={args.verticalAlign} />
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
  dataOuterRadius: 50,
  dataInnerRadius: 40,
  dataKey: "value",
  data: [
    { name: "Group A", value: 400, color: "#3366FF" },
    { name: "Group B", value: 300, color: "#009379" },
    { name: "Group C", value: 300, color: "#FF6250" },
    { name: "Group D", value: 200, color: "#FFDF90" },
  ],
  align: "center",
  verticalAlign: "top",
  ShowTooltip: false,
};
