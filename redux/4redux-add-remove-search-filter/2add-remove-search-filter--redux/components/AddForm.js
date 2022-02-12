import { useState } from "react";
import { connect } from "react-redux";
import { actions as userActions } from "../reducers/users.js";

const AddForm = ({addUser}) => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  
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
        type="number"
        placeholder="Зарплата"
        value={salary}
        onChange={(evt) => setSalary(evt.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  )
}


// Свойствам React-компонента присваиваются функции, которые через "dispatch"
// .. выполняют "действия" с хранилищем Redux
const mapDispatchToProps = (dispatch) => ({
  addUser: (name, salary) => dispatch(userActions.addUser(name, salary))
})

export {AddForm};
export default connect(null, mapDispatchToProps)(AddForm);