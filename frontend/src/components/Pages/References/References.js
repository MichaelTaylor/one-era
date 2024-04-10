import React from "react";
import { referencesData } from "../../Shared/Data/ReferencesData";

import Card from "../../Shared/UI Elements/Card";
import UnOrderedList from "../../Shared/UI Elements/UnOrderedList";

const References = () => {
  const goToLink = (link) => {
    window.open(link, "_blank");
  };

  const listStyle =
    "text-xs sm:text-xl py-1 w-max md:text-lg my-5 hover:underline hover:cursor-pointer hover:font-bold";
  return (
    <Card>
      <h1 className="text-2xl font-bold text-center">References</h1>
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
