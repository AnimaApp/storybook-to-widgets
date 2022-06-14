import React from "react";
import * as Recharts from "recharts";

export default {
  title: "New Charts/Legend",
  component: Recharts.Legend,
  parameters: {
    docs: {
      description: {
        component: "Legend",
      },
    },
  },
  argTypes: {
    align: { description: "Align" },
    verticalAlign: { description: "Vertical Align" },
  },
};

const Template = (args) => {
  return (
    <Recharts.Legend
      align={args.align}
      verticalAlign={args.verticalAlign}
    ></Recharts.Legend>
  );
};

export const SimpleLegend = Template.bind({});
SimpleLegend.args = {
  align: "center",
  verticalAlign: "top",
};
SimpleLegend.storyInfo = {
  name: "SimpleLegend",
  kind: "New Charts/Legend",
};
