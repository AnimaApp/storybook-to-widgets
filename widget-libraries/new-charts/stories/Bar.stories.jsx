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

const Template = (args) => {
  return <Recharts.Bar dataKey={args.dataKey} fill={args.dataColor} />;
};

export const SimpleBar = Template.bind({});
SimpleBar.args = {
  dataColor: "#3366FF",
  dataKey: "blue",
};
SimpleBar.storyInfo = {
  name: "SimpleBar",
  kind: "New Charts/Bar",
};
