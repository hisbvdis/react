import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 1. Импортировать компонент-провайдер контекста
import { AuthProvider } from "./hoc/AuthContext.js";

// 2. Добавить самым верхним компонент-провайдер контекста "AuthProvider"
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);