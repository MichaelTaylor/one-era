import React from "react";
import ReactDom from "react-dom";

const PopUpModal = (props) => {
  const visible = props.visible;
  const onClose = props.onClose;
  if (!visible) return null;

  return ReactDom.createPortal(
    <div
      className={`fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
    flex justify-center items-center ${props.className}`}
      onClick={onClose}
    >
      <div className="bg-white p-2 text-center rounded w-1/2">
        {props.children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default PopUpModal;
