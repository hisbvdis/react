// ========================================================================
// Дочерний компонент
// ========================================================================

// 1. Импортировать зависимости
// 1.1. Хук работы с контекстом
import useDataContext from "../hooks/useDataContext.js";


// 2. Компонент
const Child = () => {
  // 2.1. Получить данные из контекста "DataContext"
  const { num, increase, decrease } = useDataContext();
  
  // 2.2. Использовать данные из контекста
  return (<>
    <button onClick={decrease}>-1</button>
    <button onClick={increase}>+1</button>
    <p>Число: {num}</p>
  </>)
}

export default Child;