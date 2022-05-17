import React from "react";
import * as AntDesignIcons from "@ant-design/icons/lib/icons";

interface AntDIconElementProps {
  iconName?: string;
  iconStyle?: string;
}

const AntDIconElement = ({
  iconName,
  iconStyle,
  ...props
}: AntDIconElementProps) => {
  const Element =
    AntDesignIcons[`${iconName ?? "Star"}${iconStyle ?? "Outlined"}`];
  return Element ? <Element {...props} /> : <></>;
};

export { AntDIconElement };
