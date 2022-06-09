import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "React Bootstrap/PaginationItem",
  component: ReactBootstrap.Pagination.Item,
  parameters: {
    docs: {
      description: {
        component: "Item",
      },
    },
    titleArg: "pageNumber",
  },
  argTypes: {
    pageNumber: { description: "Page Number", type: "number" },
  },
};

const Template = (args) => {
  return (
    <ReactBootstrap.Pagination.Item>
      {args.pageNumber}
    </ReactBootstrap.Pagination.Item>
  );
};

export const SimplePaginationItem = Template.bind({});
SimplePaginationItem.args = {
  pageNumber: 1,
};
SimplePaginationItem.storyInfo = {
  name: "SimplePaginationItem",
  kind: "React Bootstrap/PaginationItem",
};
