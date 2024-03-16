import { useState, useCallback } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  clearElements,
  setEarliestElement,
  setLatestElement,
} from "../../../app/features/elementsSlice";
import randomImageData from "../Data/RandomImageData";

const useGrid = () => {
  const [firstChapter, setFirstChapter] = useState("");
  const [lastChapter, setLastChapter] = useState("");
  const [chapter, setChapter] = useState("");
  const [selectedBlocks, setSelectedBlocks] = useState([]);
  const [isFirst, setIsFirst] = useState(true);

  const nullImage = randomImageData.null;

  const [imagePreview, setImagePreview] = useState(nullImage);
  const dispatch = useDispatch();

  const setFirstChapterHandler = (e) => {
    e.preventDefault();
    setFirstChapter(e.target.value);
    fetchImage(e.target.value);
  };

  const setLastChapterHandler = (e) => {
    e.preventDefault();
    setLastChapter(e.target.value);
    fetchImage(e.target.value);
  };

  const fetchImage = (value) => {
    if (value) {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_HOST}/chapter-relations/singular/${value}`
        )
        .then((response) => {
          if (response.data) {
            if (response.data.chapterData !== null) {
              //todo make a reusable hook to get cover based on media (chapter, volume, etc.)
              const image = response.data.chapterData.cover
                ? `${process.env.REACT_APP_BACKEND_HOST}${response.data.chapterData.cover}`
                : nullImage;
              setImagePreview(image);
            } else {
              setImagePreview(nullImage);
            }
          } else {
            setImagePreview(nullImage);
          }
        });
    } else {
      setImagePreview(nullImage);
    }
  };

  const setTwoChapters = (e) => {
    e.preventDefault();
    dispatch(clearElements());
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_HOST}/chapter-relations/multiple/${firstChapter}/${lastChapter}`
      )
      .then((response) => {
        dispatch(setEarliestElement(response.data[0]));
        dispatch(setLatestElement(response.data[1]));
      });
  };

  const setChapterHandler = (message) => {
    setChapter(message);
  };

  const selectBlockHandler = useCallback((blockExpression) => {
    setSelectedBlocks(blockExpression);
  }, []);

  const fetchChapter = useCallback(() => {
    setIsFirst(!isFirst);
  }, [isFirst]);

  const imagePreviewHandler = useCallback((image) => {
    setImagePreview(image);
  }, []);

  return {
    firstChapter,
    lastChapter,
    chapter,
    selectedBlocks,
    isFirst,
    imagePreview,
    setFirstChapterHandler,
    setLastChapterHandler,
    setTwoChapters,
    setChapterHandler,
    selectBlockHandler,
    fetchChapter,
    imagePreviewHandler,
  };
};

export default useGrid;
