// =====================================================================
// ИСПОЛЬЗОВАНИЕ ХУКА
// =====================================================================
// 0. ИМПОРТИРОВАТЬ ХУК
import { useState, useEffect } from "react";
import useHttp from "./hooks/useHttp.js";

const App = () => {
  const [user, setUser] = useState({});

  // =============== 1. ПОЛУЧИТЬ ДОСТУП К ФУНКЦИОНАЛУ ХУКА ================
  const {request, loading, error, clearError} = useHttp();


  // ================== 2. ИСПОЛЬЗОВАТЬ ФУНКЦИОНАЛ ХУКА ===================
  useEffect(async () => {
    // 2.1. Запрос с помощью функции "request" из хука
    const data = await request("https://jsonplaceholder.typicode.com/users/1");
    setUser(data);
  }, [])
  
  return (<>
    <p>{
      // 2.2. Условный рендеринг с учётом переменной "Загрузка" из хука
      loading ? "Загрузка" : user.name
    }</p>
  </>)
}

export default App;