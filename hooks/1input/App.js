// =====================================================================
// ИСПОЛЬЗОВАНИЕ ХУКА
// =====================================================================
// 0. ИМПОРТИРОВАТЬ ХУК
import useInputWithValidate from "./hooks/useInputWithValidate.js";

const App = () => {
  // =============== 1. ПОЛУЧИТЬ ДОСТУП К ФУНКЦИОНАЛУ ХУКА ================
  const name = useInputWithValidate("");
  const surname = useInputWithValidate("");


  // ================== 2. ИСПОЛЬЗОВАТЬ ФУНКЦИОНАЛ ХУКА ===================
  return (<>
    <input
      type="text"
      name="name"
      // Значение из переменной хука
      value={name.value}
      // Функция изменения значения из переменной хука
      onChange={name.onChange}
      // Объект со стилями из переменной хука
      style={name.style} />

    <input
      type="text"
      name="surname"
      // Значение из переменной хука
      value={surname.value}
      // Функция изменения значения из переменной хука
      onChange={surname.onChange}
      // Объект со стилями из переменной хука
      style={surname.style} />
  </>)
}

export default App;