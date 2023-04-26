import React, { useState } from "react";

function TodoInput(props) {
  const [todo, setTodo] = useState("");
  return (
    <div className="input-container">
      <div className="input-group mb-3">
        <input
          type="text"
          style={{ width: "70%" }}
          className="form-control"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          value={todo}
          placeholder="Enter your todos"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
          onClick={() => {
            props.addList(todo);
            setTodo("");
          }}>
          Add
        </button>
      </div>

      {
        // old button and input box
        /* <input
        className="input-box"
        type="text"
        value={todo}
        placeholder="Enter your todos"
        onChange={(e) => setTodo(e.target.value)}
      /> */
      }
      {/* <button
        className="btn btn-secondary btn-lg"
        // className="add-button"
        onClick={() => {
          props.addList(todo);
          setTodo("");
        }}>
        add
      </button> */}
    </div>
  );
}

export default TodoInput;
