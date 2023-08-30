import React from "react";

import ScreenModal from "../../Shared/UI Elements/ScreenModal";

const LoadingModal = () => {
  return (
    <ScreenModal
      className="bg-blue text-white text-center text-2xl font-bold
    flex justify-center items-center"
    >
      Loading...
    </ScreenModal>
  );
};

export default LoadingModal;
