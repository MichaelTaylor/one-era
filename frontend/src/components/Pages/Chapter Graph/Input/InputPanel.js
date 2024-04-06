import React from "react";
import ChapterInputs from "../ChapterInputs";

const InputPanel = (props) => {
  const gridTools = props.gridTools;

  return (
    <div className="flex lg:flex-row lg:gap-44 gap-10 justify-center mt-10 items-center flex-col">
      <ChapterInputs
        setTwoChapters={gridTools.setTwoChapters}
        firstChapter={gridTools.firstChapter}
        setFirstChapterHandler={gridTools.setFirstChapterHandler}
        lastChapter={gridTools.lastChapter}
        setLastChapterHandler={gridTools.setLastChapterHandler}
        latestChapter={props.latestChapter}
      />
      <div className="w-64 h-64 flex justify-center items-center">
        <img
          crossOrigin="anonymous"
          className={`object-contain max-w-full max-h-full shadow-custom-shadow`}
          src={gridTools.imagePreview}
          alt="Preview Panel"
        />
      </div>
    </div>
  );
};

export default InputPanel;
