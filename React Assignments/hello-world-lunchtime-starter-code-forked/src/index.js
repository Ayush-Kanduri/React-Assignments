// Setup up a React Code from Scratch
// to which displays "Breakfast Time" if
// the current time is before 12:00 in
// the morning, "Lunch Time" if the time is
// between 12:00 to 18:00, and "Dinner Time".

// if the current time is after 18:00.
// Sample Output at 15:00.
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
