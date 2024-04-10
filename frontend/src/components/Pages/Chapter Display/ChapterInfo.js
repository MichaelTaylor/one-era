import React from "react";

const ChapterInfo = (props) => {
  const titleStyle = `font-bold text-2xl sm:text-xl`;
  const nameStyle = `text-xl sm: text:md md:font-base lg:font-normal italic`;
  const textStyle = `text-xl sm:text-md md:text-base lg:text-lg`;
  return (
    <div>
      <h1
        className={`${titleStyle}`}
      >{`${props.info.mediaText} ${props.info.mediaNum}`}</h1>
      <h1 className={`${nameStyle}`}>{`${props.info.mediaTitle}`}</h1>

      <h1
        className={`${textStyle}`}
      >{`${props.info.mediaArcText} ${props.info.mediaArc}`}</h1>
      <h1
        className={`${textStyle}`}
      >{`${props.info.mediaSagaText} ${props.info.mediaSaga}`}</h1>
      <h1
        className={`${textStyle}`}
      >{`${props.info.mediaReleaseText} ${props.info.mediaRelease}`}</h1>
    </div>
  );
};

export default ChapterInfo;
