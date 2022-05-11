import React from "react";
import * as Recharts from "recharts";

export default {
  title: "Charts/SimpleLineChart",
  component: Recharts.LineChart,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  argTypes: {
    ShowXAxis: { description: "Show X axis" },
    ShowYAxis: { description: "Show Y axis" },
    ShowCartesianGrid: { description: "Show CartesianGrid" },
    ShowLegend: { description: "Show Legend" },
    ShowTooltip: { description: "Show Tooltip" },
    line1Color: { description: "Line1 Color" },
    line2Color: { description: "Line2 Color" },
    line1Key: { description: "Line1 Key" },
    line2Key: { description: "Line2 Key" },
    xAxisDataKey: { description: "X Axis Data Key" },
    align: { description: "Align" },
    verticalAlign: { description: "Vertical Align" },
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
