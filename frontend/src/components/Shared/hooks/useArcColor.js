import { arcData } from "../Data/ArcData";

const useArcColor = (arcName) => {
  const arcColor = arcData.find((item) => item.arc === arcName);
  const color = arcColor !== undefined ? arcColor.color : "bg-break/50";

  return color;
};

export default useArcColor;
