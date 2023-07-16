import React from "react";

function TimeOfDay() {
  let time = new Date().getHours();
  time = 15;

  let message;
  let textColor;
  let backgroundColor;

  if (time < 12) {
    message = "Breakfast Time!";
    textColor = "black";
    backgroundColor = "yellow";
  } else if (time >= 12 && time < 18) {
    message = "Lunch Time!";
    textColor = "blue";
    backgroundColor = "pink";
  } else {
    message = "Dinner Time!";
    textColor = "red";
    backgroundColor = "black";
  }

  const style = {
    color: textColor,
    backgroundColor: backgroundColor
  };

  return (
    <div style={style}>
      <h1>{message}</h1>
    </div>
  );
}

export default TimeOfDay;
