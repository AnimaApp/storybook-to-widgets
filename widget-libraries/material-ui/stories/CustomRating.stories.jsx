import React from "react";
import * as MuiMaterial from "@mui/material";
import withIconMapped from "../decorators/withIconMapped";
import { iconOptions, iconTransform } from "../utils";

export default {
  title: "Material UI/Custom Rating",
  component: MuiMaterial.Rating,
  argTypes: {
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
    max: {
      description: "Max Number",
      type: "number",
      defaultValue: 5,
    },
    precision: {
      description: "Precision",
      type: "number",
    },
    iconName: {
      control: { type: "select" },
      options: iconOptions,
      description: "Icon",
      transform: iconTransform,
    },
    emptyIcon: {
      control: { type: "select" },
      options: iconOptions,
      description: "Icon",
      transform: iconTransform,
    },
    defaultValue: {
      description: "Default Value",
      type: "number",
    },
    iconFilledColor: { control: "color" },
    iconHoverColor: { control: "color" },
  },
  decorators: [withIconMapped],
};

const CustomTemplate = (args) => {
  return (
    <MuiMaterial.Rating
      sx={{
        "& .MuiRating-iconFilled": {
          color: args.iconFilledColor,
        },
        "& .MuiRating-iconHover": {
          color: args.iconHoverColor,
        },
      }}
      defaultValue={args.defaultValue}
      size={args.size}
      precision={args.precision}
      emptyIcon={args.emptyIcon}
      icon={args.iconName}
      max={args.max}
      disabled={args.disabled}
    />
  );
};

export const RatingWithCustomIcons = CustomTemplate.bind({});

RatingWithCustomIcons.args = {
  size: "medium",
  disabled: false,
  emptyIcon: "Alarm",
  iconName: "AlarmAdd",
  defaultValue: 2,
  precision: 0.5,
  max: 5,
  iconHoverColor: "#0ecfcf",
  iconFilledColor: "#21c51e",
};
