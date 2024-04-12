import React, { useState, useEffect } from "react";

import Card from "../../Shared/UI Elements/Card";
import ChapterImage from "./ChapterImage";
import ChapterContainer from "./ChapterInfoContainer";

import useDataDeconstructor from "../../Shared/hooks/useDataDeconstructor";
import useOpenLink from "../../Shared/hooks/useOpenLink";

const ChapterDisplay = (props) => {
  const [authorComments, setAuthorComments] = useState(false);

  //todo instead of state use a reducer when adding anime (chapters, volumes, anime, etc)
  const [volumeVisible, setVolumeVisible] = useState(false);

  //to change to chapter if volume is not available
  useEffect(() => {
    if (props.media && !props.media.volumeData) {
      setVolumeVisible(false);
    }
  }, [props.media]);

  const mediaData = useDataDeconstructor(props.media);

  const link = !volumeVisible
    ? `https://onepiece.fandom.com/wiki/Chapter_${mediaData.chapterData.chapterNum}`
    : mediaData.volumeData &&
      `https://onepiece.fandom.com/wiki/Volume_${mediaData.volumeData.volumeNum}`;

  const { windowOpen } = useOpenLink(link);

  const buttonStyle = `bg-primary mx-auto w-44 md:w-56 h-20 text-2xl text-white transition duration-300 font-bold 
    hover:opacity-60 py-2 px-4 rounded-full mx-12 sm:h-20 sm:text-md md:text-lg lg:mx-100 my-2
    disabled:opacity-50`;

  const volumeButton = (
    <button
      className={buttonStyle}
      disabled={mediaData.volumeData === null}
      onClick={() => setVolumeVisible(!volumeVisible)}
    >
      {!volumeVisible ? "Volume" : "Chapter"}
    </button>
  );

  const authorChapterButton = (
    <button
      className={buttonStyle}
      disabled={mediaData.chapterData === ""}
      onClick={() => setAuthorComments(!authorComments)}
    >
      {!authorComments ? "Author Comments" : "Cover"}
    </button>
  );

  return (
    <Card className="flex flex-col overflow-y-auto text-center md:mx-4 lg:mx-8 xl:mx-10 2xl:mx-32 my-6 md:my-16">
      <ChapterContainer media={props.media} volumeVisible={volumeVisible} />
      {volumeButton}
      {authorChapterButton}
      <div className="mx-5 my-8">
        <ChapterImage
          media={props.media}
          volumeVisible={volumeVisible}
          authorComments={authorComments}
          GoToWiki={windowOpen}
        />
      </div>
    </Card>
  );
};

export default ChapterDisplay;
