import React from "react";
import "./styles.css";
import TodoItem from "./TodoItem.js";

class App extends React.Component {
  render() {
    return (
      <div className="todo-list">
        <h1>My Daily Goals</h1>
        <TodoItem />
      </div>
    );
  }
}

export default App;
