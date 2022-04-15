// Импортировать функцию получения данных из контекста
import { useContext } from "react";
// Импортировать "контекст"  (хранилище, а не компонент)
import { Number } from "../contexts/Number.context.js";


const Child = () => {
  // Получить данные из контекста
  const { number, increase, decrease} = useContext(Number);

  return (<>
    <h1>{number}</h1>
    <button onClick={decrease}>-1</button>
    <button onClick={increase}>+1</button>
  </>)
}

export default Child;