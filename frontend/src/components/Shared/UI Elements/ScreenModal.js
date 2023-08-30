import React from "react";
import ReactDom from "react-dom";

const ScreenModal = (props) => {
  return ReactDom.createPortal(
    <div className={`fixed top-0 w-screen h-screen ${props.className}`}>
      {props.children}
    </div>,
    document.getElementById("modal-screen")
  );
};

export default ScreenModal;
