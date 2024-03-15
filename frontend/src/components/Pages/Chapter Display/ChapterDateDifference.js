import React from "react";
import useDateDifference from "../../Shared/hooks/useDateDifference";

const ChapterDateDifference = (props) => {
  const fontStyle = `text-center [width:36rem] text-xl my-auto font-bold`;

  const dateDifference = useDateDifference(
    props.earliestElement.chapterData.release,
    props.latestElement.chapterData.release
  );

  return <h1 className={fontStyle}>{dateDifference}</h1>;
};

export default ChapterDateDifference;
