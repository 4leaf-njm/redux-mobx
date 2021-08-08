import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const Hot = hot(App);

ReactDOM.render(
  <Provider store={store}>
    <Hot />
  </Provider>,
  document.querySelector("#root")
);
