import React from "react";

const ChapterInfo = (props) => {
  return (
    <div>
      <h1 className="font-bold text-xl">Chapter {props.media.chapterNum}</h1>
      <h1 className="md:font-base lg:font-normal italic">
        {props.media.title}
      </h1>

      <h1>Arc: {props.media.arc}</h1>
      <h1>Saga: {props.media.saga}</h1>
      <h1>Release: {props.media.release}</h1>
    </div>
  );
};

export default ChapterInfo;
