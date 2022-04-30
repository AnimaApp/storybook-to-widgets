import React from 'react';
import * as Recharts from 'recharts';

export default {
  title: 'Charts/TinyLineChart',
  component: Recharts.LineChart,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  argTypes: {
    ShowXAxis: { description: 'Show X axis' },
    ShowYAxis: { description: 'Show Y axis' },
    ShowCartesianGrid: { description: 'Show CartesianGrid' },
    ShowLegend: { description: 'Show Legend' },
    ShowTooltip: { description: 'Show Tooltip' },
    lineColor: { description: 'Line Color' },
    lineKey: { description: 'Line Key' },
    align: { description: 'Align' },
    verticalAlign: { description: 'Vertical Align' },
  }
};

const Template = args => (
  <Recharts.LineChart {...args}>
    {args.ShowCartesianGrid && (
      <Recharts.CartesianGrid strokeDasharray="0 1" />
    )}
    <Recharts.XAxis dataKey={args.lineKey} hide={!args.ShowXAxis} />
    <Recharts.YAxis hide={!args.ShowYAxis} />
    {
      args.ShowTooltip && <Recharts.Tooltip />
    }
    {args.ShowLegend &&
      <Recharts.Legend align={args.align} verticalAlign={args.verticalAlign} />}
    <Recharts.Line
      type="monotone"
      dataKey={args.lineKey}
      stroke={args.lineColor}
      dot={false}
      strokeWidth={2}
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
    bottom: 5
  },
  lineColor: '#3366FF',
  lineKey: 'blue',
  data: [
    {
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
    }
  ],
  align: 'center',
  verticalAlign: 'bottom',
  ShowCartesianGrid: false,
  ShowXAxis: false,
  ShowYAxis: false,
  ShowTooltip: false,
  ShowLegend: false
};
