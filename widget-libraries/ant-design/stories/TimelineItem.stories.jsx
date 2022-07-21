import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Timeline Item",
  component: Antd.Timeline.Item,
  parameters: {
    docs: {
      description: {
        component: "Item",
      },
    },
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    color: {
      description: "Color",
      control: {
        type: "color",
      },
    },
    label: { description: "Label", type: "string" },
    position: {
      description: "Position",
      control: { type: "select" },
      options: ["right", "left"],
    },
  },
};

const Template = (args) => (
  <Antd.Timeline.Item position={args.position} color={args.color}>
    {args.label}
  </Antd.Timeline.Item>
);

export const SimpleTimelineItem = Template.bind({});
SimpleTimelineItem.args = {
  label: "Label",
  position: "right",
  color: "blue",
};

SimpleTimelineItem.storyInfo = {
  name: "SimpleTimelineItem",
  kind: "Ant Design/Timeline Item",
};
