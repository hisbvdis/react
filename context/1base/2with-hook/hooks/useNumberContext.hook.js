// Импортировать функцию получения данных из контекста
import { useContext } from "react";
// Импортировать "контекст"  (не компонент, а именно хранилище)
import { Number } from "../contexts/Number.context.js";

export const useNumberContext = () => {
  // Получить данные из контекста
  const data = useContext(Number);

  // Вернуть полученные данные
  return data;
}