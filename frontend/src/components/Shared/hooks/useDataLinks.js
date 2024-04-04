const useDataLinks = (mediaData) => {
  const chapterCover = `${process.env.REACT_APP_BACKEND_HOST}${mediaData.chapterData.cover}`;
  const volumeCover =
    mediaData.volumeData !== null
      ? `${process.env.REACT_APP_BACKEND_HOST}${mediaData.volumeData.imageDirectory}`
      : "";
  const volumeAuthorCover =
    mediaData.volumeData !== null
      ? `${process.env.REACT_APP_BACKEND_HOST}${mediaData.volumeData.authorImage}`
      : "";

  const covers = { chapterCover, volumeCover, volumeAuthorCover };

  return covers;
};

export default useDataLinks;
