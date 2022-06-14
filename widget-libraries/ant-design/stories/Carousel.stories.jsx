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
      type: "options",
      options: ["top", "bottom", "left", "right"],
    },
    dots: { description: "Show dots", type: "boolean" },
    effect: {
      description: "Effect",
      type: "options",
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

const Template = (args) => (
  <Antd.Carousel
    autoplay={args.autoplay}
    dotPosition={args.dotPosition}
    dots={args.dots}
    effect={args.effect}
    slidesToShow={1}
  >
    <SimpleImage {...args.item} />
    <SimpleImage {...args.item2} />
    <SimpleImage {...args.item3} />
  </Antd.Carousel>
);

export const SimpleCarousel = Template.bind({});
SimpleCarousel.args = {
  autoplay: false,
  dotPosition: "bottom",
  dots: true,
  effect: "scrollx",
  item: {
    width: "400px",
    height: "400px",
    src: "https://images.unsplash.com/photo-1655212681194-fd1932c9b542?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    preview: false,
  },
  item2: {
    width: "400px",
    height: "400px",
    src: "https://images.unsplash.com/photo-1655147260029-75bfe22efc90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    preview: false,
  },
  item3: {
    width: "400px",
    height: "400px",
    src: "https://images.unsplash.com/photo-1655139735973-d551b781e9ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    preview: false,
  },
};
