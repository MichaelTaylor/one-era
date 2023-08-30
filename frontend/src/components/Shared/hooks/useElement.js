import { useSelector } from "react-redux";

const useElement = () => {
  const earliestElement = useSelector((state) => state.element.earliestElement);
  const latestElement = useSelector((state) => state.element.latestElement);

  return {
    earliestElement,
    latestElement,
  };
};

export default useElement;
