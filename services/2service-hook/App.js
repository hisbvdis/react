// =====================================================================
// ИСПОЛЬЗОВАНИЕ ХУКА
// =====================================================================
import { useState, useEffect } from "react"
// 0. ИМПОРТИРОВАТЬ ХУК
import useJSONService from "./services/JSONService.js";

const App = () => {
  const [user, setUser] = useState({});

  // =============== 1. ПОЛУЧИТЬ ДОСТУП К ФУНКЦИОНАЛУ ХУКА ================
  const {getUser, loading} = useJSONService();


  // ================== 2. ИСПОЛЬЗОВАТЬ ФУНКЦИОНАЛ ХУКА ===================
  useEffect(async () => {
    // 2.1. Запрос данных с помощью функции из сервиса-хука
    const data = await getUser();
    setUser(data);
  }, [])
  
  return (<>
    <p>{
      // 2.2. Условный рендеринг с учётом переменной "Загрузка" из сервиса-хука
      loading ? "Загрузка" : user.name
    }</p>
  </>)
}

export default App;