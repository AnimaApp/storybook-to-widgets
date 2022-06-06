import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SimplePaginationItem } from "./PaginationItem.stories";

export default {
  title: "React Bootstrap/Pagination",
  component: ReactBootstrap.Pagination,
  argTypes: {
    size: {
      description: "Size",
      type: "options",
      options: ["sm", "lg"],
    },
    disabled: { description: "Disabled", type: "boolean" },
    size: {
      description: "Size",
      type: "options",
      options: ["sm", "lg"],
    },
    variant: {
      description: "Variant",
      type: "options",
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "dark",
        "light",
        "link",
      ],
    },
    label: {
      description: "Label",
      type: "string",
    },
    item1: {
      type: "story",
      storyInfo: SimplePaginationItem.storyInfo,
    },
    item2: {
      type: "story",
      storyInfo: SimplePaginationItem.storyInfo,
    },
    item3: {
      type: "story",
      storyInfo: SimplePaginationItem.storyInfo,
    },
  },
};

const Template = (args) => {
  return (
    <ReactBootstrap.Pagination
      disabled={args.disabled}
      size={args.size}
      variant={args.variant}
    >
      <SimplePaginationItem {...args.item1} />
      <SimplePaginationItem {...args.item2} />
      <SimplePaginationItem {...args.item3} />
    </ReactBootstrap.Pagination>
  );
};

export const SimplePagination = Template.bind({});
SimplePagination.args = {
  disabled: false,
  size: "lg",
  variant: "primary",
  label: "Click me",
  item1: {
    pageNumber: 1,
  },
  item2: {
    pageNumber: 2,
  },
  item3: {
    pageNumber: 3,
  },
};
