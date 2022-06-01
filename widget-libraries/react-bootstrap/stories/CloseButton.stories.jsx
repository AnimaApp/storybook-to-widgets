import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "React Bootstrap/CloseButton",
  component: ReactBootstrap.CloseButton,
  argTypes: {
    disabled: { description: "Disabled", type: "boolean" },
    variant: {
      description: "Variant",
      type: "options",
      options: ["white", "dark"],
    },
  },
};

const Template = (args) => {
  return (
    <ReactBootstrap.CloseButton
      disabled={args.disabled}
      variant={args.variant}
    />
  );
};

export const SimpleCloseButton = Template.bind({});
SimpleCloseButton.args = {
  disabled: false,
  variant: "dark",
};
