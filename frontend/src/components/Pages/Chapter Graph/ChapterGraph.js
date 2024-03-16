import React, { useState, useEffect } from "react";
import Card from "../../Shared/UI Elements/Card";
import InputPanel from "./InputPanel";
import ChapterMessage from "./ChapterMessage";
import ChapterRows from "./ChapterRows";
import ArcGrid from "./ArcGrid";

import {
  setEarliestElement,
  setLatestElement,
} from "../../../app/features/elementsSlice";
import { useDispatch } from "react-redux";

import randomImageData from "../../Shared/Data/RandomImageData";

import useFetch from "../../Shared/hooks/useFetch";
import useGrid from "../../Shared/hooks/useGrid";
import useMediaElement from "../../Shared/hooks/useMediaElement";
import ChapterSelectableElements from "./ChapterSelectableElements";

const ChapterGraph = () => {
  /*const [latestChapter, setLatestChapter] = useState(0);
  const nullImage = randomImageData.null;
  }

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

  console.log(earliestElement);
  useEffect(() => {
    //setLatestChapter(data[1].chapterNum);
    //imagePreviewHandler(nullImage);
  }, [imagePreviewHandler, nullImage]);*/

  const { earliestElement, latestElement, hasChapterData } = useMediaElement();

  if (!hasChapterData) {
    return <h1>Loading</h1>;
  }

  return (
    <Card>
      {/*<InputPanel
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
  />*/}
      <ChapterSelectableElements
        earliestElement={earliestElement}
        latestElement={latestElement}
      />
      <ArcGrid />
    </Card>
  );
};

export default ChapterGraph;
