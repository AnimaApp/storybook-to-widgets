import React from "react";
import * as MuiMaterial from "@mui/material";

export default {
    title: "Material UI/Step",
    component: MuiMaterial.Step,
    parameters: {
        docs: {
            description: {
                component: "Item",
            },
        },
        useFigmaLayers: true,
        container: MuiMaterial.Stepper,
    },
    argTypes: {
        active: {
            description: "Active",
            control: { type: "boolean" },
        },
        completed: {
            description: "Completed",
            control: { type: "boolean" },
        },
        disabled: {
            description: "Disabled",
            control: { type: "boolean" },
        },
        label: { description: "Label", type: "string" },
    },
};

const Template = (args) => (
    <MuiMaterial.Step
        active={args.active}
        completed={args.completed}
        disabled={args.disabled}
    >
        <MuiMaterial.StepLabel> {args.label}</MuiMaterial.StepLabel>
    </MuiMaterial.Step>
);

export const SimpleStepItem = Template.bind({});
SimpleStepItem.args = {
    active: false,
    completed: true,
    disabled: false,
    label: "Step 1",

};

SimpleStepItem.storyInfo = {
    name: "SimpleStepItem",
    kind: "Material UI/Step",
};
