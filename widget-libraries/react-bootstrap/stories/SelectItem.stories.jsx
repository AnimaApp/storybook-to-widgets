import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "React Bootstrap/SelectItem",
  parameters: {
    docs: {
      description: {
        component: "Item",
      },
    },
    titleArg: "label"
  },
  argTypes: {
    label: {
      description: "Label",
      type: "string",
    },
  },
};

const Template = (args) => {
  return <option>{args.label}</option>;
};

export const SimpleSelectOption = Template.bind({});
SimpleSelectOption.args = {
  label: "Label",
};
SimpleSelectOption.storyInfo = {
  name: "SimpleSelectOption",
  kind: "React Bootstrap/SelectItem",
};
