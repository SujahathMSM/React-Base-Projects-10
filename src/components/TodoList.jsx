import "../styles.css";
import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  //an alternative for handleSubmit

  const generateId = () => {
    return Math.floor(Math.random()*10)
  }

  const handelSubmitAlt = () => {
    setTodo(
      ...todos.concat({
        text: todo,
        id: generateId()
      })
    )
  }

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">My Todo List</h1>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          className="todo-input"
          placeholder="Add a new task..."
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit" className="add-button">
          Add Task
        </button>
      </form>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
            <button
              className="delete-button"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
