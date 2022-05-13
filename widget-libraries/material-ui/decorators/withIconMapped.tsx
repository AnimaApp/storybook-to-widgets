import React from "react";
import * as MuiIconsMaterial from "@mui/icons-material";
import { withArgsMapping } from "../../../src/decorators";

const nameToIcon = (name: string) => {
  const Icon = MuiIconsMaterial[name];
  return Icon ? <Icon /> : <></>;
};

const argsMapping = (name: string) => ({
  [name]: nameToIcon,
});
const withIconMapped = (name: string) => withArgsMapping(argsMapping(name));

export default withIconMapped;
