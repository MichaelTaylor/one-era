import React, { useState, useEffect, useCallback, useMemo } from "react";
import Card from "../../Shared/UI Elements/Card";
import ChapterRow from "./ChapterRow";
import ArcGrid from "./ArcGrid";
import { yearsData } from "../../Shared/Data/YearsData";

import axios from "axios";

import {
  setEarliestElement,
  setLatestElement,
} from "../../../app/features/elementsSlice";
import { useDispatch } from "react-redux";
import ChapterInputs from "./ChapterInputs";

const ChapterGraph = () => {
  const [chapter, setChapter] = useState("Select a Chapter");
  const [isFirst, setIsFirst] = useState(true);
  const [selectedBlocks, setSelectedBlocks] = useState([]);

  const [firstChapter, setFirstChapter] = useState("");
  const [lastChapter, setLastChapter] = useState("");
  const [latestChapter, setLatestChapter] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_HOST}/chapters/first/last/`)
      .then((response) => {
        dispatch(setEarliestElement(response.data[0]));
        dispatch(setLatestElement(response.data[1]));
        setLatestChapter(response.data[1].chapterNum);
      });
  }, [dispatch]);

  const setFirstChapterHandler = (e) => {
    e.preventDefault();
    setFirstChapter(e.target.value);
  };

  const setLastChapterHandler = (e) => {
    e.preventDefault();
    setLastChapter(e.target.value);
  };

  const setTwoChapters = (e) => {
    e.preventDefault();
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
          flexStyle={index === yearsData.length - 1 ? "[flex:1]" : ""}
        />
      ));
  }, [isFirst, fetchChapter, selectBlockHandler, selectedBlocks]);

  return (
    <Card className="flex flex-col items-center">
      <ChapterInputs
        setTwoChapters={setTwoChapters}
        firstChapter={firstChapter}
        setFirstChapterHandler={setFirstChapterHandler}
        lastChapter={lastChapter}
        setLastChapterHandler={setLastChapterHandler}
        latestChapter={latestChapter}
      />
      <h1 className="my-10">{chapter}</h1>
      <div className="flex flex-col my-2">{rows}</div>
      <ArcGrid />
    </Card>
  );
};

export default ChapterGraph;
