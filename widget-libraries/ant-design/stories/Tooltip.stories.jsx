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
    arrowPointAtCenter: {
      description: "Arrow point at center",
      type: "boolean",
    },
    placement: {
      description: "Placement",
      type: "options",
      options: [
        "top",
        "left",
        "right",
        "bottom",
        "topLeft",
        "topRight",
        "bottomLeft",
        "bottomRight",
        "leftTop",
        "leftBottom",
        "rightTop",
        "rightBottom",
      ],
    },
    color: {
      description: "Color",
      control: {
        type: "color",
      },
    },
  },
};

const Template = (args) => (
  <Antd.Tooltip
    title={args.title}
    arrowPointAtCenter={args.arrowPointAtCenter}
    placement={args.placement}
    color={args.color}
  >
    {args.content}
  </Antd.Tooltip>
);

export const Simple = Template.bind({});
Simple.args = {
  title: "Prompt text",
  arrowPointAtCenter: true,
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};
