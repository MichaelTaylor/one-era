import React, { useRef } from "react";
import odaAvatar from "../../../images/Eiichiro_Oda_Avatar.png";

const ChapterImage = (props) => {
  const imageRef = useRef(null);

  const chapterData = props.media.chapterData;
  const volumeData = props.media.volumeData;

  //todo in mongo, if volumeData is empty, then it should be an empty string
  //todo make a reusable hook to get data
  const chapterCover = `${process.env.REACT_APP_BACKEND_HOST}${chapterData.cover}`;
  const volumeCover =
    volumeData !== null
      ? `${process.env.REACT_APP_BACKEND_HOST}${volumeData.imageDirectory}`
      : "";
  const volumeAuthorCover =
    volumeData !== null
      ? `${process.env.REACT_APP_BACKEND_HOST}${volumeData.authorImage}`
      : "";
  const coverImage = !props.volumeVisible ? chapterCover : volumeCover;
  const authorCover = !props.volumeVisible ? odaAvatar : volumeAuthorCover;
  const image = props.authorComments ? authorCover : coverImage;

  const comments = !props.volumeVisible
    ? chapterData.authorComments
    : volumeData.authorNotes;

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
