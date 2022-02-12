import React from "react";
import { connect } from "react-redux";
import { actions } from "./reducer.js";

const App = ({sorting, users, changeSorting, addUser}) => (
<>
  {/* Перехватить отправку формы, чтобы вместо этого вызвать Redux-функцию
  ... добавления пользователя */}
  <form onSubmit={addUser}>
    <input type="text" name="userName" />
    <button type="submit">Добавить</button>
  </form>

  <div>
    <h3>Список пользователей</h3>
    {/* При нажатии на кнопку вызывать Redux-функцию, 
    ... меняющую режим сортировки */}
    <button type="button" onClick={changeSorting}>
      {sorting === "ASC" ? "По возрастанию" : "По убыванию"}
    </button>
    <ul>{
      // Менять сортировку в зависимости от режима сортировки в Redux-хранилище
      sorting === "ASC"
        ? [...users].sort().map((item, i) => <li key={i}>{item}</li>)
        : [...users].sort().reverse().map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  </div>
</>
)


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  sorting: state.sorting,
  users: state.users,
})

const mapDispatchToProps = (dispatch) => ({
  changeSorting: () => dispatch(actions.changeSorting()),
  addUser: (evt) => {
    evt.preventDefault();
    dispatch(actions.addUser(evt.target.elements.userName.value));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);