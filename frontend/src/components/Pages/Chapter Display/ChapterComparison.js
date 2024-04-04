import React, { useEffect } from "react";
import Card from "../../Shared/UI Elements/Card";
import ChapterDisplay from "./ChapterDisplay";
import useFetch from "../../Shared/hooks/useFetch";
import {
  setEarliestElement,
  setLatestElement,
} from "../../../app/features/elementsSlice";
import { useDispatch } from "react-redux";
import ChapterDateDifference from "./ChapterDateDifference";
import useMediaElement from "../../Shared/hooks/useMediaElement";

const ChapterComparison = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_BACKEND_HOST}/chapter-relations/first/last`
  );

  useEffect(() => {
    if (loading) {
      console.log("Loading");
    }

    if (error) {
      console.log(error);
    }

    if (data) {
      dispatch(setEarliestElement(data[0]));
      dispatch(setLatestElement(data[1]));
    }
  }, [data, error, loading, dispatch]);

  const { earliestElement, latestElement, hasChapterData } = useMediaElement();
  const loadingPage = <h1>Loading</h1>;
  const loadedPage = (
    <div
      id="chapter-comparison"
      className="flex flex-col justify-center sm:flex-col md:flex-row"
    >
      <ChapterDisplay media={earliestElement} />
      <ChapterDateDifference
        earliestElement={earliestElement}
        latestElement={latestElement}
      />
      <ChapterDisplay media={latestElement} />
    </div>
  );

  return (
    <Card className="[min-height:48rem]">
      {hasChapterData ? loadedPage : loadingPage}
    </Card>
  );
};

export default ChapterComparison;
