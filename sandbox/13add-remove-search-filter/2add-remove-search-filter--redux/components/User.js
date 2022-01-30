import { connect } from "react-redux";
import { actions as userActions } from "../reducers/users.js";

const User = ({user, changeUser, removeUser}) => {
  const {id, name, salary, promo, favorite} = user;

  return (
    <li>
      <span>{name}</span>
      <span>&nbsp;—&nbsp;</span>
      <span>{salary + "$"}</span>
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

const mapDispatchToProps = (dispatch) => ({
  changeUser: (data) => dispatch(userActions.changeUser(data)),
  removeUser: (id) => dispatch(userActions.removeUser(id)),
})

export { User };
export default connect(null, mapDispatchToProps)(User);