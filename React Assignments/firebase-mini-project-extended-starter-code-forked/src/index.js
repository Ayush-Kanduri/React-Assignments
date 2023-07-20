import { StrictMode } from "react";
import ReactDOM from "react-dom";
import ClassApp from "./ClassApp";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <App /> */}
    <ClassApp />
  </StrictMode>,
  rootElement
);
