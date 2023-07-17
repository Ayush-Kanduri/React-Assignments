import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState({
    id: "123",
    text: "My Task",
    completed: false
  });

  function handleToggle() {
    setTodo({
      ...todo,
      completed: !todo.completed
    });
  }

  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <span style={{ visibility: todo.completed ? "visible" : "hidden" }}>
        {todo.text}
      </span>
    </div>
  );
}
