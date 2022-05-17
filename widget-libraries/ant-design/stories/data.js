import * as AntDesignIcons from "@ant-design/icons/lib/icons";

export const iconOptions = [...Object.keys(AntDesignIcons)];

export const iconNameOptions = [
  ...Object.keys(AntDesignIcons).map((key) =>
    key
      .replace(/Filled$/, "")
      .replace(/Outlined$/, "")
      .replace(/TwoTone$/, "")
  ),
];

export const iconStyleOptions = ["Filled", "Outlined", "TwoTone"];
