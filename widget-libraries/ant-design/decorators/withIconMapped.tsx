import React from "react";
import * as AntDesignIcons from "@ant-design/icons/lib/icons";
import { withArgsMapping } from "../../../src/decorators";

const nameToIcon = (name: string) => {
  const Icon = AntDesignIcons[name];
  return Icon ? <Icon /> : <></>;
};

const argsMapping = {
  iconName: nameToIcon,
};
const withIconMapped = (fieldNames = []) => {
  fieldNames.map((fieldName) => (argsMapping[fieldName] = nameToIcon));
  return withArgsMapping(argsMapping);
};

export default withIconMapped;
