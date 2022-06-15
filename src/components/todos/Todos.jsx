import { useState } from "react";
import { Todo } from "./Todo";
import "./Todos.css";

export const Todos = () => {
  const [todoItem, setTodoItem] = useState("");
  const [todos, setTodos] = useState([]);
  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if(todoItem.trim().length === 0) {
      console.error('Empty todo is not allowed');
      return;
    };
    const todo = new Todo(todoItem, new Date().toISOString());
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    setTodoItem("");
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
              key={todo.id}
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
