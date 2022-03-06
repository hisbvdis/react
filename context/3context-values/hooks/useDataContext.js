// =============================================================================
// Хук работы с контекстом
// =============================================================================

// 1. Импортировать зависимости
// 1.1. Функция получения данных из контекста
import { useContext } from "react";
// 1.2. Контекст
import { DataContext } from "../contexts/DataContext.js";


// 2. Создать хук
const useDataContext = () => {
  // 2.1. Получить данные из контекста
  const context = useContext(DataContext);
  
  // 2.2. Вернуть полученные данные
  return context;
}

export default useDataContext;