import { useState } from "react";

const AddForm = ({addUser}) => {
  const [name, setName] = useState("Test");
  const [salary, setSalary] = useState(0);
  
  return (
    <form onSubmit={(evt) => {
      evt.preventDefault();
      addUser(name, salary);
    }}>
      <input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(evt) => setName(evt.target.value)}
      />
      <input
        type="text"
        placeholder="Зарплата"
        value={salary}
        onChange={(evt) => setSalary(evt.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  )
}

export default AddForm;