import React from "react";
import { withArgsMapping } from "../../../src/decorators";

const secondsToDeadline = (deadline: number) => {
  return Date.now() + deadline * 1000;
};

const argsMapping = {
  deadline: secondsToDeadline,
};
const withSecondsMapped = () => {
  return withArgsMapping(argsMapping);
};

export default withSecondsMapped;
