import React from "react";
import ListItem from "./ListItem";

const UnOrderedList = (props) => {
  return (
    <ul className={props.unOrderedStyle}>
      {props.listItems.map((item, index) => (
        <ListItem
          key={index}
          reference={item.reference}
          link={item.link}
          onClick={props.onClick}
          listStyle={props.listStyle}
        />
      ))}
    </ul>
  );
};

export default UnOrderedList;
