import React from "react";
import * as AntDesignIcons from "@ant-design/icons/lib/icons";

interface AntDIconElementProps {
  iconName?: string;
}

const AntDIconElement = ({ iconName, ...props }: AntDIconElementProps) => {
  const Element = AntDesignIcons[`${iconName ?? "StarOutlined"}`];
  return Element ? <Element {...props} /> : <></>;
};

export { AntDIconElement };
