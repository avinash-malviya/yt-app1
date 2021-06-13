import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router } from "react-router-dom";

import "./_base.scss";

import "react-lazy-load-image-component/src/effects/blur.css";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
