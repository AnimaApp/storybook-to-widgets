import React from "react";
import * as MuiMaterial from "@mui/material";
import withIconMapped from "../decorators/withIconMapped";
import { options, iconTransform } from "../utils";

export default {
  title: "Material UI/Tooltip",
  component: MuiMaterial.Tooltip,
  argTypes: {
    bgColor: { control: "color" },
    color: { control: "color" },
    title: {
      description: "Title",
      type: "string",
    },
    placement: {
      description: "Placement",
      type: "options",
      options: [
        "bottom-end",
        "bottom-start",
        "bottom",
        "left-end",
        "left-start",
        "left",
        "right-end",
        "right-start",
        "right",
        "top-end",
        "top-start",
        "top",
      ],
    },
    iconName: {
      type: "options",
      options: options,
      description: "Icon",
      transform: iconTransform,
    },
    arrow: {
      description: "Show Arrow",
      type: "boolean",
    },
  },
  decorators: [withIconMapped],
};

const Template = (args) => {
  return (
    <MuiMaterial.Tooltip title={args.title} arrow={args.arrow}>
      <MuiMaterial.IconButton>{args.iconName}</MuiMaterial.IconButton>
    </MuiMaterial.Tooltip>
  );
};

const CustomTemplate = (args) => {
  return (
    <MuiMaterial.Tooltip
      title={args.title}
      arrow={args.arrow}
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: args.bgColor,
            "& .MuiTooltip-arrow": {
              color: args.bgColor,
            },
            color: args.color,
          },
        },
      }}
    >
      <MuiMaterial.IconButton>{args.iconName}</MuiMaterial.IconButton>
    </MuiMaterial.Tooltip>
  );
};

export const SimpleTooltip = Template.bind({});
SimpleTooltip.args = {
  title: "This is the tooltip title",
  placement: "bottom",
  arrow: true,
  iconName: "AddOutlined",
};

export const CustomColorTooltip = CustomTemplate.bind({});
CustomColorTooltip.args = {
  title: "This is the tooltip title",
  placement: "bottom",
  arrow: false,
  iconName: "AddOutlined",
  bgColor: "#167f9b",
  color: "white",
};
