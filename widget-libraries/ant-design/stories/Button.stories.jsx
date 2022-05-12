import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Button",
  component: Antd.Button,
  argTypes: {
    type: {
      description: "Type",
      type: "options",
      options: [
        "primary",
        "default",
        "dashed",
        "text",
        "link",
        "ghost",
        "danger",
      ],
    },
    shape: {
      description: "Shape",
      type: "options",
      options: ["default", "circle", "round"],
    },
    size: {
      description: "Size",
      type: "options",
      options: ["small", "middle", "large"],
    },
    label: {
      description: "Label",
      type: "string",
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
  },
};

const Template = (args) => (
  <Antd.Button
    type={args.type}
    shape={args.shape}
    size={args.size}
    disabled={args.disabled}
  >
    {args.label}
  </Antd.Button>
);

export const Simple = Template.bind({});
Simple.args = {
  type: "primary",
  shape: "round",
  size: "large",
  label: "Submit",
};
