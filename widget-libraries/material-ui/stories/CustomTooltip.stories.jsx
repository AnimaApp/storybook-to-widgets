import React from "react";
import * as MuiMaterial from "@mui/material";
import withIconMapped from "../decorators/withIconMapped";
import { iconOptions, iconTransform } from "../utils";

export default {
  title: "Material UI/Custom Tooltip",
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
      control: { type: "select" },
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
      control: { type: "select" },
      options: iconOptions,
      description: "Icon",
      transform: iconTransform,
    },
    arrow: {
      description: "Show Arrow",
      type: "boolean",
    },
  },
  decorators: [
    withIconMapped,
    (Story) => (
      <div style={{ marginLeft: "15em", marginTop: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => {
  return (
    <MuiMaterial.Tooltip
      title={args.title}
      arrow={args.arrow}
      placement={args.placement}
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

export const CustomColorTooltip = Template.bind({});
CustomColorTooltip.args = {
  title: "This is the tooltip title",
  placement: "bottom",
  arrow: false,
  iconName: "AddOutlined",
  bgColor: "#167f9b",
  color: "white",
};
