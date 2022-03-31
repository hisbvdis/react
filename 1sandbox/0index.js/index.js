// 1. Импортировать зависимости
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 2. Найти DOM-элемент, который будет главным
const container = document.getElementById('root');
// 3. Создать корневой элемент
const root = ReactDOM.createRoot(container);

// 4. В корневом элементе рендерить содержимое
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);