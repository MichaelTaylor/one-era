const useUnpublishedColor = (unpublishedType) => {
  const color = String(unpublishedType).includes("Holiday")
    ? "bg-holiday"
    : "bg-break";

  return color;
};

export default useUnpublishedColor;
