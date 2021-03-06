import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
console.log(store);
// оборачиваем отрисовку всего апп в провайдер, чтобы все компоненты имели доступ г клобальному стору
// в компонент provider нам необходимо передать сам store
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
