import React, { useState } from "react";

import Card from "../../Shared/UI Elements/Card";
import ChapterImage from "./ChapterImage";
import ChapterInfo from "./ChapterInfo";

const ChapterDisplay = (props) => {
  const GoToWiki = () => {
    window.open(
      `https://onepiece.fandom.com/wiki/Chapter_${props.media.chapterNum}`
    );
  };

  const [authorComments, setAuthorComments] = useState(false);

  const buttonStyle =
    "bg-primary text-white transition duration-300 font-bold hover:opacity-60 py-2 px-4 rounded-full mx-12 md:mx-24 lg:mx-100 my-2";

  return (
    <Card className="flex flex-col text-center md:mx-4 lg:mx-8 xl:mx-10 2xl:mx-32 my-6 md:my-16">
      <ChapterInfo media={props.media} />
      <button
        className={buttonStyle}
        onClick={() => setAuthorComments(!authorComments)}
      >
        {!authorComments ? "Author Comments" : "Chapter Cover"}
      </button>

      <ChapterImage
        media={props.media}
        authorComments={authorComments}
        GoToWiki={GoToWiki}
      />
    </Card>
  );
};

export default ChapterDisplay;
