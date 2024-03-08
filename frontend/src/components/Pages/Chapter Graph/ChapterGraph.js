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
import useChapter from "../../Shared/hooks/useChapter";

const ChapterGraph = () => {
  const [latestChapter, setLatestChapter] = useState(0);
  const nullImage = randomImageData.null;
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_BACKEND_HOST}/chapters/first/last/`
  );

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
  } = useChapter();

  useEffect(() => {
    if (loading) {
      console.log("Loading");
    }

    if (error) {
      console.log("Error");
    }

    if (data) {
      dispatch(setEarliestElement(data[0]));
      dispatch(setLatestElement(data[1]));
      setLatestChapter(data[1].chapterNum);
      imagePreviewHandler(nullImage);
    }
  }, [data, dispatch, nullImage, error, loading, imagePreviewHandler]);

  return (
    <Card className="flex flex-col items-center">
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
      <ArcGrid />
    </Card>
  );
};

export default ChapterGraph;
