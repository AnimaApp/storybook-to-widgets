import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Skeleton Paragraph",
  component: Antd.Skeleton,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    active: { description: "Active", type: "boolean" },
    width: { description: "Width", type: "number" },
    rows: { description: "Nr of Rows", type: "number" },
  },
};

const Template = (args) => (
  <Antd.Skeleton
    style={{ width: args.width }}
    active={args.active}
    title={false}
    paragraph={{ rows: args.rows }}
  />
);

export const SimpleSkeletonParagraph = Template.bind({});
SimpleSkeletonParagraph.args = {
  active: true,
  rows: 4,
  width: 300,
};
