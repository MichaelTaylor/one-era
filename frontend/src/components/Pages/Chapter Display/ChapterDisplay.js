import React, { useState } from "react";

import Card from "../../Shared/UI Elements/Card";
import ChapterImage from "./ChapterImage";
import ChapterInfo from "./ChapterInfo";

import testVolume from "../../../images/Volume_1.png";

const ChapterDisplay = (props) => {
  const GoToWiki = () => {
    window.open(
      `https://onepiece.fandom.com/wiki/Chapter_${props.media.chapterNum}`
    );
  };

  const [authorComments, setAuthorComments] = useState(false);
  const [volumeVisible, setVolumeVisible] = useState(false);

  const buttonStyle = `bg-primary text-white transition duration-300 font-bold 
    hover:opacity-60 py-2 px-4 rounded-full mx-12 md:mx-24 lg:mx-100 my-2
    disabled:opacity-50`;

  const volumeButton = (
    <button
      className={buttonStyle}
      disabled={props.media.volume === null}
      onClick={() => setVolumeVisible(!volumeVisible)}
    >
      {!volumeVisible ? "Volume" : "Chapter"}
    </button>
  );

  const authorChapterButton = (
    <button
      className={buttonStyle}
      disabled={props.media === ""}
      onClick={() => setAuthorComments(!authorComments)}
    >
      {!authorComments ? "Author Comments" : "Cover"}
    </button>
  );

  return (
    <Card className="flex flex-col overflow-y-auto text-center md:mx-4 lg:mx-8 xl:mx-10 2xl:mx-32 my-6 md:my-16">
      <ChapterInfo media={props.media} volumeVisible={volumeVisible} />
      {volumeButton}
      {authorChapterButton}
      <div className="mx-5 my-8">
        <ChapterImage
          media={props.media}
          volumeVisible={volumeVisible}
          authorComments={authorComments}
          GoToWiki={GoToWiki}
        />
      </div>
    </Card>
  );
};

export default ChapterDisplay;
