import React from 'react';
import ReactDOM from 'react-dom';
// Метод "createStore" — используется для создания хранилища Redux
import { createStore } from "redux";
// React-компонент "Provider" — верхний компонент, который даёт остальным
// ...компонентам доступ к хранилищу Redux
import { Provider } from "react-redux";
// Редьюсер
import reducer from "./reducer.js";
import App from './App';

// Создать хранилище (в аргумент передаётся редьюсер)
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    {/* Передать ссылку на Redux-хранилище через свойство "store" */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);