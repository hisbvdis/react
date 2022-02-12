// =====================================================================
// ИСПОЛЬЗОВАНИЕ ХУКА  (ДЛЯ СОЗДАНИЯ СЕРВИСА В ВИДЕ ХУКА)
// =====================================================================
// 0. ИМПОРТИРОВАТЬ ХУК
import useHttp from "../hooks/http.hook.js";


const useJSONService = () => {
  // =============== 1. ПОЛУЧИТЬ ДОСТУП К ФУНКЦИОНАЛУ ХУКА ================
  const {request, loading, error} = useHttp();


  // ================== 2. ИСПОЛЬЗОВАТЬ ФУНКЦИОНАЛ ХУКА ===================
  // 2.1. Функция получения списка юзеров (с помощью функции "request" из хука)
  const getUserList = async () => {
    // Запрос выполняется с помощью функции "request" из хука
    return await request("https://jsonplaceholder.typicode.com/users");
  }

  // 2.2. Функция получения одного юзера (с помощью функции "request" из хука)
  const getUser = async () => {
    return await request("https://jsonplaceholder.typicode.com/users/1");
  }


  // ==================== 3. ВЕРНУТЬ ИНТЕРФЕЙС ХУКА =======================
  return {getUserList, getUser, loading, error};
}

export default useJSONService;