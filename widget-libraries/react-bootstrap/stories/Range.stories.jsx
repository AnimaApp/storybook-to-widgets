import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "React Bootstrap/Range",
  component: ReactBootstrap.Form.Range,
  argTypes: {
    disabled: { description: "Disabled", type: "boolean" },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 600 }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => {
  return <ReactBootstrap.Form.Range disabled={args.disabled} />;
};

export const SimpleRange = Template.bind({});
SimpleRange.args = {
  disabled: false,
};
