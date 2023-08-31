import React, { useRef } from "react";

import odaAvatar from "../../../images/Eiichiro_Oda_Avatar.png";

const ChapterImage = (props) => {
  const imageRef = useRef(null);

  const image = props.authorComments
    ? odaAvatar
    : `${process.env.REACT_APP_BACKEND_HOST}${props.media.cover}`;

  return (
    <React.Fragment>
      <img
        crossOrigin="anonymous"
        className={`mx-auto my-8 [max-height:30rem]  border-black border-4 transition hover:scale-105 cursor-pointer sm:w-64 xl:w-80 2xl:w-96`}
        onClick={props.GoToWiki}
        src={image}
        ref={imageRef}
        alt="Eiichiro Oda Avatar"
      />
      {props.authorComments && (
        <p className="m-5">"{props.media.authorComments}"</p>
      )}
    </React.Fragment>
  );
};

export default ChapterImage;
