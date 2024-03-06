import React, { useState, useEffect } from "react";

import {
  setEarliestElement,
  setLatestElement,
} from "../../../app/features/elementsSlice";

import useElement from "../../Shared/hooks/useElement";
import useBlock from "../../Shared/hooks/useBlock";
import useBlockData from "../../Shared/hooks/useBlockData";

const ChapterBlock = (props) => {
  const reduxElements = useElement();

  const earliestElement = reduxElements.earliestElement;
  const latestElement = reduxElements.latestElement;

  const [chapterData, setChapterData] = useState("");
  const [color, setColor] = useState("bg-white");

  const block = useBlock(props);
  const compiledData = useBlockData(props.data);

  useEffect(() => {
    if (compiledData.published) {
      setChapterData(compiledData.mediaID);
    }
    setColor(compiledData.arcColor);
  }, [compiledData.published, compiledData.arcColor, compiledData.mediaID]);

  const compiledRelease = new Date(compiledData.mediaID.release);
  const earliestRelease = new Date(earliestElement.release);
  const latestRelease = new Date(latestElement.release);

  const before = compiledRelease > latestRelease;

  const after = compiledRelease < earliestRelease;

  const selectionHandler = () => {
    if (!compiledData.published) return;
    if (block.selected) return;

    if (props.isFirst) {
      block.triggerArrays(props.selectedBlocks);

      if (before && latestElement === "") return;
      block.setElement(setEarliestElement(chapterData));
    } else {
      if (after) return;
      block.setElement(setLatestElement(chapterData));
    }
  };

  const fetchedImage = compiledData.mediaID.cover
    ? `${process.env.REACT_APP_BACKEND_HOST}${compiledData.mediaID.cover}`
    : "https://external-preview.redd.it/WWKDbX5arO0tz27B8h_WodfQL_AbP2sZiZjzthKensI.jpg?width=640&crop=smart&auto=webp&s=9ef0b29b455d84c6aa7403596dc4c080129d867f";

  return (
    <div
      id={compiledData.mediaID.chapterNum}
      className={`${color} ${compiledData.sizes} ${compiledData.style} ${block.hasBorder} focus:[transform:scale(1.5)] focus:[border-width:5px]`}
      onClick={() => selectionHandler()}
      onMouseEnter={() => {
        props.visibleState(compiledData.message);
        props.setPreviwImage(fetchedImage);
      }}
      onMouseLeave={() => props.visibleState("Select a Chapter")}
    />
  );
};

export default ChapterBlock;
