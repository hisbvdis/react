// =============================================================================
// Основной компонент
// =============================================================================

// 1. Импортировать зависимости
// 1.1. Дочерний компонент
import Child from './components/Child.js';
// 1.2. Провайдер контекста
import { DataContextProvider } from './contexts/DataContext.js';


// 2. Добавить в разметку провайдер контекста
const App = () => {
  return (
    <DataContextProvider>
      <Child />
    </DataContextProvider>
  )
}

export default App;