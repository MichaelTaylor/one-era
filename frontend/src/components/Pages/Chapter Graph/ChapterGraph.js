import React, { useState, useEffect } from "react";
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
      .get(`${process.env.BACKEND_HOST}/chapters/first/last/`)
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
        `${process.env.BACKEND_HOST}/chapters/multiple/${firstChapter}/${lastChapter}`
      )
      .then((response) => {
        dispatch(setEarliestElement(response.data[0]));
        dispatch(setLatestElement(response.data[1]));
      });
  };

  const fetchChapter = () => {
    setIsFirst(!isFirst);
  };

  const inputStyle = "text-center w-96 mt-6 mx-5 border-2 border-black rounded";

  return (
    <Card className="flex flex-col items-center">
      <form onSubmit={setTwoChapters}>
        <input
          type="number"
          placeholder="Chapter 1"
          value={firstChapter}
          onChange={setFirstChapterHandler}
          min={1}
          max={lastChapter}
          className={inputStyle}
        />
        <input
          type="number"
          placeholder={`Chapter ${latestChapter}`}
          value={lastChapter}
          onChange={setLastChapterHandler}
          min={firstChapter}
          max={latestChapter}
          className={inputStyle}
        />
        <button className="bg-primary text-white rounded-lg py-2 px-3">
          submit
        </button>
      </form>
      <h1 className="my-10">{chapter}</h1>
      <div className="flex flex-col my-2">
        {yearsData?.toReversed().map((item, index) => (
          <ChapterRow
            key={item}
            year={item}
            visibleState={setChapter}
            isFirst={isFirst}
            fetchChapter={() => fetchChapter(!isFirst)}
            selectedBlocks={selectedBlocks}
            setBlocks={setSelectedBlocks}
            flexStyle={index === yearsData.length - 1 ? "[flex:1]" : ""}
          />
        ))}
      </div>
      <ArcGrid />
    </Card>
  );
};

export default ChapterGraph;
