import useArcColor from "./useArcColor";
import useUnpublishedColor from "./useUnpublishedColor";

const useBlockData = (data) => {
  const sizes = `[width:2px]
    [height:2px]
    sm:w-1
    sm:h-1 
    md:w-2
    md:h-2 
    lg:w-3
    lg:h-3 
    xl:w-4
    xl:h-4 
    2xl:w-5 
    2xl:h-5 `;

  const style = `rounded-md
    transition
    [margin:0.065rem]
    [margin-top:0.5rem]
    sm:m-0.5 
    sm:mt-2
    lg:mt-1.5
    xl:mt-1 
    2xl:mt-0.5 
    hover:cursor-pointer
    hover:opacity-70 
    hover:[transform:scale(1.5)]`;

  const media = data;
  const mediaID = media.chapterID;
  const published = media.chapterID !== "";
  const message = published
    ? `${media.chapterID.arc}, Chapter ${media.chapterID.chapterNum}, ${media.chapterID.release}`
    : `${media.notes.mangaNotes}, ${media.date}`;

  const publishedColor = useArcColor(media.chapterID.arc);
  const unpublishedColor = useUnpublishedColor(media.notes.mangaNotes);

  const arcColor = published ? publishedColor : unpublishedColor;

  const compiledData = {
    sizes,
    style,
    media,
    mediaID,
    published,
    message,
    arcColor,
  };

  return compiledData;
};

export default useBlockData;
