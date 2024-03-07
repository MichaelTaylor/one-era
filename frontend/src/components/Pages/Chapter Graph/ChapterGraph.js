import React, { useState, useEffect, useCallback, useMemo } from "react";
import Card from "../../Shared/UI Elements/Card";
import ChapterRow from "./ChapterRow";
import ArcGrid from "./ArcGrid";
import { yearsData } from "../../Shared/Data/YearsData";

import axios from "axios";

import {
  setEarliestElement,
  setLatestElement,
  clearElements,
} from "../../../app/features/elementsSlice";
import { useDispatch } from "react-redux";
import ChapterInputs from "./ChapterInputs";

import randomImageData from "../../Shared/Data/RandomImageData";

const ChapterGraph = () => {
  const [chapter, setChapter] = useState("Select a Chapter");
  const [isFirst, setIsFirst] = useState(true);
  const [selectedBlocks, setSelectedBlocks] = useState([]);
  const [imagePreview, setImagePreview] = useState("");

  const [firstChapter, setFirstChapter] = useState("");
  const [lastChapter, setLastChapter] = useState("");
  const [latestChapter, setLatestChapter] = useState(0);
  const nullImage = randomImageData.null;
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_HOST}/chapters/first/last/`)
      .then((response) => {
        dispatch(setEarliestElement(response.data[0]));
        dispatch(setLatestElement(response.data[1]));
        setLatestChapter(response.data[1].chapterNum);
        setImagePreview(nullImage);
      });
  }, [dispatch, nullImage]);

  //TODO massivly clean up this code
  const setFirstChapterHandler = (e) => {
    e.preventDefault();
    setFirstChapter(e.target.value);

    if (e.target.value) {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_HOST}/chapters/singular/${e.target.value}`
        )
        .then((response) => {
          if (response.data) {
            const image = response.data.cover
              ? `${process.env.REACT_APP_BACKEND_HOST}${response.data.cover}`
              : nullImage;
            setImagePreview(image);
          }
        });
    } else {
      setImagePreview(nullImage);
    }
  };

  const setLastChapterHandler = (e) => {
    e.preventDefault();
    setLastChapter(e.target.value);
    if (e.target.value) {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_HOST}/chapters/singular/${e.target.value}`
        )
        .then((response) => {
          if (response.data) {
            const image = response.data.cover
              ? `${process.env.REACT_APP_BACKEND_HOST}${response.data.cover}`
              : nullImage;
            setImagePreview(image);
          }
        });
    } else {
      setImagePreview(nullImage);
    }
  };

  const setTwoChapters = (e) => {
    e.preventDefault();
    dispatch(clearElements());
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_HOST}/chapters/multiple/${firstChapter}/${lastChapter}`
      )
      .then((response) => {
        dispatch(setEarliestElement(response.data[0]));
        dispatch(setLatestElement(response.data[1]));
      });
  };

  const setChapterHandler = (message) => {
    setChapter(message);
  };

  const selectBlockHandler = useCallback((blockExpression) => {
    setSelectedBlocks(blockExpression);
  }, []);

  const fetchChapter = useCallback(() => {
    setIsFirst(!isFirst);
  }, [isFirst]);

  const imagePreviewHandler = useCallback((image) => {
    setImagePreview(image);
  }, []);

  const rows = useMemo(() => {
    return yearsData
      ?.toReversed()
      .map((item, index) => (
        <ChapterRow
          key={item}
          year={item}
          visibleState={(e) => setChapterHandler(e)}
          isFirst={isFirst}
          fetchChapter={fetchChapter}
          selectedBlocks={selectedBlocks}
          setBlocks={selectBlockHandler}
          setPreviewImage={imagePreviewHandler}
          flexStyle={index === yearsData.length - 1 ? "[flex:1]" : ""}
        />
      ));
  }, [
    isFirst,
    fetchChapter,
    selectBlockHandler,
    imagePreviewHandler,
    selectedBlocks,
  ]);

  return (
    <Card className="flex flex-col items-center">
      <div className="flex lg:flex-row lg:gap-44 gap-10 justify-center mt-10 items-center flex-col">
        <ChapterInputs
          setTwoChapters={setTwoChapters}
          firstChapter={firstChapter}
          setFirstChapterHandler={setFirstChapterHandler}
          lastChapter={lastChapter}
          setLastChapterHandler={setLastChapterHandler}
          latestChapter={latestChapter}
        />
        <div className="w-64 h-64 flex justify-center items-center">
          <img
            crossOrigin="anonymous"
            className={`object-contain max-w-full max-h-full shadow-custom-shadow`}
            src={imagePreview}
            alt="Preview Panel"
          />
        </div>
      </div>
      <h1 className="my-10">{chapter}</h1>
      <div className="flex flex-col my-2">{rows}</div>
      <ArcGrid />
    </Card>
  );
};

export default ChapterGraph;
