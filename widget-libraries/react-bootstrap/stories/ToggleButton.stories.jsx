import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "React Bootstrap/Toggle button",
  component: ReactBootstrap.ToggleButton,
  parameters: {
    docs: {
      description: {
        component: "ToggleButton",
      },
    },
    titleArg: "label",
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
  kind: "React Bootstrap/Toggle button",
};
