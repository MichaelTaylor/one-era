import React, { useRef } from "react";
import randomImageData from "../../Shared/Data/RandomImageData";
import odaAvatar from "../../../images/Eiichiro_Oda_Avatar.png";

const ChapterImage = (props) => {
  const imageRef = useRef(null);

  const image = props.authorComments
    ? odaAvatar
    : `${process.env.REACT_APP_BACKEND_HOST}${props.media.cover}`;

  const nullImage = randomImageData.null;
  return (
    <div className="flex items-center h-80">
      <img
        crossOrigin="anonymous"
        className={`transition hover:scale-105 cursor-pointer mx-auto h-auto max-h-80 object-contain shadow-custom-shadow`}
        onClick={props.GoToWiki}
        src={props.media ? image : nullImage}
        ref={imageRef}
        alt="Eiichiro Oda Avatar"
      />
      {props.authorComments && (
        <p className="m-5">"{props.media.authorComments}"</p>
      )}
    </div>
  );
};

export default ChapterImage;
