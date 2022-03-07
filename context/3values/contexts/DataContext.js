// ========================================================================
// Контекст и его провайдер
// ========================================================================

// 1. Импортировать зависимости
// 1.1. Функция создания контекста
import { createContext } from "react";
// 1.2. Хук состояния
import { useState } from "react";


// 2. Создать контекст
export const DataContext = createContext();


// 3. Компонент, который работает с данными контекста и возвращает его провайдер
export const DataContextProvider = ({children}) => {
  // 3.1. Состояние контекста
  const [num, setNum] = useState(0);

  // 3.2. Функции для изменения состояния контекста
  const increase = () => setNum(num + 1);
  const decrease = () => setNum(num - 1);

  // 3.3. Сформировать данные контекста (для передачи потомкам)
  // - num: число
  // - increase/decrease: функции для изменения значения
  const value = { num, increase, decrease };
  
  return(
    // 3.4. В компонент-провайдер передаётся value (данные контекста)
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}