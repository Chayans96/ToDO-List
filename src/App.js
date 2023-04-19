import "./App.css";
import Navbar from "./navbar";
import Add_task from "./add_task";
import TodoInput from "./co/todo";
import { useState } from "react";
import List from "./co/todoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  let addToList = (input) => {
    setTodoList([...todoList, input]);
  };
  const deleteListItem = (key) => {
    let newList = [...todoList];
    newList.splice(key, 1);
    setTodoList([...newList]);
  };
  return (
    <div className="App">
      <div className="main-container">
        <div className="center-container">
          <TodoInput addList={addToList} />
          <h1>Todo</h1>
          {todoList.map((listItem, i) => {
            return (
              <List
                key={i}
                item={listItem}
                index={i}
                deleteItem={deleteListItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
