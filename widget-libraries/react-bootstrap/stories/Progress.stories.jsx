import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "React Bootstrap/ProgressBar",
  component: ReactBootstrap.ProgressBar,
  argTypes: {
    animated: { description: "Animated", type: "boolean" },
    isChild: { description: "Is child", type: "boolean" },
    max: { description: "Max", type: "number" },
    min: { description: "Min", type: "number" },
    now: { description: "Now", type: "number" },
    striped: { description: "Striped", type: "boolean" },
    variant: {
      description: "Variant",
      type: "options",
      options: ["success", "danger", "warning", "info"],
    },
    visuallyHidden: { description: "Visually Hidden", type: "boolean" },
  },
};

const Template = (args) => {
  return (
    <ReactBootstrap.ProgressBar
      animated={args.animated}
      now={args.now}
      max={args.max}
      min={args.min}
      striped={args.striped}
      variant={args.variant}
      visuallyHidden={args.visuallyHidden}
    />
  );
};

export const SimpleProgressBar = Template.bind({});
SimpleProgressBar.args = {
  animated: false,
  max: 100,
  min: 0,
  now: 40,
  striped: false,
  variant: "success",
  visuallyHidden: false,
};
