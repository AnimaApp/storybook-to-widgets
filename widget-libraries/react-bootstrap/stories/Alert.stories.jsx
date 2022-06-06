import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "React Bootstrap/Alert",
  component: ReactBootstrap.Alert,
  argTypes: {
    closeLabel: { description: "Close label", type: "string" },
    closeVariant: {
      description: "Close variant",
      type: "options",
      options: ["white", "dark"],
    },
    dismissible: { description: "Dismissible", type: "boolean" },
    variant: {
      description: "Variant",
      type: "options",
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "dark",
        "light",
      ],
    },
    transition: {
      description: "Transition",
      type: "options",
      options: ["Fade", "None"],
    },
    message: { description: "Message", type: "string" },
    heading: { description: "Heading", type: "string" },
  },
};

const Template = (args) => {
  return (
    <ReactBootstrap.Alert
      closeLabel={args.closeLabel}
      dismissible={args.dismissible}
      variant={args.variant}
      transition={args.transition}
    >
      {args.heading && (
        <ReactBootstrap.Alert.Heading>
          {args.heading}
        </ReactBootstrap.Alert.Heading>
      )}
      {args.message}
    </ReactBootstrap.Alert>
  );
};

export const SimpleAlert = Template.bind({});
SimpleAlert.args = {
  closeLabel: "Close label",
  closeVariant: "white",
  dismissible: false,
  variant: "primary",
  transition: "Fade",
  message: "This is an alert",
  heading: null,
};
