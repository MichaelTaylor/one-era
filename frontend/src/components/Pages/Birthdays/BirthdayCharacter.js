import React from "react";

const BirthdayCharacter = (props) => {
  const wikiRedirect = () => {
    window.open(`${props.wikiLink}`, "_blank");
  };

  return (
    <div className="m-1 sm:m-4 transition hover:cursor-pointer hover:scale-105">
      <img
        className="w-auto h-auto border-black border-4"
        crossOrigin="anonymous"
        src={props.image}
        alt={`${props.characterName} birthday`}
        onClick={wikiRedirect}
      />
      <h1
        className="font-bold text-xs sm:text-sm 
      hover:underline decoration-solid"
        onClick={wikiRedirect}
      >
        {props.characterName}
      </h1>
    </div>
  );
};

export default BirthdayCharacter;
