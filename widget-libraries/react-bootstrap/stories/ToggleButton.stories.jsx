import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "React Bootstrap/ToggleButton",
  component: ReactBootstrap.ToggleButton,
  parameters: {
    docs: {
      description: {
        component: "ToggleButton",
      },
    },
  },
  argTypes: {
    checked: {
      description: "Checked",
      type: "boolean",
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
    type: {
      description: "Type",
      type: "options",
      options: ["checkbox", "radio"],
    },
    label: {
      description: "Label",
      type: "string",
    },
  },
};

const Template = (args) => {
  return (
    <ReactBootstrap.ToggleButton
      checked={args.checked}
      disabled={args.disabled}
      type={args.type}
    >
      {args.label}
    </ReactBootstrap.ToggleButton>
  );
};

export const SimpleToggleButton = Template.bind({});
SimpleToggleButton.args = {
  label: "Label",
  checked: false,
  disabled: false,
};
SimpleToggleButton.storyInfo = {
  name: "SimpleToggleButton",
  kind: "React Bootstrap/ToggleButton",
};
