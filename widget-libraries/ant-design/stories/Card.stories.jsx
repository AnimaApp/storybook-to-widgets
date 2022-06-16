import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Card",
  component: Antd.Card,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    bordered: { description: "Bordered", type: "boolean" },
    hoverable: { description: "Hoverable", type: "boolean" },
    loading: { description: "Loading", type: "boolean" },
    size: {
      description: "Size",
      type: "options",
      options: ["default", "small"],
    },
    title: { description: "Title", type: "string" },
    body: { description: "Body", type: "string" },
  },
};

const Template = (args) => (
  <Antd.Card
    bordered={args.bordered}
    hoverable={args.hoverable}
    loading={args.loading}
    size={args.size}
    title={args.title}
  >
    {args.body}
  </Antd.Card>
);

export const SimpleCard = Template.bind({});
SimpleCard.args = {
  bordered: true,
  hoverable: false,
  loading: false,
  size: "default",
  title: "Card title",
  body: "Body content",
};
