import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Tooltip",
  component: Antd.Tooltip,
  argTypes: {
    title: {
      description: "Title",
      type: "string",
    },
    content: {
      description: "Content",
      type: "string",
    },
    showArrow: {
      description: "Show arrow",
      type: "boolean",
    },
    placement: {
      description: "Placement",
      type: "options",
      options: [
        "auto",
        "bottom-end",
        "bottom-start",
        "bottom",
        "left-end",
        "left-start",
        "left",
        "right-end",
        "right-start",
        "right",
        "top-end",
        "top-start",
        "top",
      ],
    },
    color: {
      description: "Color",
      type: "string",
    },
  },
};

const Template = (args) => (
  <Antd.Tooltip
    title={args.title}
    showArrow={args.showArrow}
    placement={args.placement}
    color={args.color}
  >
    {args.content}
  </Antd.Tooltip>
);

export const Simple = Template.bind({});
Simple.args = {
  title: 'Prompt text',
  showArrow: true,
  placement: "bottom",
  content: "Text content",
};
