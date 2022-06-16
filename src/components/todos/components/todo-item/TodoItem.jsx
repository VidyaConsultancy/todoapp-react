import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

export const TodoItem = ({ todo, onTodoDelete }) => {
  const handleTodoDelete = () => {
    onTodoDelete(todo.id);
  };
  return (
    <li
      key={todo.id}
      className={`todos-item ${
        todo.isCompleted ? "todos-item--completed" : ""
      }`}
    >
      {todo.todo} | <span>{todo.dueDate}</span>
      <Link to={"/todos/" + todo.id}>
        <FontAwesomeIcon icon={faPen} />
      </Link>
      <button onClick={handleTodoDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
};
