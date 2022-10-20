import React from "react";
import * as MuiMaterial from "@mui/material";
import { SimpleToggleButton } from "./ToggleButton.stories";
import withIconMapped from "../decorators/withIconMapped";

export default {
  title: "Material UI/ToggleButtonGroup",
  component: MuiMaterial.ToggleButtonGroup,
  parameters: {
    useFigmaLayers: true,
  },
  argTypes: {
    color: {
      description: "Color",
      control: { type: "select" },
      options: ["primary", "secondary", "error", "info", "success", "warning"],
    },
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["filled", "outlined", "standard"],
    },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },
    orientation: {
      description: "Orientation",
      control: { type: "select" },
      options: ["vertical", "horizontal"],
      defaultValue: "horizontal",
    },
    menuitem: {
      type: "story",
      description: "menuitem",
      storyInfo: SimpleToggleButton.storyInfo,
    },
    menuitem2: {
      type: "story",
      description: "menuitem",
      storyInfo: SimpleToggleButton.storyInfo,
    },
    menuitem3: {
      type: "story",
      description: "menuitem",
      storyInfo: SimpleToggleButton.storyInfo,
    },
  },
  decorators: [withIconMapped],
};

const Template = (args) => {
  const [value, setValue] = React.useState("left");

  const handleValue = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MuiMaterial.ToggleButtonGroup
      value={value}
      color={args.color}
      variant={args.variant}
      disabled={args.disabled}
      orientation={args.orientation}
      size={args.size}
      onChange={handleValue}
      exclusive
    >
      <SimpleToggleButton {...args.menuitem} />
      <SimpleToggleButton {...args.menuitem2} />
      <SimpleToggleButton {...args.menuitem3} />
    </MuiMaterial.ToggleButtonGroup>
  );
};

export const SimpleToggleButtonGroup = Template.bind({});

SimpleToggleButtonGroup.args = {
  color: "primary",
  variant: "outlined",
  disabled: false,
  size: "large",
  orientation: "horizontal",
  menuitem: {
    ...SimpleToggleButton.args,
    color: SimpleToggleButtonGroup.color,
    variant: SimpleToggleButtonGroup.variant,
    size: SimpleToggleButtonGroup.size,
    iconName: "FormatAlignLeftOutlined",
    value: "left",
    itemKey: "1",
  },
  menuitem2: {
    ...SimpleToggleButton.args,
    color: SimpleToggleButtonGroup.color,
    variant: SimpleToggleButtonGroup.variant,
    size: SimpleToggleButtonGroup.size,
    iconName: "FormatAlignCenterOutlined",
    value: "middle",
    itemKey: "2",
  },
  menuitem3: {
    ...SimpleToggleButton.args,
    color: SimpleToggleButtonGroup.color,
    variant: SimpleToggleButtonGroup.variant,
    size: SimpleToggleButtonGroup.size,
    iconName: "FormatAlignRightOutlined",
    value: "right",
    itemKey: "3",
  },
};
