import React from "react";
import * as Recharts from "recharts";

export default {
  title: "Charts/PieChartInnerNumbers",
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
    dataKey: { description: "Data Key" },
    align: { description: "Align" },
    verticalAlign: { description: "Vertical Align" },
  },
};

const Template = (args) => (
  <Recharts.PieChart {...args}>
    <Recharts.Pie
      data={args.data}
      cx="50%"
      cy="50%"
      labelLine={false}
      label={({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index,
      }) => {
        let RADIAN = Math.PI / 180;

        let radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        let x = cx + radius * Math.cos(-midAngle * RADIAN);
        let y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
          <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
          >
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      }}
      dataKey={args.dataKey}
      outerRadius={args.dataOuterRadius}
    >
      {args.data.map((entry, index) => (
        <Recharts.Cell key={`cell-${index}`} fill={entry.color} />
      ))}
    </Recharts.Pie>
  </Recharts.PieChart>
);

export const SinglePie = Template.bind({});
SinglePie.args = {
  width: 280,
  height: 150,
  margin: {
    top: 5,
    right: 30,
    left: 20,
    bottom: 5,
  },
  dataOuterRadius: 75,
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
