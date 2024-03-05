import { useState } from "react";

import { useDispatch } from "react-redux";

import { clearElements } from "../../../app/features/elementsSlice";

const useBlock = (props) => {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(false);

  const hasBorder = selected
    ? "[transform:scale(1.5)] [border-width:5px]"
    : "md:[border-width:1px] lg:border-2";

  const triggerArrays = (blocks) => {
    if (props.selectedBlocks.length <= 1) return;
    for (let i = 0; i < blocks.length; i++) {
      blocks[i]();
    }
    dispatch(clearElements());
    props.setBlocks([]);
  };

  const clearElement = () => {
    setSelected(false);
  };

  const setElement = (reduxElement) => {
    props.fetchChapter();
    props.setBlocks([...props.selectedBlocks, () => clearElement()]);
    setSelected(!selected);
    dispatch(reduxElement);
  };

  const blockFunctions = {
    selected,
    hasBorder,
    triggerArrays,
    setElement,
  };

  return blockFunctions;
};

export default useBlock;
