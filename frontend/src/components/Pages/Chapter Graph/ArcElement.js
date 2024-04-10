import React from "react";
import useArcColor from "../../Shared/hooks/useArcColor";
import useOpenLink from "../../Shared/hooks/useOpenLink";

const ArcElement = (props) => {
  const color = useArcColor(props.arc);

  const wikiStyle = "cursor-pointer hover:underline hover:font-bold";

  const hasWiki = props.wikiLink ? wikiStyle : "";

  const { windowOpen } = useOpenLink(`${props.wikiLink}`);

  return (
    <div className={`flex flex-row max-w-max`}>
      <div
        className={`${color} ${hasWiki}  rounded-md border-2 mt-0.5 w-3 h-3 xl:w-5 xl:h-5`}
        onClick={props.wikiLink ? windowOpen : undefined}
      />
      <p
        className={`${hasWiki} text-xs lg:text-sm ml-2 w-auto text-center`}
        onClick={props.wikiLink ? windowOpen : undefined}
      >
        {props.arc}
      </p>
    </div>
  );
};

export default ArcElement;
