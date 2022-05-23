import React from "react";
import * as MuiMaterial from "@mui/material";

export default {
  title: "Material UI/Pagination",
  component: MuiMaterial.Pagination,
  argTypes: {
    color: {
      description: "Color",
      type: "options",
      options: ["primary", "secondary", "standard"],
    },
    variant: {
      description: "Variant",
      type: "options",
      options: ["outlined", "text"],
    },
    shape: {
      description: "Shape",
      type: "options",
      options: ["circular", "rounded"],
    },
    size: {
      description: "Size",
      type: "options",
      options: ["small", "medium", "large"],
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
    count: {
      description: "The total number of pages",
      type: "number",
    },
    boundaryCount: {
      description: "Number of always visible pages at the beginning and end",
      type: "number",
    },
    siblingCount: {
      description:
        "Number of always visible pages before and after the current page",
      type: "number",
    },
    defaultPage: {
      description:
        "The page selected by default when the component is uncontrolled",
      type: "number",
    },
    hideNextButton: {
      description: "If true, hide the next-page button",
      type: "boolean",
    },
    hidePrevButton: {
      description: "If true, hide the previous-page button",
      type: "boolean",
    },
    showFirstButton: {
      description: "If true, show the first-page button",
      type: "boolean",
    },
    showLastButton: {
      description: "If true, show the last-page button",
      type: "boolean",
    },
  },
};

const Template = (args) => {
  return (
    <MuiMaterial.Pagination
      variant={args.variant}
      color={args.color}
      disabled={args.disabled}
      size={args.size}
      shape={args.shape}
      count={args.count}
      boundaryCount={args.boundaryCount}
      siblingCount={args.siblingCount}
      defaultPage={args.defaultPage}
      hideNextButton={args.hideNextButton}
      hidePrevButton={args.hidePrevButton}
      showFirstButton={args.showFirstButton}
      showLastButton={args.showLastButton}
    />
  );
};

export const SimplePagination = Template.bind({});
SimplePagination.args = {
  variant: "outlined",
  color: "primary",
  size: "medium",
  shape: "circular",
  disabled: false,
  count: 5,
  boundaryCount: 1,
  siblingCount: 1,
  defaultPage: 1,
  hideNextButton: false,
  hidePrevButton: false,
  showFirstButton: false,
  showLastButton: false,
};
