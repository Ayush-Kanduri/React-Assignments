import React from "react";

class TodoItem extends React.Component {
  // Create a state with properties: id, text, completed.

  constructor() {
    super();
    this.state = {
      id: "123",
      text: "My Task",
      completed: false
    };
  }

  handleCheckboxChange = (event) => {
    this.setState((prev) => {
      return { ...prev, completed: event.target.checked };
    });
  };

  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.state.completed}
          onChange={this.handleCheckboxChange}
        />
        <label
          style={{ visibility: this.state.completed ? "visible" : "hidden" }}
        >
          {this.state.text}
        </label>
      </div>
    );
  }
}

export default TodoItem;
