import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";

export default {
  title: "Ant Design/Avatar",
  component: Antd.Avatar,
  argTypes: {
    shape: {
      description: "Shape",
      type: "options",
      options: ["circle", "square"],
    },
    size: {
      description: "Size",
    },
    image: {
      description: "Image",
      infotip: "Remove the URL to use Letter avatar",
    },
    letterColor: {
      description: "Letter color",
      infotip: "Remove image URL to use Letter avatar and adjust color",
    },
    backgroundColor: {
      description: "Background",
    },
    letter: {
      description: "Letter",
      infotip: "Remove image URL to switch to Letter avatar",
    },
  },
};

const Template = (args) => (
  <Antd.Avatar
    size={args.size}
    src={args.image}
    style={{ color: args.letterColor, backgroundColor: args.backgroundColor }}
    shape={args.shape}
  >
    {args.letter}
  </Antd.Avatar>
);

export const Simple = Template.bind({});
Simple.args = {
  size: 40,
  shape: "circle",
  image: "https://joeschmoe.io/api/v1/random",
  backgroundColor: "#fde3cf",
  letterColor: "#f56a00",
  letter: "USER",
};
