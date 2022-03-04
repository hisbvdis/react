import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 1. Импортировать компонент-провайдер контекста
import { AuthProvider } from "./hoc/AuthContext.js";

// 2. Добавить компонент-провайдер контекста самым верхним
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);