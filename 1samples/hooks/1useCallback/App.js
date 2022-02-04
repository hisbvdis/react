import { useCallback, useState } from "react";
import Child from "./Child.js";

// РОДИТЕЛЬСКИЙ КОМПОНЕНТ
const App = () => {
  // 1. Состояние, при изменении которого компонент обновляется
  const [slide, setSlide] = useState(0);

  // 2. Так как функция "getData" создаётся в теле компонента, она будет
  // ..загружать данные при каждом обновлении компонента
  const getData_example = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data => {
        console.log( data );
        return data;
      })
  }

  // 3. Чтобы функция не создавалась каждый раз, она помещается в "useCallback",
  // ....который возвращает ссылку на мемоизированную функцию
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

    {/* 5. Кнопка, изменяющая состояние и вызывающая обновление компонента */}
    <button onClick={() => setSlide(slide + 1)}>+1</button>
    <span>{slide}</span>
  </>)
}

export default App;