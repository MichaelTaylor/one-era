import React, { useState, useEffect, useRef } from "react";
import odaAvatar from "../../../images/Eiichiro_Oda_Avatar.png";

const ChapterImage = (props) => {
  const [volumeImage, setVolumeImage] = useState("");
  const imageRef = useRef(null);

  const volNum = props.media.volume !== null ? props.media.volume : 1;

  const chapterCover = `${process.env.REACT_APP_BACKEND_HOST}${props.media.cover}`;
  const volumeCover = `${process.env.REACT_APP_BACKEND_HOST}${volumeImage}`;

  const coverImage = !props.volumeVisible ? chapterCover : volumeCover;
  const image = props.authorComments ? odaAvatar : coverImage;

  return (
    <div className="flex items-center h-80">
      <img
        crossOrigin="anonymous"
        className={`transition hover:scale-105 cursor-pointer mx-auto h-auto max-h-80 object-contain shadow-custom-shadow`}
        onClick={props.GoToWiki}
        src={image}
        ref={imageRef}
        alt="Cover Art"
      />
      {props.authorComments && (
        <p className="m-5">"{props.media.authorComments}"</p>
      )}
    </div>
  );
};

export default ChapterImage;
