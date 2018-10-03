import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App";

const wrap = (
  <HashRouter>
    <App />
  </HashRouter>
);

ReactDOM.render(wrap, document.getElementById("root"));
