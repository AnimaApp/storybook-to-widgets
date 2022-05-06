import React, { FunctionComponent } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

type Props = {
  code: string;
};

const SyntaxHighlighting: FunctionComponent<Props> = ({ code }) => {
  return (
    <CodeMirror
      value={code}
      height="100%"
      readOnly
      extensions={[javascript({ jsx: true })]}
    />
  );
};

export default SyntaxHighlighting;
