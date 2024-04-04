import React from "react";
import ArcElement from "./ArcElement";

import { arcData } from "../../Shared/Data/ArcData";

const ArcGrid = () => {
  const bigGrid = "lg:grid-cols-6 lg:grid-rows-6 lg:grid-flow-col";
  const smallGrid = "grid-cols-2 grid-rows-2";

  return (
    <div
      className={`grid ${smallGrid} ${bigGrid} mx-auto justify-center gap-1 m-4 xl:m-10`}
    >
      {arcData.map((arc) => (
        <ArcElement
          key={arc.arc}
          arc={arc.arc}
          color={arc.color}
          wikiLink={arc.link}
        />
      ))}
    </div>
  );
};

export default ArcGrid;
