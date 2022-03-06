import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 1. Импортировать функцию создания контекста
import { createContext } from 'react';


// 2. Создать контекст (для экспорта)
export const AuthContext = createContext();


// 3. Добавить в разметку компонент-провайдер данного контекста
ReactDOM.render(
  // 3.1. value — данные контекста
  <AuthContext.Provider value={{isAuth: false}}>
    <App />
  </AuthContext.Provider>,
  document.getElementById('root')
);