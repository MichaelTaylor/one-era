import React, { useState, useEffect } from "react";

import InputPanel from "./InputPanel";
import ChapterMessage from "./ChapterMessage";
import ChapterRows from "./ChapterRows";

import useGrid from "../../Shared/hooks/useGrid";

import randomImageData from "../../Shared/Data/RandomImageData";

const ChapterSelectableElements = (props) => {
  const [latestChapter, setLatestChapter] = useState(0);
  const nullImage = randomImageData.null;

  const {
    firstChapter,
    lastChapter,
    chapter,
    selectedBlocks,
    isFirst,
    imagePreview,
    setFirstChapterHandler,
    setLastChapterHandler,
    setTwoChapters,
    setChapterHandler,
    selectBlockHandler,
    fetchChapter,
    imagePreviewHandler,
  } = useGrid();

  useEffect(() => {
    setLatestChapter(props.latestElement.chapterData.chapterNum);
    imagePreviewHandler(nullImage);
  }, [imagePreviewHandler, nullImage, props.latestElement]);

  return (
    <div className="flex flex-col items-center">
      <InputPanel
        setTwoChapters={setTwoChapters}
        firstChapter={firstChapter}
        setFirstChapterHandler={setFirstChapterHandler}
        lastChapter={lastChapter}
        setLastChapterHandler={setLastChapterHandler}
        latestChapter={latestChapter}
        imagePreview={imagePreview}
      />
      <ChapterMessage chapter={chapter} />
      <ChapterRows
        visibleState={setChapterHandler}
        isFirst={isFirst}
        fetchChapter={fetchChapter}
        selectedBlocks={selectedBlocks}
        setBlocks={selectBlockHandler}
        setPreviewImage={imagePreviewHandler}
      />
    </div>
  );
};

export default ChapterSelectableElements;
