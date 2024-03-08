import React from "react";
import { useMemo } from "react";
import ChapterRow from "./ChapterRow";
import yearsData from "../../Shared/Data/YearsData";

const ChapterRows = (props) => {
  const rows = useMemo(() => {
    return yearsData
      ?.toReversed()
      .map((item, index) => (
        <ChapterRow
          key={item}
          year={item}
          visibleState={props.visibleState}
          isFirst={props.isFirst}
          fetchChapter={props.fetchChapter}
          selectedBlocks={props.selectedBlocks}
          setBlocks={props.setBlocks}
          setPreviewImage={props.setPreviewImage}
          flexStyle={index === yearsData.length - 1 ? "[flex:1]" : ""}
        />
      ));
  }, [
    props.visibleState,
    props.isFirst,
    props.fetchChapter,
    props.selectedBlocks,
    props.setBlocks,
    props.setPreviewImage,
  ]);
  return <div className="flex flex-col my-2">{rows}</div>;
};

export default ChapterRows;
