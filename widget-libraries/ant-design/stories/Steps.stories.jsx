import React from "react";
import * as Antd from "antd";
import { SimpleStep } from "./Step.stories";
import "antd/dist/antd.css";

export default {
  title: "Ant Design/Steps",
  component: Antd.Steps,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["small", "default"],
    },
    type: {
      description: "Type",
      control: { type: "select" },
      options: ["default", "navigation"],
    },
    direction: {
      description: "Direction",
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    labelPlacement: {
      description: "Label Placement",
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    current: { description: "Current", type: "number" },
    step: {
      type: "story",
      description: "step",
      storyInfo: SimpleStep.storyInfo,
    },
    step2: {
      type: "story",
      description: "step",
      storyInfo: SimpleStep.storyInfo,
    },
    step3: {
      type: "story",
      description: "step",
      storyInfo: SimpleStep.storyInfo,
    },
  },
};

const Template = (args) => {
  return (
    <Antd.Steps
      size={args.size}
      type={args.type}
      direction={args.direction}
      labelPlacement={args.labelPlacement}
      current={args.current}
    >
      <SimpleStep {...args.step} />
      <SimpleStep {...args.step2} />
      <SimpleStep {...args.step3} />
    </Antd.Steps>
  );
};
export const SimpleSteps = Template.bind({});
SimpleSteps.args = {
  size: "default",
  type: "default",
  direction: "horizontal",
  labelPlacement: "horizontal",
  current: 0,
  step: {
    title: "Finished",
    subTitle: "subtitle",
    description: "This is a description",
    disabled: false,
    status: "finish",
  },
  step2: {
    title: "In Progress",
    subTitle: "subtitle",
    description: "This is a description",
    disabled: false,
    status: "process",
  },
  step3: {
    title: "Waiting",
    subTitle: "subtitle",
    description: "descrThis is a descriptioniption",
    disabled: false,
    status: "wait",
  },
};
