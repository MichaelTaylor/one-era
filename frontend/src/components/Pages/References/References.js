import React from "react";
import { referencesData } from "../../Shared/Data/ReferencesData";

import Card from "../../Shared/UI Elements/Card";
import UnOrderedList from "../../Shared/UI Elements/UnOrderedList";

const References = () => {
  const goToLink = (link) => {
    window.open(link, "_blank");
  };

  const listStyle = "hover:cursor-pointer hover:opacity-70";
  return (
    <Card>
      <h1 className="text-center">References</h1>
      <UnOrderedList
        unOrderedStyle="m-4"
        listItems={referencesData}
        listStyle={listStyle}
        onClick={goToLink}
      />
    </Card>
  );
};

export default References;
