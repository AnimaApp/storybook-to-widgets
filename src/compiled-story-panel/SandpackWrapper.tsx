import React, { FunctionComponent, useEffect, useState } from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { Story, useStorybookApi } from "@storybook/api";
import "@codesandbox/sandpack-react/dist/index.css";
import getMetadataFromStory from "../utils/getMetadataFromStory";
import getStoryDependencies from "../utils/getStoryDependencies";
import { createImports } from "../utils/codeTemplateHelper";

type Props = {
  storyCode: string;
}

const SandpackWrapper: FunctionComponent<Props> = ({ storyCode }) => {
  const sbApi = useStorybookApi();
  const [stylesImport, setStylesImport] = useState([]);
  const [dependencies, setDependencies] = useState(null);
  const [args, setArgs] = useState({})

  const currentStory = sbApi.getCurrentStoryData() as Story;

  useEffect(() => {
    const render = async () => {
      const storyMetadata = await getMetadataFromStory(currentStory);
      const storyDependencies = await getStoryDependencies(currentStory);

      setStylesImport(storyMetadata.styles_import ?? []);
      setDependencies(storyDependencies);
      setArgs(currentStory.args ?? {});
    };

    if (storyCode) {
      render();
    }
  }, [storyCode]);

  if (dependencies === null) {
    return <div>Loading...</div>
  }

  const importsCode = createImports([
    ...Object.keys(dependencies),
    ...stylesImport,
  ]);

  const fullCode = importsCode
    ? `${importsCode}\n\nexport default ${storyCode}`
    : `export default ${storyCode}`;

  const customCssCode = currentStory.parameters?.custom_css?.replace(/.\${nodeClass}/g, '#root');
  const customCssFile = customCssCode
    ? { "/styles.css": customCssCode }
    : {};

  return (
    <Sandpack
      template="react"
      files={{
        "/App.js": fullCode,
        "/index.js": `import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App
      {...${JSON.stringify(args)}}
    />
  </StrictMode>,
  rootElement
);`,
        ...customCssFile,
      }}
      customSetup={{
        dependencies: {
          react: "17.0.2",
          "react-dom": "17.0.2",
          ...dependencies,
        },
      }}
      options={{
        editorHeight: 400,
        showLineNumbers: true,
        wrapContent: true,
      }}
    />
  );
};

export default SandpackWrapper;
