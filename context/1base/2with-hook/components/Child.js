// Импортировать хук
import { useNumberContext } from "../hooks/useNumberContext.hook.js";

const Child = () => {
  // Получить данные из контекста
  const { number, increase, decrease} = useNumberContext();

  return (<>
    <h1>{number}</h1>
    <button onClick={decrease}>-1</button>
    <button onClick={increase}>+1</button>
  </>)
}

export default Child;