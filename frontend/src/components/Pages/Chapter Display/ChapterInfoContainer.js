import React from "react";

import ChapterInfo from "./ChapterInfo";

const ChapterInfoContainer = (props) => {
  const chapterMediaDetails = props.media.chapterData;
  const volumeMediaDetails = props.media.volumeData;
  const emptyMediaMessage = (
    <div className="text-center text-primary font-bold mx-12 md:mx-24 lg:mx-100 my-2">
      Please pick a chapter
    </div>
  );

  const chap = {
    mediaText: "Chapter",
    mediaNum: chapterMediaDetails.chapterNum,
    mediaTitle: chapterMediaDetails.title,
    mediaArcText: "Arc:",
    mediaArc: chapterMediaDetails.arc,
    mediaSagaText: "Saga:",
    mediaSaga: chapterMediaDetails.saga,
    mediaReleaseText: "Release:",
    mediaRelease: chapterMediaDetails.release,
  };

  const vol = {
    mediaText: "Volume",
    mediaNum: volumeMediaDetails.volumeNum,
    mediaTitle: volumeMediaDetails.volumeTitle,
    mediaArcText: "Chapter:",
    mediaArc: chapterMediaDetails.chapterNum,
    mediaSagaText: "Chapters:",
    mediaSaga: volumeMediaDetails.volumeChapters,
    mediaReleaseText: "Release: ",
    mediaRelease: volumeMediaDetails.volumeRelease,
  };

  const fullMediaMessage = !props.volumeVisible ? chap : vol;
  const message = props.media === "" ? emptyMediaMessage : fullMediaMessage;

  return <ChapterInfo info={message} />;
};

export default ChapterInfoContainer;
