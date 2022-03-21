import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 1. Импортировать зависимости
// 1.1. Функция создания хранилища "createStore"
import { createStore } from "redux";
// 1.2. Компонент "Provider" (даёт потомкам доступ к Redux-хранилищу)
import { Provider } from "react-redux";
// 1.3. Редьюсер
import counter from "./reducers/counter.js";


// 2. Создать хранилище
// 2.1. В аргумент передаётся редьюсер
const store = createStore(counter);


// 3. Поместить провайдер в рендеринг
ReactDOM.render(
    // 3.1. В свойство "store" передать созданное хранилище
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);