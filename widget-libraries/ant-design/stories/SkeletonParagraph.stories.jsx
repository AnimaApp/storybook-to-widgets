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
  },
};

const Template = (args) => (
  <Antd.Skeleton
    active={args.active}
    title={false}
    paragraph={args.paragraph}
  />
);

export const SimpleSkeletonTitle = Template.bind({});
SimpleSkeletonTitle.args = {
  active: true,
  paragraph: { width: 500, rows: 4 },
};
