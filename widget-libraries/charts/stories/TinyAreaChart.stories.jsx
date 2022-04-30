import React from "react";
import * as Recharts from "recharts";

export default {
  title: "Charts/TinyAreaChart",
  component: Recharts.AreaChart,
  parameters: {
    docs: {
      description: {
        component:"",
      },
    },
  },
  argTypes: {
    ShowXAxis: { description: 'Show X axis' },
    ShowYAxis: { description: 'Show Y axis' },
    ShowCartesianGrid: { description: 'Show CartesianGrid' },
    ShowLegend: { description: 'Show Legend' },
    ShowTooltip: { description: 'Show Tooltip' },
    fillColor: { description: 'Fill Color' },
    strokeColor: { description: 'Stroke Color' },
    dataKey: { description: 'Data Key' },
    xAxisDataKey: { description: 'X Axis Data Key' },
    align: { description: 'Align' },
    verticalAlign: { description: 'Vertical Align' },
    
  },
};

const Template = (args) => (
  <Recharts.AreaChart {...args}>
    {args.ShowCartesianGrid && (
      <Recharts.CartesianGrid strokeDasharray="3 3" />
    )}
      <Recharts.XAxis dataKey={args.xAxisDataKey} hide={!args.ShowXAxis} />
     <Recharts.YAxis hide={!args.ShowYAxis}/>
     {
         args.ShowTooltip && <Recharts.Tooltip />
     }
    {args.ShowLegend && (
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
  align: "center",
  verticalAlign: "bottom",
  data: [{
    blue: 60
  },
  {
    blue: 200
  },
  {
    blue: 400
  },
  {
    blue: 208
  },
  {
    blue: 450
  },
  {
    blue: 0
  }],
  ShowCartesianGrid: false,
  ShowXAxis: false,
  ShowYAxis: false,
  ShowTooltip: false,
  ShowLegend: false,
  
};
