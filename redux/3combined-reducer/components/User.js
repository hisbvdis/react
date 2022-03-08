// 1. Импортировать зависимости
// 1.1. Действия из редьюсера  (с добавлением к названию редьюсера)
import { actions as userActions } from "../reducers/users.js";
// 1.2. Функция подключения к Redux
import { connect } from "react-redux";


// 2. Компонент
const User = ({user, changeUser, removeUser}) => {
  const {id, name, promo, favorite} = user;

  return (
    <li>
      <span>{name}</span>
      <span>&nbsp;</span>
      <label>
        <input
          type="checkbox"
          checked={promo}
          onChange={(evt) => changeUser({
            id: id,
            field: "promo",
            value: evt.target.checked
          })}
        />
        <span>Повысить</span>
      </label>
      <button onClick={() => removeUser(id)}>Удалить</button>
      <label>
        <input
          type="checkbox"
          checked={favorite}
          onChange={(evt) => changeUser({
            id: id,
            field: "favorite",
            value: evt.target.checked
          })}
        />
        <span>В избранное</span>
      </label>
    </li>
  )
}


// 3. Сопоставить свойства
// 3.1. Свойствам React-компонента присваиваются значения из Redux-хранилища
const mapDispatchToProps = (dispatch) => ({
  changeUser:  (data) => dispatch(userActions.changeUser(data)),
  removeUser:  (id) => dispatch(userActions.removeUser(id)),
})


// 5. Экспорт
// 5.1. Именованный экспорт обычной версии компонента
export { User };
// 5.2. Экспорт по умолчанию версии компонента, соединённого с Redux
export default connect(null, mapDispatchToProps)(User);