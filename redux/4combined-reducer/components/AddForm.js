// 1. Импортировать зависимости
// 1.1. Действия с изменённым именем (указывается название редьюсера)
import { actions as userActions } from "../reducers/users.js";
// 1.2. Функция подклю
import { connect } from "react-redux";


// 2. Компонент
const AddForm = ({addUser}) => {
  return (<>
    <form onSubmit={(evt) => {
      evt.preventDefault();
      addUser(evt.target.name.value);
    }}>
      <input
        type="text"
        name="name"
        placeholder="Имя"
      />
      <button type="submit">Добавить</button>
    </form>
  </>)
}


// 4. Сопоставить функции
// 4.1. Свойствам React-компонента присваиваются функции из Redux-хранилища
const mapDispatchToProps = (dispatch) => ({
  addUser: (name, salary) => dispatch(userActions.addUser(name, salary))
})


// 5. Экспорт
// 5.1. Именованный экспорт обычной версии компонента
export { AddForm };
// 5.2. Экспорт по умолчанию версии компонента, соединённого с Redux
export default connect(null, mapDispatchToProps)(AddForm);