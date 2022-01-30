// ДЕЙСТВИЯ
// Типы дейсвтий
const actionTypes = {
  ADD_USER: "ADD_USER",
  CHANGE_SORTING: "CHANGE_SORTING",
}
// Создатели действий
const actions = {
  addUser: (name) => ({
    type: actionTypes.ADD_USER,
    name: name,
  }),
  changeSorting: () => ({
    type: actionTypes.CHANGE_SORTING,
  }),
}


// НАЧАЛЬНОЕ СОСТОЯНИЕ
const initialState = {
  users: ["Рома", "Алла", "Яна", "Вася"],
  sorting: "ASC",
}


// РЕДЬЮСЕР
const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SORTING: {
      return Object.assign({}, state, {
        sorting: state.sorting === "ASC" ? "DESC" : "ASC"
      })
    }
    case actionTypes.ADD_USER: {
      return Object.assign({}, state, {
        users: state.users.concat(action.name)
      })
    }
    default: {
      return state;      // По умолчанию вернуть "state" в исходном виде
    }
  }
}


export { actions };
export default reducer;