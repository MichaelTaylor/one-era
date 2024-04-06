import { useSelector } from "react-redux";

const useElement = () => {
  const earliestElement = useSelector((state) => state.element.earliestElement);
  const latestElement = useSelector((state) => state.element.latestElement);
  const latestDateElement = useSelector(
    (state) => state.element.latestDateElement
  );

  return {
    earliestElement,
    latestElement,
    latestDateElement,
  };
};

export default useElement;
