import { DecoratorFunction } from "@storybook/addons";
import React from "react";

export type MappingFunction = (value: any) => any;

export const withArgsMapping = (mapping: {
  [key: string]: MappingFunction;
}): DecoratorFunction => {
  return (story, context) => {
    if (!mapping) {
      return <>{story()}</>;
    }

    const applyMapping = (
      object: { [key: string]: any },
      mapping: { [key: string]: MappingFunction }
    ): { [key: string]: any } => {
      return Object.fromEntries(
        Object.entries(object).map(([key, value]) => {
          const mappingFunc = mapping[key];
          if (mappingFunc) {
            return [key, mappingFunc(value)];
          }

          return [key, value];
        })
      );
    };

    let args = { ...context?.args };
    args = applyMapping(args, mapping);

    console.log(args);
    const updatedContext = { ...context, args };
    return <>{story(updatedContext)}</>;
  };
};
