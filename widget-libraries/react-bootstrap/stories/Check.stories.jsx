import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "React Bootstrap/Check",
  component: ReactBootstrap.Form.Check,
  argTypes: {
    disabled: { description: "Disabled", type: "boolean" },
    label: { description: "Label", type: "string" },
    type: {
      description: "Type",
      type: "options",
      options: ["radio", "checkbox", "switch"],
    },
    defaultChecked: { description: "Default checked", type: "boolean" },
  }
};

const Template = (args) => {
  return (
    <ReactBootstrap.Form.Check
      disabled={args.disabled}
      label={args.label}
      type={args.type}
      defaultChecked={args.defaultChecked}
    />
  );
};

export const SimpleCheck = Template.bind({});
SimpleCheck.args = {
  disabled: false,
  label: "Label",
  type: "checkbox",
  defaultChecked: false
};
