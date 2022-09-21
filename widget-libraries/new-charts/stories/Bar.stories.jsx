import React from "react";
import * as Recharts from "recharts";

export default {
  title: "New Charts/Bar",
  component: Recharts.Bar,
  parameters: {
    docs: {
      description: {
        component: "Bar",
      },
    },
    titleArg: "dataKey",
  },
  argTypes: {
    dataKey: { description: "Data Key" },
    dataColor: { description: "Data Color" },
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
    <Recharts.Bar dataKey={args.data1Key} fill={args.data1Color} />
    <Recharts.Bar dataKey={args.data2Key} fill={args.data2Color} />
  </Recharts.BarChart>
);

export const SimpleBar = Template.bind({});

SimpleBar.args = {
  width: 450,
  height: 170,
  margin: {
    top: 5,
    right: 30,
    left: 20,
    bottom: 5,
  },
  xAxisDataKey: "name",
  data1Color: "#3366FF",
  data2Color: "#009379",
  data1Key: "blue",
  data2Key: "green",
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
      blue: 459,
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
  ShowLegend: false,
  ShowTooltip: true,
};

SimpleBar.storyInfo = {
  name: "SimpleBar",
  kind: "New Charts/Bar",
};
