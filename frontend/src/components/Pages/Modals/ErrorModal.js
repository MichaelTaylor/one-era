import React from "react";

import PopUpModal from "../../Shared/UI Elements/PopUpModal";

const ErrorModal = (props) => {
  return (
    <PopUpModal
      className={props.className}
      visible={props.visible}
      onClose={props.onClose}
    >
      <p className="mb-5">{props.title}</p>
      <p>{props.error}</p>
      <button
        className=" mt-10 bg-primary font-bold text-white 
          rounded-3xl p-3 border-4 border-solid w-20 sm:w-40 hover:opacity-70"
        onClick={props.onClose}
      >
        Close
      </button>
    </PopUpModal>
  );
};

export default ErrorModal;
