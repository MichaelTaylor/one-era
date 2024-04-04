import React, { useState, useEffect } from "react";

import ChapterGraph from "./components/Pages/Chapter Graph/ChapterGraph";
import BirthdayCollection from "./components/Pages/Birthdays/BirthdayCollection";
import ChapterComparison from "./components/Pages/Chapter Display/ChapterComparison";
import References from "./components/Pages/References/References";

import LoadingModal from "./components/Pages/Modals/LoadingModal";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <React.Fragment>
      {isLoading && <LoadingModal />}
      <BirthdayCollection />
      <ChapterComparison />
      <ChapterGraph />
      <References />
    </React.Fragment>
  );
};

export default App;
