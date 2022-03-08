// 1.Действия
// 1.1. Добавить типы действий
const actionTypes = {
  CHANGE_SEARCH: "CHANGE_SEARCH",
}

// 1.2. Добавить действия
const actions = {
  changeSearch: (value) => ({
    type: actionTypes.CHANGE_SEARCH,
    value
  }),
}


// 2. Начальное состояние
// 2.1. Задать начальное состояние
const initialState = "";


// 3. Редьюсер
// 3.1. Создать редьюсер
const search = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SEARCH:
      return action.value
    
    default:
      return state;
  }
}


// 4. Экспорт
// 4.1. Именованный экспорт действий
export { actions };
// 4.2. Экспорт по умолчанию редьюсера
export default search;