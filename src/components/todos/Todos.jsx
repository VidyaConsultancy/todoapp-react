import { useState, useRef, useEffect } from "react";
import { Todo } from "./Todo";
import { TodoList } from "./components/todo-list/TodoList";
import "./Todos.css";

export const Todos = () => {
  const todoRef = useRef();
  const [todoItem, setTodoItem] = useState("");
  const [todoDueDate, setTodoDueDate] = useState(new Date().toISOString());
  const [todos, setTodos] = useState([
    new Todo("Learn MERN", new Date().toISOString()),
  ]);
  const today = new Date().toISOString().slice(0, 16);

  const handleTodoSubmit = (e) => {
    console.log(todoRef.current);
    e.preventDefault();
    if (todoItem.trim().length === 0) {
      console.error("Empty todo is not allowed");
      return;
    }
    const todo = new Todo(todoItem, todoDueDate);
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    setTodoItem("");
    setTodoDueDate(new Date().toISOString());
  };

  const updateTodoItemData = (e) => {
    setTodoItem(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setTodoDueDate(e.target.value);
  };

  const handleTodoDelete = (todoId) => {
    const filteredTodos = todos.filter(({ id }) => id !== todoId);
    setTodos(filteredTodos);
  };

  useEffect(() => {
    console.log("use effect");

    return () => console.log("use effect unmount");
  });

  useEffect(() => {
    console.log("I get call only once");

    return () => console.log("once only");
  }, []);
  
  useEffect(() => {
    console.log("I get call only when there is a change in todos list");

    return () => console.log("todos only");
  }, [todos]);

  return (
    <div className="todos">
      <div className="todos__header">
        <h1 className="todos__title">Todos</h1>
      </div>
      <div className="todos__body">
        <TodoList todos={todos} handleTodoDelete={handleTodoDelete} />
      </div>
      <div className="todos__footer">
        <form className="todos-form" onSubmit={handleTodoSubmit} ref={todoRef}>
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter todo"
            className="form-control"
            value={todoItem}
            onChange={updateTodoItemData}
          />
          <input
            type="datetime-local"
            name="dueDate"
            id="dueDate"
            value={todoDueDate}
            onChange={handleDueDateChange}
            min={today}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
