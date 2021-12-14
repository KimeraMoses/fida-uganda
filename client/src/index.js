import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureAppStore from "./store/configStore";
import App from "./App";
import "./index.css";

const store = configureAppStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
