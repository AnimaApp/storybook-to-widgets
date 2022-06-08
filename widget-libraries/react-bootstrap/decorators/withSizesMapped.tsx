import React from "react";
import { withArgsMapping } from "../../../src/decorators";

const mappingSizes = {
  "Extra Small": "xs",
  Small: "sm",
  Normal: "",
  Large: "lg",
};

const sizeToBootstrap = (sizeName: string) => {
  const size = mappingSizes[sizeName];
  if (size) {
    return size;
  }
  return "";
};

const argsMapping = {
  size: sizeToBootstrap,
};
const withIconMapped = withArgsMapping(argsMapping);

export default withIconMapped;
