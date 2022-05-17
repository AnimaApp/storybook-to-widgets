import React from "react";
import * as AntDesignIcons from "@ant-design/icons/lib/icons";
import { withArgsMapping } from "../../../src/decorators";

const nameToIcon = (name: string) => {
  const Icon = AntDesignIcons[name];
  return Icon ? <Icon /> : <></>;
};

const argsMapping = {
  iconName: nameToIcon,
  prefixIconName: nameToIcon,
  suffixIconName: nameToIcon,
};
const withIconMapped = withArgsMapping(argsMapping);

export default withIconMapped;
