import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
  },
};

const Template = (args) => {
  return (
    <ReactBootstrap.Pagination
      disabled={args.disabled}
      size={args.size}
      variant={args.variant}
    >
      <ReactBootstrap.Pagination.Item>1</ReactBootstrap.Pagination.Item>,
    </ReactBootstrap.Pagination>
  );
};

export const SimplePagination = Template.bind({});
SimplePagination.args = {
  disabled: false,
  size: "lg",
  variant: "primary",
  label: "Click me",
};
