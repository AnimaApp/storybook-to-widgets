import React from "react";
import withIconMapped from "../decorators/withIconMapped";
import * as AntDesignIcons from "@ant-design/icons/lib/icons";
import "antd/dist/antd.css";
import * as Antd from "antd";

const options = ["None", ...Object.keys(AntDesignIcons)];
const iconTransform =
  "<% if (param !== 'None') { %><AntDesignIcons.<%= param %> /><% } else { %> '' <% } %>";

export default {
  title: "Ant Design/Step",
  component: Antd.Steps.Step,
  parameters: {
    docs: {
      description: {
        component: "Step",
      },
    },
  },
  argTypes: {
    title: { description: "Title", type: "string" },
    subTitle: { description: "Sub Title", type: "string" },
    description: { description: "Description", type: "string" },
    disabled: {
      description: "Disabled",
      type: "options",
      options: ["true", "false"],
    },
    status: {
      description: "Status",
      type: "options",
      options: ["default", "wait", "process", "finish", "error"],
    },
    icon: {
      type: "options",
      options: options,
      description: "Icon",
      transform: iconTransform,
    },
  },
  decorators: [withIconMapped()],
};

const Template = (args) => {
  return (
    <Antd.Steps.Step
      title={args.title}
      subTitle={args.subTitle}
      description={args.description}
      disabled={args.disabled}
      status={args.status}
      icon={args.icon}
    />
  );
};

export const SimpleStep = Template.bind({});

SimpleStep.args = {
  title: "title",
  subTitle: "subtitle",
  description: "description",
  disabled: false,
  status: "wait",
};

SimpleStep.storyInfo = {
  name: "SimpleStep",
  kind: "Ant Design/Step",
};
