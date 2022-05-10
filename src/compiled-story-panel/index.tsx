import React from "react";
import useStoryCompiledCode from "../hooks/useStoryCompiledCode";
import SandpackWrapper from "./SandpackWrapper";

const CompiledStoryPanel = () => {
  const storyCompiledCode = useStoryCompiledCode();

  return (
    <SandpackWrapper
      storyCode={storyCompiledCode}
    />
  );
};

export default CompiledStoryPanel;
