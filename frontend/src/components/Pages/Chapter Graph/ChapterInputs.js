import React from "react";

const ChapterInputs = (props) => {
  const inputStyle =
    "text-center w-64 sm:w-96 mt-6 mx-5 border-2 border-black rounded";

  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={props.setTwoChapters}
    >
      <input
        type="number"
        placeholder="Chapter 1"
        value={props.firstChapter}
        onChange={props.setFirstChapterHandler}
        min={1}
        max={props.lastChapter}
        className={inputStyle}
      />
      <input
        type="number"
        placeholder={`Chapter ${props.latestChapter}`}
        value={props.lastChapter}
        onChange={props.setLastChapterHandler}
        min={props.firstChapter}
        max={props.latestChapter}
        className={inputStyle}
      />
      <button className="bg-primary text-white font-bold rounded-lg my-5 py-2 px-3 w-32">
        Get Chapters
      </button>
    </form>
  );
};

export default ChapterInputs;
