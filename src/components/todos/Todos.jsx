import { useState } from "react";
import "./Todos.css";

export const Todos = () => {
  const [todoItem, setTodoItem] = useState("");
  const todos = [];
  const handleTodoSubmit = (e) => {
    e.preventDefault();
    // const todo = document.getElementById("todo").value;
    console.log(todoItem);
  }
  
  const updateTodoItemData = (e) => {
    setTodoItem(e.target.value);
  };
  return (
    <div className="todos">
      <div className="todos__header">
        <h1 className="todos__title">Todos</h1>
      </div>
      <div className="todos__body">
        <ul className="todos-list">
          {todos.map((todo) => (
            <li
              className={`todos-item ${
                todo.isCompleted ? "todos-item--completed" : ""
              }`}
            >
              {todo.todo}
            </li>
          ))}
        </ul>
      </div>
      <div className="todos__footer">
        <form className="todos-form" onSubmit={handleTodoSubmit}>
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter todo"
            className="form-control"
            value={todoItem}
            onChange={updateTodoItemData}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
