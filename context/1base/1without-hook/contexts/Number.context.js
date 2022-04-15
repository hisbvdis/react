import { createContext } from "react";
import { useState } from "react";

// Создать контекст (хранилище)
export const Number = createContext();

export const NumberContext = ({ children }) => {
  // Состояние контекста  (если нужно, задать начальные данные)
  const [number, setNumber] = useState(0);

  // Функции изменения состояния
  const increase = () => setNumber(prev => prev + 1);
  const decrease = () => setNumber(prev => prev - 1);

  // Интерфейс управления контекстом
  const value = { number, increase, decrease };

  // Вернуть провайдер контекста (в атрибут "value" передать интерфейс)
  return (
    <Number.Provider value={value}>
      {children}
    </Number.Provider>
  )
}