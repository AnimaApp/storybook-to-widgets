import React from 'react';
import * as AntDesignIcons from "@ant-design/icons/lib/icons";

const nameToIcon = (name: string) => {
  // @ts-expect-error
  const Icon = AntDesignIcons[name];
  return Icon ? <Icon /> : <></>;
};

export const argsMapping = {iconName: nameToIcon};
