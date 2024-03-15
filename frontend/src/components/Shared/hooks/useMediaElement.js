import useElement from "./useElement";

const useMediaElement = () => {
  const reduxElements = useElement();
  const earliestElement = reduxElements.earliestElement;
  const latestElement = reduxElements.latestElement;

  const hasAllData = (element) => {
    return !!element && !!element.chapterData;
  };

  const hasChapterData =
    earliestElement &&
    hasAllData(earliestElement) &&
    latestElement &&
    hasAllData(latestElement);

  return { earliestElement, latestElement, hasChapterData };
};

export default useMediaElement;
