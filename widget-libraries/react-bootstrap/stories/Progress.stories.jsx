import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "React Bootstrap/Progress Bar",
  component: ReactBootstrap.ProgressBar,
  argTypes: {
    animated: { description: "Animated", type: "boolean" },
    max: { description: "Max", type: "number" },
    min: { description: "Min", type: "number" },
    now: { description: "Now", type: "number" },
    striped: { description: "Striped", type: "boolean" },
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "dark",
        "light",
        "link",
      ],
    },
    width: {
      description: "Width",
      type: "string",
    },
  },
};

const Template = (args) => {
  return (
    <ReactBootstrap.ProgressBar
      style={{ width: args.width }}
      animated={args.animated}
      now={args.now}
      max={args.max}
      min={args.min}
      striped={args.striped}
      variant={args.variant}
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
  width: "200px",
};
