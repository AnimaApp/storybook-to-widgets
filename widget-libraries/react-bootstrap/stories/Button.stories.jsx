import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "React Bootstrap/Button",
  component: ReactBootstrap.Button,
  argTypes: {
    disabled: { description: "Disabled", type: "boolean" },
    size: {
      description: "Size",
      type: "options",
      options: ["sm", "lg"],
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
        "dark",
        "light",
        "link",
      ],
    },
    label: {
      description: "Label",
      type: "string",
    },
  },
};

const Template = (args) => {
  return (
    <ReactBootstrap.Button
      disabled={args.disabled}
      size={args.size}
      variant={args.variant}
    >
      {args.label}
    </ReactBootstrap.Button>
  );
};

export const SimpleButton = Template.bind({});
SimpleButton.args = {
  disabled: false,
  size: "lg",
  variant: "primary",
  label: "Click me",
};
