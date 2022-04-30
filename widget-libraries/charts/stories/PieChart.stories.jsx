import React from "react";
import * as Recharts from "recharts";
import data from "./data";

export default {
  title: "Charts/PieChart",
  component: Recharts.PieChart,
  parameters: {
    docs: {
      description: {
        component:
          "Badges are composed of text inside a bg color element and may include inline/inline-block elements and/or icons.",
      },
    },
  },
  argTypes: {
    data1FillColor: {
      description: "fill color",
    },
  },
};

const Template = (args) => (
  <Recharts.PieChart {...args}>
    <Recharts.Pie
      data={args.data}
      dataKey={args.data1Key}
      cx="50%"
      cy="50%"
      outerRadius={args.data1OuterRadius}
      fill={args.data1FillColor}
      label
    />
    {args.AnimaComponentShowTooltip && <Recharts.Tooltip />}
    {args.AnimaComponentShowLegend && (
      <Recharts.Legend align={args.align} verticalAlign={args.verticalAlign} />
    )}
  </Recharts.PieChart>
);

export const SinglePie = Template.bind({});
SinglePie.args = {
  width: 500,
  height: 300,
  margin: {
    top: 5,
    right: 30,
    left: 20,
    bottom: 5,
  },
  data1FillColor: "#8884d8",
  data1OuterRadius: 60,
  data1Key: "uv",
  data: data,
  align: "center",
  verticalAlign: "top",
  AnimaComponentShowTooltip: false,
  AnimaComponentShowLegend: false,
};
