import React from "react";
import ChapterInputs from "./ChapterInputs";

const InputPanel = (props) => {
  return (
    <div className="flex lg:flex-row lg:gap-44 gap-10 justify-center mt-10 items-center flex-col">
      <ChapterInputs
        setTwoChapters={props.setTwoChapters}
        firstChapter={props.firstChapter}
        setFirstChapterHandler={props.setFirstChapterHandler}
        lastChapter={props.lastChapter}
        setLastChapterHandler={props.setLastChapterHandler}
        latestChapter={props.latestChapter}
      />
      <div className="w-64 h-64 flex justify-center items-center">
        <img
          crossOrigin="anonymous"
          className={`object-contain max-w-full max-h-full shadow-custom-shadow`}
          src={props.imagePreview}
          alt="Preview Panel"
        />
      </div>
    </div>
  );
};

export default InputPanel;
