import React from "react";
import * as MuiMaterial from "@mui/material";
import withIconMapped from "../decorators/withIconMapped";
import { iconOptions, iconTransform } from "../utils";

export default {
  title: "Material UI/Tooltip",
  component: MuiMaterial.Tooltip,
  argTypes: {
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
