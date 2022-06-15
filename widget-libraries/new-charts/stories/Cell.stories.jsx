import React from "react";
import * as Recharts from "recharts";

const keyTransform =
  '<%- `"${(Math.floor(Math.random() * 1000) + 1).toString()}"` %>';

export default {
  title: "New Charts/Cell",
  component: Recharts.Cell,
  parameters: {
    docs: {
      description: {
        component: "Cell",
      },
    },
  },
  argTypes: {
    color: { description: "color" },
    index: { description: "index", hidden: true, transform: keyTransform },
  },
};

const Template = (args) => {
  return <Recharts.Cell key={args.index} fill={args.color} />;
};

export const SimpleCell = Template.bind({});
SimpleCell.args = {
  color: "#3366FF",
  index: "1",
};
SimpleCell.storyInfo = {
  name: "SimpleCell",
  kind: "New Charts/Cell",
};
