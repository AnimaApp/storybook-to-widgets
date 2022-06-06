import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "React Bootstrap/Range",
  component: ReactBootstrap.Form.Range,
  argTypes: {
    disabled: { description: "Disabled", type: "boolean" },
    width: { description: "Width", type: "string" },
  },
};

const Template = (args) => {
  return (
    <ReactBootstrap.Form.Range
      disabled={args.disabled}
      style={{ width: args.width }}
    />
  );
};

export const SimpleRange = Template.bind({});
SimpleRange.args = {
  disabled: false,
  width: "300px",
};
