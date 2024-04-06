import React from "react";
import useDateDifference from "../../Shared/hooks/useDateDifference";

const ChapterDateDifference = (props) => {
  const fontStyle = `text-center w-1/2 text-3xl my-auto font-bold`;

  const dateDifference = useDateDifference(
    props.earliestElement.chapterData.release,
    props.latestElement.chapterData.release
  );
  const finalMessage =
    dateDifference === "Time Paradox" ? (
      <h1>{dateDifference}</h1>
    ) : (
      <div className="flex flex-col gap-y-5">
        <h1>{dateDifference.year}</h1>
        <h1>{dateDifference.month}</h1>
        <h1>{dateDifference.day}</h1>
      </div>
    );

  return <div className={fontStyle}>{finalMessage}</div>;
};

export default ChapterDateDifference;
