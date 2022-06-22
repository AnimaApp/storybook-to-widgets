import React from "react";
import * as Recharts from "recharts";

export default {
  title: "New Charts/Line",
  component: Recharts.Line,
  parameters: {
    docs: {
      description: {
        component: "Line",
      },
    },
    titleArg: "lineKey",
  },
  argTypes: {
    lineColor: { description: "Line Color" },
    lineKey: { description: "Line Key" },
  },
};

const Template = (args) => {
  return (
    <Recharts.Line
      type="monotone"
      dataKey={args.lineKey}
      stroke={args.lineColor}
      dot={false}
    />
  );
};

export const SimpleLine = Template.bind({});
SimpleLine.args = {
  lineColor: "#3366FF",
  lineKey: "blue",
};
SimpleLine.storyInfo = {
  name: "SimpleLine",
  kind: "New Charts/Line",
};
