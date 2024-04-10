import React from "react";

import useImageLoading from "../../Shared/hooks/useImageLoading";
import useOpenLink from "../../Shared/hooks/useOpenLink";

const BirthdayCharacter = (props) => {
  const [loadingImage, isLoading, handleImageLoad] = useImageLoading(
    props.image
  );

  const { windowOpen } = useOpenLink(`${props.wikiLink}`);

  if (props.image.includes("undefined")) return;

  return (
    <div className="mx-1 my-10 [max-width:127px] [max-height:127px] sm:mx-4 transition hover:cursor-pointer hover:scale-105">
      <img
        className="w-auto h-auto border-black border-4"
        crossOrigin="anonymous"
        src={isLoading ? loadingImage : props.image}
        alt={`${props.characterName} birthday`}
        onClick={windowOpen}
        onLoad={handleImageLoad}
      />
      <h1
        className="font-bold text-xs sm:text-sm 
      hover:underline decoration-solid"
        onClick={windowOpen}
      >
        {props.characterName}
      </h1>
    </div>
  );
};

export default BirthdayCharacter;
