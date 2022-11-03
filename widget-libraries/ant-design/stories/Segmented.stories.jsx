import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Segmented",
  component: Antd.Segmented,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
    useFigmaLayers: true,
  },
  argTypes: {
    block: { description: "Block", type: "boolean" },
    disabled: { description: "Disabled", type: "boolean" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["large", "middle", "small"],
    },
  },
};

const Template = (args) => {
  const [value, setValue] = React.useState("Weekly");

  return (
    <Antd.Segmented
      block={args.block}
      disabled={args.disabled}
      size={args.size}
      value={value}
      options={args.options}
      onChange={setValue}
    />
  );
};

export const SimpleSegmented = Template.bind({});
SimpleSegmented.args = {
  block: false,
  disabled: false,
  size: "middle",
  options: ["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"],
};
