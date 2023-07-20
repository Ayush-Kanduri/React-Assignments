import React, { Component } from "react";

export default class ClassApp extends Component {
  constructor() {
    super();
    this.state = {
      count1: 0,
      count2: 0,
      isPaused: false
    };
    this.timer1 = 0;
    this.timer2 = 0;
  }
  componentDidMount() {
    this.timer1 = setInterval(() => {
      if (this.state.count1 >= 10) {
        this.setState({
          count2: this.state.count2 + 1
        });
      } else {
        this.setState({
          count2: this.state.count2 + 1,
          count1: this.state.count1 + 1
        });
      }
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer1);
    clearInterval(this.timer2);
  }
  handlePause = (e) => {
    if (!this.state.isPaused) {
      clearInterval(this.timer1);
      clearInterval(this.timer2);
      this.setState({ isPaused: true });
    } else {
      this.timer2 = setInterval(() => {
        if (this.state.count1 < 10) {
          this.setState({
            isPaused: false,
            count1: this.state.count1 + 1,
            count2: this.state.count2 + 1
          });
        } else {
          this.setState({
            isPaused: false,
            count2: this.state.count2 + 1
          });
        }
      }, 1000);
    }
  };
  render() {
    const { count1, count2, isPaused } = this.state;
    const { handlePause } = this;
    return (
      <div className="App">
        <div>Counter: {count1}</div>
        <div>Counter: {count2}</div>
        <button onClick={handlePause}>{isPaused ? "Play" : "Pause"}</button>
      </div>
    );
  }
}
