import { useCallback, useState } from "react";
import Child from "./Child.js";

// РОДИТЕЛЬСКИЙ КОМПОНЕНТ
const App = () => {
  // 1. Состояние, при изменении которого весь компонент обновляется
  const [state, setState] = useState(0);

  // 2. Колбек-функция
  // 2.1. Так как функция "getData" создаётся в теле компонента, она будет, загружать данные при каждом обновлении компонента
  // 2.2. Чтобы функция не выполнялась каждый раз, она помещается в "useCallback", который возвращает ссылку на мемоизированную функцию
  const getData = useCallback(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data => {
        console.log( data );
        return data;
      })
  }, [])

  
  return (<>
    {/* 4. Мемоизированная функция будет вызываться из дочернего компонента  */}
    <Child getData={getData}/>

    {/* 5. Кнопка, изменяющая состояние, из-за чего обновляется компонент */}
    <button onClick={() => setState(state + 1)}>+1</button>
    <span>{state}</span>
  </>)
}

export default App;