import React from "react";
import ArgumentsTable from "./ArgumentsTable";
import StoryCode from "./StoryCode";

const CompiledStoryPanel = () => {
  return (
    <div>
      <ArgumentsTable />
      <StoryCode />
    </div>
  );
};

export default CompiledStoryPanel;
