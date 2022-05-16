import React from "react";
import * as MuiMaterial from "@mui/material";
import withIconMapped from "../decorators/withIconMapped";
import { options, iconTransform } from "../utils";

export default {
  title: "Material UI/Rating",
  component: MuiMaterial.Rating,
  argTypes: {
    size: {
      description: "Size",
      type: "options",
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
      type: "options",
      options: options,
      description: "Icon",
      transform: iconTransform,
    },
    emptyIcon: {
      type: "options",
      options: options,
      description: "Icon",
      transform: iconTransform,
    },
    iconColor: { control: "color" },
    rateColor: { control: "color" },
  },
  decorators: [withIconMapped],
};

const Template = (args) => {
  return (
    <MuiMaterial.Rating
      name="size-small"
      defaultValue={2}
      size={args.size}
      precision={args.precision}
      icon={args.iconName}
      max={args.max}
    />
  );
};

const CustomTemplate = (args) => {
  return (
    <MuiMaterial.Rating
      sx={{
        "& .MuiRating-iconFilled": {
          color: args.iconColor,
        },
        "& .MuiRating-iconHover": {
          color: args.rateColor,
        },
      }}
      name="size-small"
      defaultValue={2}
      size={args.size}
      precision={args.precision}
      emptyIcon={args.emptyIcon}
      icon={args.iconName}
      max={args.max}
      disabled={args.disabled}
    />
  );
};

export const SimpleRating = Template.bind({});
export const RatingWithCustomIcons = CustomTemplate.bind({});

SimpleRating.args = {
  size: "medium",
  disabled: false,
  label: "Username",
  precision: 0.5,
  max: 5,
};

RatingWithCustomIcons.args = {
  size: "medium",
  disabled: false,
  label: "Username",
  emptyIcon: "Alarm",
  iconName: "AlarmAdd",
  precision: 0.5,
  max: 5,
  rateColor: "#0ecfcf",
  iconColor: "#21c51e",
};
