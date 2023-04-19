import React, { useState } from "react";

function TodoInput(props) {
  const [todo, setTodo] = useState("");
  return (
    <div className="input-container">
      <input
        type="text"
        value={todo}
        placeholder="Enter your todos"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="add-button"
        onClick={() => {
          props.addList(todo);
          setTodo("");
        }}>
        add
      </button>
    </div>
  );
}

export default TodoInput;
