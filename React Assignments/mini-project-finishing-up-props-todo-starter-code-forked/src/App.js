import React from "react";
import "./styles.css";
import TodoItem from "./TodoItem.js";
import todos from "./todoData.js";

class App extends React.Component {
  render() {
    return (
      <div className="todo-list">
        <h1>My Daily Goals</h1>
        {todos.map((task) => (
          <TodoItem key={task.id} Task={task} />
        ))}
      </div>
    );
  }
}

export default App;
