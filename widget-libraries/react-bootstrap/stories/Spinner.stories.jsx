import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "React Bootstrap/Spinner",
  component: ReactBootstrap.Spinner,
  argTypes: {
    animation: {
      description: "Animation",
      type: "options",
      options: ["border", "grow"],
    },
    size: {
      description: "Size",
      type: "options",
      options: ["Small", "Normal", "Large"],
      mapping: { Small: "sm", Normal: "", Large: "lg" },
    },
    variant: {
      description: "Variant",
      type: "options",
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ],
    },
  },
};

const Template = (args) => {
  return (
    <ReactBootstrap.Spinner
      animation={args.animation}
      size={args.size}
      variant={args.variant}
    />
  );
};

export const SimpleSpinner = Template.bind({});
SimpleSpinner.args = {
  animation: "border",
  size: "lg",
  variant: "primary",
};
