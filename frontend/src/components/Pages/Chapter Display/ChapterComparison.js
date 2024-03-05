import React from "react";
import Card from "../../Shared/UI Elements/Card";
import ChapterDisplay from "./ChapterDisplay";
import useElement from "../../Shared/hooks/useElement";
import useDateDifference from "../../Shared/hooks/useDateDifference";

const ChapterComparison = () => {
  const reduxElements = useElement();

  const earliestElement = reduxElements.earliestElement;
  const latestElement = reduxElements.latestElement;

  const dateDifference = useDateDifference(
    earliestElement.release,
    latestElement.release
  );

  return (
    <Card>
      <div className="flex flex-col justify-center sm:flex-col md:flex-row">
        <ChapterDisplay media={earliestElement} />
        <h1 className="text-center [width:36rem] text-xl my-auto font-bold ">
          {dateDifference}
        </h1>
        <ChapterDisplay media={latestElement} />
      </div>
    </Card>
  );
};

export default ChapterComparison;
