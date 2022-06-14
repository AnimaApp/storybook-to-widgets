import React from "react";
import * as Recharts from "recharts";
import { SimpleCell } from "./Cell.stories";
import { SimpleTooltip } from "./Tooltip.stories";
import { SimpleLegend } from "./Legend.stories";

export default {
  title: "New Charts/PieChartInnerNumbers",
  component: Recharts.PieChart,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  argTypes: {
    dataFillColor: { description: "Fill Color" },
    dataKey: { description: "Data Key" },
    align: { description: "Align" },
    verticalAlign: { description: "Vertical Align" },
    cell1: {
      type: "story",
      storyInfo: SimpleCell.storyInfo,
    },
    cell2: {
      type: "story",
      storyInfo: SimpleCell.storyInfo,
    },
    cell3: {
      type: "story",
      storyInfo: SimpleCell.storyInfo,
    },
    cell4: {
      type: "story",
      storyInfo: SimpleCell.storyInfo,
    },
    tooltip: {
      type: "story",
      storyInfo: SimpleTooltip.storyInfo,
    },
    legend: {
      type: "story",
      storyInfo: SimpleLegend.storyInfo,
    },
  },
};

const Template = (args) => (
  <Recharts.PieChart
    width={args.width}
    height={args.height}
    margin={args.margin}
  >
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
        const RADIAN = Math.PI / 180;

        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

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
      fill={args.dataFillColor}
      dataKey={args.dataKey}
      outerRadius={args.dataOuterRadius}
    >
      <SimpleCell {...args.cell1} />
      <SimpleCell {...args.cell2} />
      <SimpleCell {...args.cell3} />
      <SimpleCell {...args.cell4} />
    </Recharts.Pie>
    <SimpleTooltip {...args.tooltip} />
    <SimpleLegend {...args.legend} />
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
    { name: "Group A", value: 400, color: "#3366FF" },
    { name: "Group B", value: 300, color: "#009379" },
    { name: "Group C", value: 300, color: "#FF6250" },
    { name: "Group D", value: 200, color: "#FFDF90" },
  ],
  align: "center",
  verticalAlign: "top",
  cell1: {
    color: "#3366FF",
    index: "1",
  },
  cell2: {
    color: "#009379",
    index: "2",
  },
  cell3: {
    color: "#FF6250",
    index: "3",
  },
  cell4: {
    color: "#FFDF90",
    index: "4",
  },
  legend: {
    align: "center",
    verticalAlign: "top",
  },
  tooltip: {
    offset: 10,
  },
};
