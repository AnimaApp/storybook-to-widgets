import { capitalize } from "../utils";

export const createCodeTemplate = (
  storySource: any,
  dependencies: any
): any => {
  const importDependencyArray = Object.keys(dependencies);
  let codePrefix =
    'import React from "react";\r\nimport ReactDOM from "react-dom";\r\n';
  for (let i = 0; i < importDependencyArray.length; i++) {
    codePrefix +=
      "import * as " +
      capitalize(importDependencyArray[i]) +
      ' from "' +
      importDependencyArray[i] +
      '";\r\n';
  }
  codePrefix += "\r\nconst Example = ";
  const codeAffix =
    '\r\n;\r\nconst args = <%-params%>;\r\n\r\n\r\nReactDOM.render(<Example {...args} />, document.querySelector(".${nodeClass}"));';
  // @ts-ignore
  let codeTemplate = codePrefix + storySource.source + codeAffix;

  return codeTemplate;
};

export const createCodeTemplateCompound = (dependencies: any): any => {
  const importDependencyArray = Object.keys(dependencies);
  let codePrefix =
    'import React from "react";\r\nimport ReactDOM from "react-dom";\r\n';
  for (let i = 0; i < importDependencyArray.length; i++) {
    codePrefix +=
      "import * as " +
      capitalize(importDependencyArray[i]) +
      ' from "' +
      importDependencyArray[i] +
      '";\r\n';
  }
  codePrefix += "\r\n${storyCode}";
  const codeAffix =
    '\r\n\r\nconst args = <%-params%>;\r\n\r\n\r\nReactDOM.render(<Example {...args} />, document.querySelector(".${nodeClass}"));';
  let codeTemplate = codePrefix + codeAffix;

  return codeTemplate;
};
