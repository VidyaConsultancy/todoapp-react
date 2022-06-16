import { Routes, Route, NavLink } from "react-router-dom";
import { Todos } from "../todos/Todos";
import { TodoEdit } from "../todos/components/todo-edit/TodoEdit";
import "./App.css";
import { Greet } from "../greet/Greet";

const App = () => {
  return (
    <div className="app">
      <menu>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/todos"}>Todos</NavLink></li>
        <li><NavLink to={"/greet"}>Greet</NavLink></li>
      </menu>
      <Routes>
        <Route path="/todos" element={<Todos />} />
        <Route path="/todos/:id" element={<TodoEdit />} />
        <Route path="/greet" element={<Greet />} />
        <Route path="/" element={<h1>Base Route</h1>} />
      </Routes>
    </div>
  );
};

export default App;
