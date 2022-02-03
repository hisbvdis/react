import useInputWithValidate from "./useInputWithValidate.js";

// ИСПОЛЬЗОВАНИЕ ХУКА  (внутри компонета)
const App = () => {
  // Создать переменные с объектами хука
  const name = useInputWithValidate("");
  // Создать переменные с объектами хука
  const surname = useInputWithValidate("");

  return (<>
    <input
      type="text"
      name="name"
      // Значение из переменной хука
      value={name.value}
      // Функция изменения из переменной хука
      onChange={name.onChange}
      style={name.style} />

    <input
      type="text"
      name="surname"
      // Значение из переменной хука
      value={surname.value}
      // Функция изменения из переменной хука
      onChange={surname.onChange}
      style={surname.style} />
  </>)
}

export default App;