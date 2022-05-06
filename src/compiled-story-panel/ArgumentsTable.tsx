import React from "react";
import { ArgsTable, PresetColor, SortType } from "@storybook/components";
import {
  ArgTypes,
  useArgs,
  useGlobals,
  useArgTypes,
  useParameter,
  useStorybookState,
} from "@storybook/api";
import { PARAM_KEY } from "./constants";

interface ControlsParameters {
  sort?: SortType;
}

const ArgumentsTable = () => {
  const [args, updateArgs, resetArgs] = useArgs();
  const [globals] = useGlobals();
  const rows = useArgTypes();
  const { sort } = useParameter<ControlsParameters>(PARAM_KEY, {});
  const { path } = useStorybookState();

  const updatedRows = Object.entries(rows).reduce((acc, [key, arg]) => {
    if (!arg.description) {
      return acc;
    }

    const name = `${arg.description}${arg.hidden ? " (hidden)" : ""}`;

    acc[key] = {
      ...arg,
      name,
    };

    return acc;
  }, {} as ArgTypes);

  return (
    <ArgsTable
      {...{
        key: path, // resets state when switching stories
        compact: true,
        rows: updatedRows,
        args,
        globals,
        updateArgs,
        resetArgs,
        inAddonPanel: true,
        sort,
      }}
    />
  )
};

export default ArgumentsTable;
