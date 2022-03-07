// ========================================================================
// Основной компонент приложения
// ========================================================================

// 1. Импортировать зависимости
// 1.1. Компонент-провайдер контекста
import { DataContextProvider } from "./contexts/DataContext.js";
// 1.2. Дочерний компонент
import Child from "./components/Child.js";


// 2. Добавить самым верхним компонент-провайдер контекста "DataContextProvider"
const App = () => {
  return (<>
    <DataContextProvider>
      <Child/>
    </DataContextProvider>
  </>)
}

export default App;