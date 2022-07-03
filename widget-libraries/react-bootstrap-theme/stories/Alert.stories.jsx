import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "New React Bootstrap/Alert",
  component: ReactBootstrap.Alert,
  argTypes: {
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

    message: { description: "Message", type: "string" },
    heading: { description: "Heading", type: "string" },
    width: {
      description: "Width",
      type: "string",
    },
  },
};

const Template = (args) => {
  const [show, setShow] = React.useState(true);

  return (
    <div style={{ width: args.width }}>
      {show && (
        <ReactBootstrap.Alert
          onClose={() => setShow(false)}
          dismissible={args.dismissible}
          variant={args.variant}
        >
          {args.heading && (
            <ReactBootstrap.Alert.Heading>
              {args.heading}
            </ReactBootstrap.Alert.Heading>
          )}
          {args.message}
        </ReactBootstrap.Alert>
      )}
    </div>
  );
};

export const SimpleAlert = Template.bind({});
SimpleAlert.args = {
  dismissible: false,
  variant: "primary",
  message: "This is an alert",
  heading: "Heading",
  width: "280px",
};
