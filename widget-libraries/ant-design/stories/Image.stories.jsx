import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Image",
  component: Antd.Image,
  parameters: {
    docs: {
      description: {
        component: "Item",
      },
    },
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    width: { description: "Width", type: "string" },
    height: { description: "Height", type: "string" },
    src: { description: "Src", type: "string" },
    preview: {
      description: "Preview",
      type: "boolean",
    },
  },
};

const Template = (args) => (
  <Antd.Image
    width={args.width}
    height={args.height}
    src={args.src}
    preview={args.preview}
  />
);

export const SimpleImage = Template.bind({});
SimpleImage.args = {
  width: "200px",
  height: "200px",
  src: "https://joeschmoe.io/api/v1/random",
  preview: true,
};

SimpleImage.storyInfo = {
  name: "SimpleImage",
  kind: "Ant Design/Image",
};
