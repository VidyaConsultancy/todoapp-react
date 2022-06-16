import { TodoItem } from "../todo-item/TodoItem";

export const TodoList = ({ todos, handleTodoDelete }) => {
  const onTodoDelete = (todoId) => {
    handleTodoDelete(todoId);
  };
  return (
    <ul className="todos-list">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} onTodoDelete={onTodoDelete} />
      ))}
    </ul>
  );
};
