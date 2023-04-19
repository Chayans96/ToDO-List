import React from "react";

function List(props) {
  return (
    <li className="list-Item">
      {props.item}
      <span className="icons">
        <button onClick={(e) => props.deleteItem(props.index)}>delete</button>
      </span>
    </li>
  );
}

export default List;
