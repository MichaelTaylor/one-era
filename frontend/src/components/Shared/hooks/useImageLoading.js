import { useState, useEffect } from "react";
import randomImageData from "../Data/RandomImageData";

const useImageLoading = (image) => {
  const loadingImage = randomImageData.loading;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [image]);

  const handleImageLoad = () => {
    console.log("Image Loaded");
    setIsLoading(false);
  };

  return [loadingImage, isLoading, handleImageLoad];
};

export default useImageLoading;
