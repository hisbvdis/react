import { useState } from "react";

// СОЗДАНИЕ ХУКА
const useInputWithValidate = (initial) => {
  // Собственное состояние (начальное значение — из параметра)
  const [value, setValue] = useState(initial);

  // Функция для изменения состояния (вызова функции записи состояния)
  const onChange = (evt) => {
    setValue(evt.target.value);
  }

  // Функцию валидации значения
  const isValid = (str) => !(/\d/.test(str));

  // Переменная с объектом стилей в зависимости от валидности
  const style = isValid(value) ? {} : {color: "red"}

  // Вернуть объект со значениями:
  // - текущее значение состояния
  // - функция изменения значения
  // - функция валидации
  // - объект со стилями
  return {value, onChange, isValid, style};
}

export default useInputWithValidate;