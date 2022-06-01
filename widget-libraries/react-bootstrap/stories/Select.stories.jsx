import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "React Bootstrap/Select",
  component: ReactBootstrap.Form.Select,
  argTypes: {
    disabled: { description: "Disabled", type: "boolean" },
    size: {
      description: "Size",
      type: "options",
      options: ["sm", "lg"],
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
    <ReactBootstrap.Form.Select disabled={args.disabled} size={args.size}>
      <option>User 1</option>
      <option>User 2</option>
      <option>User 3</option>
    </ReactBootstrap.Form.Select>
  );
};

export const SimpleSelect = Template.bind({});
SimpleSelect.args = {
  disabled: false,
  size: "lg",
};
