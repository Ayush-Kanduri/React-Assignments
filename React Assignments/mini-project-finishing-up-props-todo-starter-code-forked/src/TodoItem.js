import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.Task;
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState((prevState) => {
      return { completed: !prevState.completed };
    });
  }
  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.state.completed}
          onChange={this.handleChange}
        />
        <label
          style={{ visibility: this.state.completed ? "visible" : "hidden" }}
        >
          {" "}
          {this.state.text}{" "}
        </label>
      </div>
    );
  }
}

export default TodoItem;
