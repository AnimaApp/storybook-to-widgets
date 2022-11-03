import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Radio",
  component: Antd.Radio,
  parameters: {
    docs: {
      description: {
        component: "Item",
      },
      useFigmaLayers: true,
    },
    titleArg: "label",
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    label: {
      description: "Label",
    },
    checked: {
      description: "Checked",
      type: "boolean",
    },
    label: {
      description: "Label",
      type: "string",
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
    value: {
      description: "Value",
    },
  },
};

const Template = (args) => (
  <Antd.Radio
    value={args.value}
    defaultChecked={args.checked}
    disabled={args.disabled}
  >
    {args.label}
  </Antd.Radio>
);

export const SimpleRadio = Template.bind({});
SimpleRadio.args = {
  checked: false,
  disabled: false,
  value: 1,
  label: "Label",
};

SimpleRadio.storyInfo = {
  name: "SimpleRadio",
  kind: "Ant Design/Radio",
};
