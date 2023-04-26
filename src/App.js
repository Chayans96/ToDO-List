import "./App.css";
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
      <h1 className="heading-todo">Todo</h1>
      <div className="main-container">
        <div className="center-container">
          <TodoInput addList={addToList} />

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
