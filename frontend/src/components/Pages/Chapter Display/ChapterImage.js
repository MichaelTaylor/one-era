import React, { useRef } from "react";
import randomImageData from "../../Shared/Data/RandomImageData";

import useDataDeconstructor from "../../Shared/hooks/useDataDeconstructor";
import useDataLinks from "../../Shared/hooks/useDataLinks";
import useImageLoading from "../../Shared/hooks/useImageLoading";

const ChapterImage = (props) => {
  const imageRef = useRef(null);

  const { odaAvatar } = randomImageData;

  const mediaData = useDataDeconstructor(props.media);
  const links = useDataLinks(mediaData);

  const coverImage = !props.volumeVisible
    ? links.chapterCover
    : links.volumeCover;
  const authorCover = !props.volumeVisible
    ? odaAvatar
    : links.volumeAuthorCover;
  const image = props.authorComments ? authorCover : coverImage;

  const comments = !props.volumeVisible
    ? mediaData.chapterData.authorComments
    : mediaData.volumeData && mediaData.volumeData.authorNotes;

  const [loadingImage, isLoading, handleImageLoad] = useImageLoading(image);

  return (
    <div className="flex flex-col items-center h-80">
      <img
        crossOrigin="anonymous"
        className={`transition hover:scale-105 cursor-pointer mx-auto 
        max-h-80 object-contain shadow-custom-shadow`}
        onClick={props.GoToWiki}
        src={isLoading ? loadingImage : image}
        ref={imageRef}
        alt="Cover Art"
        onLoad={handleImageLoad}
      />
      {props.authorComments && <p className="m-5">"{comments}"</p>}
    </div>
  );
};

export default ChapterImage;
