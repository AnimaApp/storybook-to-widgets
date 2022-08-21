import React from "react";
import * as MuiMaterial from "@mui/material";
import { SimpleStepItem } from "./Step.stories";

export default {
    title: "Material UI/Stepper",
    component: MuiMaterial.Stepper,
    parameters: {
        useFigmaLayers: true,
    },
    argTypes: {
        orientation: {
            description: "Orientation",
            control: { type: "select" },
            options: ["vertical", "horizontal"],
            defaultValue: "horizontal",
        },
        activeStep: { description: "Active Step", type: "number" },
        width: { description: "Width", type: "string" },
        stepitem: {
            type: "story",
            description: "stepitem",
            storyInfo: SimpleStepItem.storyInfo,
        },
        stepitem2: {
            type: "story",
            description: "stepitem",
            storyInfo: SimpleStepItem.storyInfo,
        },
        stepitem3: {
            type: "story",
            description: "stepitem",
            storyInfo: SimpleStepItem.storyInfo,
        },
    },
};

const Template = (args) => {
    return (
        <MuiMaterial.Stepper
            style={{ width: args.width }}
            orientation={args.orientation}
            activeStep={args.activeStep}
        >
            <SimpleStepItem {...args.stepitem} />
            <SimpleStepItem {...args.stepitem2} />
            <SimpleStepItem {...args.stepitem3} />
        </MuiMaterial.Stepper>
    );
};

export const SimpleToggleButtonGroup = Template.bind({});

SimpleToggleButtonGroup.args = {
    orientation: "horizontal",
    activeStep: 1,
    width: "400px",
    stepitem: {
        disabled: false,
        label: "Step 1",
    },
    stepitem2: {
        disabled: false,
        label: "Step 2",
    },
    stepitem3: {
        disabled: false,
        label: "Step 3",
    },
};
