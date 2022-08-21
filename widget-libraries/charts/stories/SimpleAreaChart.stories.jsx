import React from "react";
import * as Recharts from "recharts";

export default {
  title: "Charts/SimpleAreaChart",
  component: Recharts.AreaChart,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  argTypes: {
    ShowCartesianGrid: { description: "Show CartesianGrid" },
    ShowTooltip: { description: "Show Tooltip" },
    fill1Color: { description: "Fill1 Color" },
    fill2Color: { description: "Fill2 Color" },
    fill1Opacity: { description: "Fill1 Opacity" },
    fill2Opacity: { description: "Fill2 Opacity" },
    area1StrokeColor: { description: "Area1 Stroke" },
    area2StrokeColor: { description: "Area2 Color" },
    area1Key: { description: "Area1 Key" },
    area2Key: { description: "Area2 Key" },
    xAxisDataKey: { description: "X Axis Data Key" },
    align: { description: "Align" },
    verticalAlign: { description: "Vertical Align" },
  },
};

const Template = (args) => (
  <Recharts.AreaChart {...args}>
    {args.ShowCartesianGrid && <Recharts.CartesianGrid strokeDasharray="3 3" />}

    <Recharts.XAxis dataKey={args.xAxisDataKey} />
    <Recharts.YAxis />
    {args.ShowTooltip && <Recharts.Tooltip />}
    <Recharts.Legend align={args.align} verticalAlign={args.verticalAlign} />
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

export const Simple = Template.bind({});
Simple.args = {
  width: 300,
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
  ShowTooltip: true,
};
