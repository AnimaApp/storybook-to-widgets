import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Skeleton Title",
  component: Antd.Skeleton,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
    useFigmaLayers: true,
  },
  argTypes: {
    active: { description: "Active", type: "boolean" },
    width: { description: "Width", type: "number" },
  },
};

const Template = (args) => (
  <Antd.Skeleton
    active={args.active}
    title={{ width: args.width }}
    paragraph={false}
  />
);

export const SimpleSkeletonTitle = Template.bind({});
SimpleSkeletonTitle.args = {
  active: true,
  width: 280,
};
