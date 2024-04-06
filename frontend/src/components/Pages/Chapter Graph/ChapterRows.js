import React from "react";
import { useMemo } from "react";
import ChapterRow from "./ChapterRow";
import yearsData from "../../Shared/Data/YearsData";

const ChapterRows = (props) => {
  const gridTools = props.gridTools;
  const rows = useMemo(() => {
    return yearsData
      ?.toReversed()
      .map((item, index) => (
        <ChapterRow
          key={item}
          year={item}
          visibleState={gridTools.setChapterHandler}
          isFirst={gridTools.isFirst}
          fetchChapter={gridTools.fetchChapter}
          selectedBlocks={gridTools.selectedBlocks}
          setBlocks={gridTools.selectBlockHandler}
          setPreviewImage={gridTools.imagePreviewHandler}
          flexStyle={index === yearsData.length - 1 ? "[flex:1]" : ""}
        />
      ));
  }, [gridTools]);
  return <div className="flex flex-col my-2">{rows}</div>;
};

export default ChapterRows;
