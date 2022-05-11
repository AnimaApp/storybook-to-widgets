import { Story, API } from "@storybook/api";
import startCase from "lodash.startcase";

export type UserParam = {
  name: string;
  label: string;
  defaultValue?: string;
  type: "string" | "boolean" | "float" | "color" | "story" | "object" | "enum";
  options?: any[];
  storyId?: string;
  transform?: string;
  hidden?: boolean;
};

export const createUserParams = (
  story: Story,
  sbApi: API
): Array<UserParam> => {
  let user_params: Array<UserParam> = [];

  for (const [key, value] of Object.entries(story.argTypes) as [string, any]) {
    let userParam: UserParam = {} as UserParam;
    userParam.name = key;
    userParam.label = value.description || key;
    userParam.defaultValue = JSON.stringify(story.initialArgs[key]);
    userParam.transform = value?.transform;
    userParam.hidden = value?.hidden;

    switch (value.type?.name) {
      case "number":
        userParam.type = "float";
        break;
      case "radio":
        userParam.type = "enum";
        break;
      case "array":
      case "object":
        userParam.type = "object";
        break;
      default:
        userParam.type = value.type?.name;
    }

    if (
      key.toLowerCase().includes("color") ||
      (userParam.type == "string" && story.initialArgs[key].includes("#"))
    ) {
      userParam.type = "color";
    }

    if (value?.storyInfo) {
      const storyInfo = value.storyInfo as { name: string; kind: string };
      userParam.storyId = sbApi.storyId(
        storyInfo.kind,
        startCase(storyInfo.name)
      );
    }

    if (value.type?.name == "options") {
      userParam.options = [];
      userParam.type = "enum";
      value?.options?.forEach((option: any) => {
        let optionToAdd: any = {};
        optionToAdd.label = option;
        optionToAdd.value = option;
        userParam.options.push(optionToAdd);
      });
    }
    user_params.push(userParam);
  }

  return user_params;
};
