import React from "react";

const ChapterInfo = (props) => {
  return (
    <div>
      <h1 className="font-bold text-xl">{`${props.info.mediaText} ${props.info.mediaNum}`}</h1>
      <h1 className="md:font-base lg:font-normal italic">{`${props.info.mediaTitle}`}</h1>

      <h1>{`${props.info.mediaArcText} ${props.info.mediaArc}`}</h1>
      <h1>{`${props.info.mediaSagaText} ${props.info.mediaSaga}`}</h1>
      <h1>{`${props.info.mediaReleaseText} ${props.info.mediaRelease}`}</h1>
    </div>
  );
};

export default ChapterInfo;
