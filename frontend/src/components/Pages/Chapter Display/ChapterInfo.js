import React from "react";

const ChapterInfo = (props) => {
  const emptyMediaMessage = (
    <div className="text-center text-primary font-bold mx-12 md:mx-24 lg:mx-100 my-2">
      Please pick a chapter
    </div>
  );

  const fullMediaMessage = (
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

  return props.media === "" ? emptyMediaMessage : fullMediaMessage;
};

export default ChapterInfo;
