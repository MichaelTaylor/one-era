const useOpenLink = (link) => {
  const windowOpen = () => {
    const newWindow = window.open(link, "_blank");
    if (newWindow == null) {
      console.log("Failed to open window. Check if pop-ups are blocked.");
    }
  };

  return { windowOpen };
};

export default useOpenLink;
