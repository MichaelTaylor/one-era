import React from "react";

const Card = (props) => {
  return (
    <div
      className={`w-11/12 bg-foreground/40 border-black border-2 mx-auto my-10 shadow-2xl ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
