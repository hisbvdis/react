// =====================================================================
// СОЗДАНИЕ ХУКА
// =====================================================================
import { useState } from "react";

const useInputValidate = (initial) => {
  // ========================= 1. СОСТОЯНИЕ ХУКА ==========================
  // 1.1. Значение текстового поля (значение по умолчанию — брать из параметра хука)
  const [value, setValue] = useState(initial);

  // 1.2. Функция для изменения состояния
  const onChange = (evt) => {
    setValue(evt.target.value);
  }


  // ========================== 2. ФУНКЦИОНАЛ ХУКА ========================
  // 2.1. Функция валидации значения
  const isValid = (str) => !(/\d/.test(str));
  
  // 2.2. Переменная со стилями в зависимости от валидности
  const style = isValid(value) ? {} : {color: "red"}


  // ==================== 3. ВЕРНУТЬ ИНТЕРФЕЙС ХУКА =======================
  // 3.1. value — текущее значение состояния (для атрибута "value")
  // 3.2. onChange — функция изменения состояния (для атрибута "onChange")
  // 3.3. style — объект со стилями (для атрибута "style")
  return {value, onChange, style};
}

export default useInputValidate;