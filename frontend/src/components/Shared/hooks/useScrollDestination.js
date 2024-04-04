const useScrollDestination = (id) => {
  const goToElement = () => {
    const element = document.getElementById(`${id}`);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }
  };

  return goToElement;
};

export default useScrollDestination;
