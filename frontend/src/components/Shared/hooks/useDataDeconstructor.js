const useDataDeconstructor = (media) => {
  const chapterData = media.chapterData;
  const volumeData = media.volumeData;

  const mediaData = {
    chapterData,
    volumeData,
  };

  return mediaData;
};

export default useDataDeconstructor;
