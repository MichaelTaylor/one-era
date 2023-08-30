import React from "react";

const ListItem = (props) => {
  return (
    <li className={props.listStyle} onClick={() => props.onClick(props.link)}>
      {props.reference}
    </li>
  );
};

export default ListItem;
