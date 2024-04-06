import React, { useState, useEffect } from "react";

import InputPanel from "./Input/InputPanel";
import ChapterMessage from "./ChapterMessage";
import ChapterRows from "./ChapterRows";

import useGrid from "../../Shared/hooks/useGrid";

import randomImageData from "../../Shared/Data/RandomImageData";

const ChapterSelectableElements = (props) => {
  const [latestChapter, setLatestChapter] = useState(0);
  const nullImage = randomImageData.null;

  const gridTools = useGrid();
  const imageHandler = gridTools.imagePreviewHandler;

  useEffect(() => {
    setLatestChapter(props.latestElement.chapterData.chapterNum);
    imageHandler(nullImage);
  }, [props.latestElement, imageHandler, nullImage]);

  return (
    <div className="flex flex-col items-center">
      <InputPanel
        gridTools={gridTools}
        latestChapter={latestChapter}
        latestDateChapter={props.latestDateElement}
      />
      <ChapterMessage chapter={gridTools.chapter} />
      <ChapterRows gridTools={gridTools} />
    </div>
  );
};

export default ChapterSelectableElements;
