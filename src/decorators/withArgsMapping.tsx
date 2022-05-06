import { DecoratorFunction } from "@storybook/addons";

export type MappingFunction = (value: any) => React.ReactChild;

const deepApplyMap = (
  object: { [key: string]: any },
  mapping: { [key: string]: MappingFunction }
): { [key: string]: any } => {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      const mappingFunc = mapping[key];
      if (mappingFunc) {
        return [key, mappingFunc(value)];
      }

      if (typeof value === "object") {
        if (Array.isArray(value)) {
          return [key, value.map((item) => deepApplyMap(item, mapping))];
        }

        return [key, deepApplyMap(value, mapping)];
      }

      return [key, value];
    })
  );
};

export const withArgsMapping = (mapping: {
  [key: string]: MappingFunction;
}): DecoratorFunction => {
  return (story, context) => {
    const updatedContext = {
      ...context,
      args: deepApplyMap(context.args, mapping),
    };

    return story(updatedContext);
  };
};
