import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <div>
//     <h1>Hello World 1</h1>
//     <h2>byebye 1</h2>
//   </div>,
//   document.body
// );

// ReactDOM.render(
//   <div>
//     <h1>Hello World 2</h1>
//     <h2>byebye 2</h2>
//   </div>,
//   document.body
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
