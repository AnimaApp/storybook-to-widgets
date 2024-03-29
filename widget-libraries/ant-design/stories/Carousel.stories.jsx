import React from "react";
import "antd/dist/antd.css";
import * as Antd from "antd";
import { SimpleImage } from "./Image.stories";

export default {
  title: "Ant Design/Carousel",
  component: Antd.Carousel,
  parameters: {
    custom_css:
      '.${nodeClass} { font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";}',
  },
  argTypes: {
    autoplay: { description: "Autoplay", type: "boolean" },
    dotPosition: {
      description: "Dot position",
      control: { type: "select" },
      options: ["top", "bottom", "left", "right"],
    },
    dots: { description: "Show dots", type: "boolean" },
    effect: {
      description: "Effect",
      control: { type: "select" },
      options: ["scrollx", "fade"],
    },
    item: {
      type: "story",
      description: "item",
      storyInfo: SimpleImage.storyInfo,
    },
    item2: {
      type: "story",
      description: "item",
      storyInfo: SimpleImage.storyInfo,
    },
    item3: {
      type: "story",
      description: "item",
      storyInfo: SimpleImage.storyInfo,
    },
  },
};

const Template = (args) => {
  return (
    <Antd.Carousel
      autoplay={args.autoplay}
      dotPosition={args.dotPosition}
      dots={args.dots}
      effect={args.effect}
      slidesToShow={1}
      style={{ width: args.width }}
    >
      <SimpleImage {...args.item} width={args.width} height={args.height} />
      <SimpleImage {...args.item2} width={args.width} height={args.height} />
      <SimpleImage {...args.item3} width={args.width} height={args.height} />
    </Antd.Carousel>
  );
};

export const SimpleCarousel = Template.bind({});
SimpleCarousel.args = {
  autoplay: false,
  dotPosition: "bottom",
  dots: true,
  effect: "scrollx",
  width: 300,
  height: 200,
  item: {
    ...SimpleImage.args,
    src: "https://images.unsplash.com/photo-1655212681194-fd1932c9b542?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    preview: false,
  },
  item2: {
    ...SimpleImage.args,
    src: "https://images.unsplash.com/photo-1655147260029-75bfe22efc90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    preview: false,
  },
  item3: {
    ...SimpleImage.args,
    src: "https://images.unsplash.com/photo-1655139735973-d551b781e9ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    preview: false,
  },
};
