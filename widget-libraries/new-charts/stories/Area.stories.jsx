import React from "react";
import * as Recharts from "recharts";

export default {
  title: "New Charts/Area",
  component: Recharts.Area,
  parameters: {
    docs: {
      description: {
        component: "Area",
      },
    },
    titleArg: "areaKey",
    
  },
  argTypes: {
    fillColor: { description: "Fill Color" },
    fillOpacity: { description: "Fill Opacity" },
    areaStrokeColor: { description: "Area Stroke" },
    areaKey: { description: "Area Key" },
  },
};

const Template = (args) => {
  return (
    <Recharts.Area
      type="monotone"
      dataKey={args.areaKey}
      stroke={args.areaStrokeColor}
      fill={args.fillColor}
      fillOpacity={args.fillOpacity}
    />
  );
};

export const SimpleArea = Template.bind({});
SimpleArea.args = {
  fillColor: "#3366FF",
  fillOpacity: 0.5,
  areaStrokeColor: "#3366FF",
  areaKey: "blue",
};
SimpleArea.storyInfo = {
  name: "SimpleArea",
  kind: "New Charts/Area",
};
