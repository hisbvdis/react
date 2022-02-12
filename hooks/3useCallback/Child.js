import { useEffect } from "react";

// ДОЧЕРНИЙ КОМПОНЕНТ
const Child = ({getData}) => {
  useEffect(
    // 1. Вызов полученной через свойство мемоизированной функции
    () => getData(), 
    // 2. Перезапускать хук только, если полученная функция отличается
    [getData]
  )
  
  return (<>
    <p></p>
  </>)
}

export default Child;