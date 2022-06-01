import React from "react";
import * as MuiMaterial from "@mui/material";

export default {
  title: "Material UI/Stepper",
  component: MuiMaterial.Stepper,
  argTypes: {
    activeStep: { description: "Active step number", type: "number" },
    alternativeLabel: { description: "Alternative label", type: "boolean" },
    nonLinear: { description: "Non linear", type: "boolean" },
    orientation: {
      description: "Orientation",
      type: "options",
      options: ["horizontal", "vertical"],
    },
  },
};

const Template = (args) => {
  return (
    <MuiMaterial.Stepper
      nonLinear={args.nonLinear}
      activeStep={args.activeStep}
      orientation={args.orientation}
      alternativeLabel={args.alternativeLabel}
    >
      <MuiMaterial.Step>
        <MuiMaterial.StepButton color="inherit">test</MuiMaterial.StepButton>
      </MuiMaterial.Step>
    </MuiMaterial.Stepper>
  );
};

export const SimpleStepper = Template.bind({});

SimpleStepper.args = {
  activeStep: 1,
  alternativeLabel: false,
  nonLinear: false,
  orientation: "horizontal",
};
