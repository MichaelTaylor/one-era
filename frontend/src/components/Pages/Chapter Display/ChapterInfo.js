import React from "react";

const ChapterInfo = (props) => {
  const chapterMediaDetails = props.media.chapterData;
  const volumeMediaDetails = props.media.volumeData;
  const emptyMediaMessage = (
    <div className="text-center text-primary font-bold mx-12 md:mx-24 lg:mx-100 my-2">
      Please pick a chapter
    </div>
  );

  const chapterInfo = (
    <div>
      <h1 className="font-bold text-xl">
        Chapter {chapterMediaDetails.chapterNum}
      </h1>
      <h1 className="md:font-base lg:font-normal italic">
        {chapterMediaDetails.title}
      </h1>

      <h1>Arc: {chapterMediaDetails.arc}</h1>
      <h1>Saga: {chapterMediaDetails.saga}</h1>
      <h1>Release: {chapterMediaDetails.release}</h1>
    </div>
  );
  //todo make resusuable
  const volumeInfo =
    volumeMediaDetails !== null ? (
      <div>
        <h1 className="font-bold text-xl">
          Volume {volumeMediaDetails.volumeNum}
        </h1>
        <h1 className="md:font-base lg:font-normal italic">
          Volume {volumeMediaDetails.volumeTitle}
        </h1>
        <h1>Chapter {chapterMediaDetails.chapterNum}</h1>
        <h1>Chapters: {volumeMediaDetails.volumeChapters}</h1>
        <h1>Release: {volumeMediaDetails.volumeRelease}</h1>
      </div>
    ) : (
      ""
    );

  const fullMediaMessage = !props.volumeVisible ? chapterInfo : volumeInfo;
  const message = props.media === "" ? emptyMediaMessage : fullMediaMessage;

  return <div>{message}</div>;
};

export default ChapterInfo;
