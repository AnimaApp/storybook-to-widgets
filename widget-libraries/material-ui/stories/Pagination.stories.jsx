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
      description: "Total pages",
      type: "number",
    },
    boundaryCount: {
      description: "Visible pages beginning & end",
      type: "number",
    },
    siblingCount: {
      description: "Visible pages before & after current page",
      type: "number",
    },
    defaultPage: {
      description: "Selected page",
      type: "number",
    },
    hideNextButton: {
      description: "Hide next-page button",
      type: "boolean",
    },
    hidePrevButton: {
      description: "Hide previous-page button",
      type: "boolean",
    },
    showFirstButton: {
      description: "Show first-page button",
      type: "boolean",
    },
    showLastButton: {
      description: "Show last-page button",
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
