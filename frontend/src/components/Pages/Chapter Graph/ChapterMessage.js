import React from "react";

const ChapterMessage = (props) => {
  //todo: add a message for when the chapter is loading
  //todo: make select a chapter part of a shared string component like RandomImageData
  const message = props.chapter !== "" ? props.chapter : "Select a chapter";
  return <h1 className="my-10">{message}</h1>;
};

export default ChapterMessage;
