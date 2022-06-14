import React from "react";
import * as Recharts from "recharts";

export default {
  title: "New Charts/CartesianGrid",
  component: Recharts.CartesianGrid,
  parameters: {
    docs: {
      description: {
        component: "Cartesian Grid",
      },
    },
  },
  argTypes: {
    strokeDasharray: { description: "stroke dash array" },
  },
};

const Template = (args) => {
  return <Recharts.CartesianGrid strokeDasharray={args.strokeDasharray} />;
};

export const SimpleCartesianGrid = Template.bind({});
SimpleCartesianGrid.args = {
  strokeDasharray: "3 3",
};
SimpleCartesianGrid.storyInfo = {
  name: "SimpleCartesianGrid",
  kind: "New Charts/CartesianGrid",
};
