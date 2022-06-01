import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "React Bootstrap/Checkbox",
  component: ReactBootstrap.Form.Check,
  argTypes: {
    disabled: { description: "Disabled", type: "boolean" },
    label: { description: "Label", type: "string" },
    type: {
      description: "Type",
      type: "options",
      options: ["radio", "checkbox", "switch"],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => {
  return (
    <ReactBootstrap.Form.Check
      disabled={args.disabled}
      label={args.label}
      type={args.type}
    />
  );
};

export const SimpleCheckbox = Template.bind({});
SimpleCheckbox.args = {
  disabled: false,
  label: "Label",
  type: "checkbox",
};
