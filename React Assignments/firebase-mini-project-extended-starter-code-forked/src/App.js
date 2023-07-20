import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [isPaused, setIsPaused] = useState(false);

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="App">
      <Counter isPaused={isPaused} counter="1" />
      <Counter isPaused={isPaused} counter="2" />
      <button onClick={handlePause}>{isPaused ? "Play" : "Pause"}</button>
    </div>
  );
}

function Counter({ isPaused, counter }) {
  const [count, setCount] = useState(0);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    if (isPaused) {
      setStopped(true);
    } else {
      setStopped(false);
    }

    const interval = setInterval(() => {
      if (!stopped) {
        if (counter === "1" && count >= 10) {
          setStopped(true);
          clearInterval(interval);
        } else {
          setCount((prevCount) => prevCount + 1);
        }
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, stopped, setStopped, setCount, count, counter]);

  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
}
