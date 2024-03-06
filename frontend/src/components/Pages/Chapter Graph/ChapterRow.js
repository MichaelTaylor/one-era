import React, { useState, useEffect } from "react";

import ChapterBlock from "./ChapterBlock";

import axios from "axios";

const ChapterRow = (props) => {
  const [row, setRow] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_HOST}/weeks/${props.year}`)
      .then((response) => {
        setRow(response.data);
      });
  }, [props.year]);

  return (
    <div className="flex flex-row flex-nowrap ml-1 sm:ml-5">
      <p className={`mr-3 ${props.flexStyle}`}>{props.year}</p>
      <div className="flex flex-nowrap">
        {row.map((item) => (
          <ChapterBlock
            key={item.index}
            data={item}
            isFirst={props.isFirst}
            fetchChapter={props.fetchChapter}
            selectedBlocks={props.selectedBlocks}
            setBlocks={props.setBlocks}
            setPreviwImage={props.setPreviewImage}
            visibleState={props.visibleState}
          />
        ))}
      </div>
    </div>
  );
};

export default ChapterRow;
