import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "React Bootstrap/Placeholder Button ",
  component: ReactBootstrap.Placeholder.Button,
  argTypes: {
    animation: {
      description: "Animation",
      type: "options",
      options: ["glow", "wave"],
    },
    variant: {
      description: "Bg",
      type: "options",
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "dark",
        "light",
      ],
    },
    size: {
      description: "Size",
      type: "options",
      options: ["Extra Small", "Small", "Normal", "Large"],
      mapping: { "Extra Small": "xs", Small: "sm", Normal: "", Large: "lg" },
    },
    xs: { description: "Columns number", type: "number" },
  },
};

const Template = (args) => {
  return (
    <ReactBootstrap.Placeholder.Button
      animation={args.animation}
      variant={args.variant}
      size={args.size}
      xs={args.xs}
    />
  );
};

export const SimplePlaceholderButton = Template.bind({});
SimplePlaceholderButton.args = {
  animation: "wave",
  variant: "primary",
  size: "lg",
  xs: 2,
};
