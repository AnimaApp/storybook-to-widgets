import React from "react";
import * as MuiMaterial from "@mui/material";

export default {
  title: "Material UI/Slider",
  component: MuiMaterial.Slider,
  argTypes: {
    color: {
      description: "Color",
      type: "options",
      options: ["primary", "secondary"],
    },
    min: {
      description: "Min Number",
      type: "number",
    },
    max: {
      description: "Max Number",
      type: "number",
    },
    size: {
      description: "Size",
      type: "options",
      options: ["small", "medium"],
    },
    step: {
      description: "Step",
      type: "number",
    },
    disabled: {
      description: "Disabled",
      type: "boolean",
    },

    marks: {
      description: "Marks",
      type: "boolean",
    },
    orientation: {
      description: "Orientation",
      type: "options",
      options: ["vertical", "horizontal"],
      defaultValue: "horizontal",
    },
    valueLabelDisplay: {
      description: "Display Label",
      type: "options",
      options: ["auto", "on", "off"],
      defaultValue: "auto",
    },
  },
};

const ContinousSliderTemplate = (args) => {
  return (
    <MuiMaterial.Slider
      sx={{
        '& input[type="range"]': {
          WebkitAppearance: "slider-vertical",
        },
      }}
      color={args.color}
      disabled={args.disabled}
      orientation={args.orientation}
    />
  );
};

const Template = (args) => {
  return (
    <MuiMaterial.Slider
      sx={{
        '& input[type="range"]': {
          WebkitAppearance: "slider-vertical",
        },
      }}
      color={args.color}
      disabled={args.disabled}
      defaultValue={args.defaultValue}
      step={args.step}
      marks={args.marks}
      min={args.min}
      max={args.max}
      valueLabelDisplay={args.valueLabelDisplay}
      orientation={args.orientation}
      size={args.size}
    />
  );
};

export const ContinuousSlider = ContinousSliderTemplate.bind({});
ContinuousSlider.args = {
  color: "primary",
  size: "medium",
  disabled: false,
  defaultValue: 15,
};

export const DiscreteSlider = Template.bind({});
DiscreteSlider.args = {
  color: "primary",
  size: "medium",
  disabled: false,
  defaultValue: 15,
  step: 1,
  marks: true,
  min: 10,
  max: 20,
  valueLabelDisplay: "auto",
  marks: true,
};