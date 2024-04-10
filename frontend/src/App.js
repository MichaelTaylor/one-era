import React from "react";

import ChapterGraph from "./components/Pages/Chapter Graph/ChapterGraph";
import BirthdayCollection from "./components/Pages/Birthdays/BirthdayCollection";
import ChapterComparison from "./components/Pages/Chapter Display/ChapterComparison";
import References from "./components/Pages/References/References";

const App = () => {
  return (
    <React.Fragment>
      <BirthdayCollection />
      <ChapterComparison />
      <ChapterGraph />
      <References />
    </React.Fragment>
  );
};

export default App;
