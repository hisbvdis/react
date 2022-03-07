// =============================================================================
// Контекст и его провайдер
// =============================================================================

// 1. Импортировать зависимости
// 1.1. Функция создания контекста
import { createContext } from 'react';


// 2. Создать контекст
export const DataContext = createContext();


// 3. Компонент, возвращающий провайдер контекста
export const DataContextProvider = ({children}) => {
  return (
    // 3.1. В провайдер передаётся value (данные контекста)
    <DataContext.Provider value={{name: "Roma", age: 30}}>
      {children}
    </DataContext.Provider>
  )
}