// =============================================================================
// ДОЧЕРНИЙ КОМПОНЕНТ
// =============================================================================
import { useEffect } from "react";

const Child = ({func}) => {
  // Благодаря "useEffect", функция вызывается, только если её код изменился
  useEffect(() => func(), [func])
  
  return (<></>)
}

export default Child;