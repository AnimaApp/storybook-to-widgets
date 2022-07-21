import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SimplePaginationItem } from "./PaginationItem.stories";

const sizesTransform =
  "<% if (param === 'Extra Small') { %>'xs'<% }else if (param==='Small') { %>'sm'<% }  else if (param==='Large') { %>'lg'<% } else { %> '' <% } %>";

export default {
  title: "React Bootstrap/Pagination",
  component: ReactBootstrap.Pagination,
  parameters: {
    custom_css: ".${nodeClass} a { display: inherit; }",
  },
  argTypes: {
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["Small", "Normal", "Large"],
      mapping: { Small: "sm", Normal: "", Large: "lg" },
      transform: sizesTransform,
    },
    disabled: { description: "Disabled", type: "boolean" },
    hideNextButton: {
      description: "Hide Next Button",
      type: "boolean",
    },
    hidePrevButton: {
      description: "Hide Prev Button",
      type: "boolean",
    },
    showFirstButton: {
      description: "Show First Button",
      type: "boolean",
    },
    showLastButton: {
      description: "Show Last Button",
      type: "boolean",
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
    <ReactBootstrap.Pagination disabled={args.disabled} size={args.size}>
      {args.showFirstButton && <ReactBootstrap.Pagination.First />}
      {!args.hidePrevButton && <ReactBootstrap.Pagination.Prev />}
      <SimplePaginationItem {...args.item1} />
      <SimplePaginationItem {...args.item2} />
      <SimplePaginationItem {...args.item3} />
      {!args.hideNextButton && <ReactBootstrap.Pagination.Next />}
      {args.showLastButton && <ReactBootstrap.Pagination.Last />}
    </ReactBootstrap.Pagination>
  );
};

export const SimplePagination = Template.bind({});
SimplePagination.args = {
  disabled: false,
  size: "Normal",
  hideNextButton: false,
  hidePrevButton: false,
  showFirstButton: false,
  showLastButton: false,
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
