import React from "react";
import ReactDom from "react-dom";
import { App } from "./routes/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { initalState } from "../initialStateRedux.json";
import reducer from "./reducers";

const store = createStore(reducer, initalState);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("app")
);
