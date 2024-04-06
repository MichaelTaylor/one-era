import React from "react";
import Card from "../../Shared/UI Elements/Card";
import ArcGrid from "./ArcGrid";
import useMediaElement from "../../Shared/hooks/useMediaElement";
import ChapterSelectableElements from "./ChapterSelectableElements";

const ChapterGraph = () => {
  const { earliestElement, hasChapterData, latestDateElement } =
    useMediaElement();

  if (!hasChapterData) {
    return <h1>Loading</h1>;
  }

  return (
    <Card>
      <ChapterSelectableElements
        earliestElement={earliestElement}
        latestElement={latestDateElement}
      />
      <ArcGrid />
    </Card>
  );
};

export default ChapterGraph;
