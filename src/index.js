import React from "react";
import ReactDOM from "react-dom";

import GlobalStyle from "./globalStyles";

import "@elastic/eui/dist/eui_theme_light.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
