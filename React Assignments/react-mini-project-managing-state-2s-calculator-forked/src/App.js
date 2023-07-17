import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);

  const styling = {
    margin: "0%",
    padding: "0%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  };

  function handleAdd2() {
    setValue(value + 2);
  }

  function handleSquare() {
    setValue(value * value);
  }

  function handleDouble() {
    setValue(value * 2);
  }

  function handleDivideBy2() {
    setValue(value / 2);
  }

  function handleSubtract2() {
    setValue(value - 2);
  }

  return (
    <div style={styling}>
      <p style={{ fontSize: "2rem" }}>
        <strong>{value}</strong>
      </p>
      <div style={{}}>
        <button onClick={handleAdd2}>Add2!</button>
        &emsp;
        <button onClick={handleSquare}>Square!</button>
        &emsp;
        <button onClick={handleDouble}>Double!</button>
        &emsp;
        <button onClick={handleDivideBy2}>Divideby2!</button>
        &emsp;
        <button onClick={handleSubtract2}>Subtract2!</button>
      </div>
    </div>
  );
}
