// Импортировать "компонент контекста"
import { NumberContext } from "./contexts/Number.context.js";
// Импортировать "дочерний компонент"
import Child from "./components/Child";

// Добавить компонент в дерево приложения
const App = () => {
  return (<>
    <NumberContext>
      <Child />
    </NumberContext>
  </>)
}

export default App;