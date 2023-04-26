import React from "react";

function List(props) {
  return (
    <div className="todo-items-container">
      <ul className="list-item-ul">
        <li className="list-Item">
          {props.item}
          <span className="icons">
            <p>
              {" "}
              <button onClick={(e) => props.deleteItem(props.index)}>
                <i class="fa-solid fa-trash"></i>
                {/* <i class="fa-thin fa-trash"></i> */}
                {/* <i class="fa-light fa-trash"></i> */}
              </button>
            </p>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default List;
