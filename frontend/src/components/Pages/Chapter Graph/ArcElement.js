import React from "react";
import useArcColor from "../../Shared/hooks/useArcColor";

const ArcElement = (props) => {
  const color = useArcColor(props.arc);

  const wikiStyle = "cursor-pointer hover:underline hover:font-bold";

  const hasWiki = props.wikiLink ? wikiStyle : "";

  const GoToWiki = () => {
    if (!props.wikiLink) return;
    window.open(props.wikiLink, "_blank");
  };

  return (
    <div className={`flex flex-row`}>
      <div
        className={`${color} ${hasWiki}  rounded-md border-2 mt-0.5 w-5 h-5`}
        onClick={GoToWiki}
      />
      <p
        className={`${hasWiki} text-xs lg:text-sm ml-2 text-center`}
        onClick={GoToWiki}
      >
        {props.arc}
      </p>
    </div>
  );
};

export default ArcElement;
