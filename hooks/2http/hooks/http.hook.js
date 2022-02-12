// =====================================================================
// СОЗДАНИЕ ХУКА
// =====================================================================
import { useCallback, useState } from "react"

const useHttp = () => {
  // =========================== 1. СОСТОЯНИЕ ХУКА ========================
  // 1.1. Статус "Выполняется загрузка"
  const [loading, setLoading] = useState(false);
  // 1.2. Статус "Есть ошибка"
  const [error, setError] = useState(false);


  // ======================== 2. ФУНКЦИОНАЛ ХУКА ==========================
  // 2.1. Функция, которая выполняет запрос
  // — чтобы не делать лишние запросы, функция мемоизируется (useCallback)
  // — функция асинхронная, так как нужно будет ждать ответы fetch-запросов
  const request = useCallback(async (url, method="GET", body=null, headers={"Content-Type": "application/json"}) => {
    // Перед началом запроса установить статус загрузки в "true"
    setLoading(true);
    // Обработать ошибки в случае неудачного запроса
    try {
      const response = await fetch(url, {method, body, headers});
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }
      const data = await response.json();
      // Если данные успешно загрузились, установить статус загрузки в "false"
      setLoading(false);
      return data;
    }
    catch (err) {
      // Если при загрузке возникла ошибка
      // - установить статус загрузки в "false"
      setLoading(false);
      // - установить статус ошибки в "true"
      setError(err.message);
      // - прекратить выполенние кода, выбросив ошибку, полученную через параметр
      throw err;
    }
  }, [])

  // 2.2. Функция, которая отменяет статус наличия ошибки
  const clearError = useCallback(() => {
    setError(false);
  }, [])


  // ====================== 3. ВЕРНУТЬ ИНТЕРФЕЙС ХУКА =====================
  // 3.1. request — функция выполнения запроса
  // 3.2. loading — текущий статус загрузки
  // 3.3. error — текущий статус ошибки
  // 3.4. clearError — функция сброса статуса ошибки
  return {request, loading, error, clearError};
}

export default useHttp;