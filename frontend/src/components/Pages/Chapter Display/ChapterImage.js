import React, { useRef } from "react";
import odaAvatar from "../../../images/Eiichiro_Oda_Avatar.png";

import useDataDeconstructor from "../../Shared/hooks/useDataDeconstructor";

const ChapterImage = (props) => {
  const imageRef = useRef(null);

  const mediaData = useDataDeconstructor(props.media);

  //todo in mongo, if volumeData is empty, then it should be an empty string
  //todo make a reusable hook to get data
  const chapterCover = `${process.env.REACT_APP_BACKEND_HOST}${mediaData.chapterData.cover}`;
  const volumeCover =
    mediaData.volumeData !== null
      ? `${process.env.REACT_APP_BACKEND_HOST}${mediaData.volumeData.imageDirectory}`
      : "";
  const volumeAuthorCover =
    mediaData.volumeData !== null
      ? `${process.env.REACT_APP_BACKEND_HOST}${mediaData.volumeData.authorImage}`
      : "";
  const coverImage = !props.volumeVisible ? chapterCover : volumeCover;
  const authorCover = !props.volumeVisible ? odaAvatar : volumeAuthorCover;
  const image = props.authorComments ? authorCover : coverImage;

  const comments = !props.volumeVisible
    ? mediaData.chapterData.authorComments
    : mediaData.volumeData && mediaData.volumeData.authorNotes;

  return (
    <div className="flex flex-col items-center h-80">
      <img
        crossOrigin="anonymous"
        className={`transition hover:scale-105 cursor-pointer mx-auto 
        max-h-80 object-contain shadow-custom-shadow`}
        onClick={props.GoToWiki}
        src={image}
        ref={imageRef}
        alt="Cover Art"
      />
      {props.authorComments && <p className="m-5">"{comments}"</p>}
    </div>
  );
};

export default ChapterImage;
