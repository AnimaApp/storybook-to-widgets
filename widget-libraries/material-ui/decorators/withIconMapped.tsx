import React from "react";
import * as MuiIconsMaterial from "@mui/icons-material";
import { withArgsMapping } from "../../../src/decorators";

const nameToIcon = (name: string) => {
  const Icon = MuiIconsMaterial[name];
  return Icon ? <Icon /> : <></>;
};

const argsMapping = {
  startIcon: nameToIcon,
  endIcon: nameToIcon,
  iconName: nameToIcon,
  emptyIcon: nameToIcon,
};
const withIconMapped = withArgsMapping(argsMapping);

export default withIconMapped;
