// ДЕЙСТВИЯ
// Типы действий
const actionTypes = {
  ADD: "ADD",
  REMOVE: "REMOVE"
}
// Создатели действий
const actions = {
  addColor: (value) => ({
    type: actionTypes.ADD,
    color: value
  }),
  removeColor: (value) => ({
    type: actionTypes.REMOVE,
    color: value
  })
}


// РЕДЬЮСЕР
const reducer = (state, action) => {
  if (state === undefined) state = [];

  switch (action.type) {
    case "ADD":    return state.concat(action.color);
    case "REMOVE": return state.filter(item => item !== action.color)
  }

  // Вернуть "state" в исходном виде (если тип действия не подошёл)
  return state;
}


// ФУНКЦИЯ ПОДПИСКИ
const log = () => {
  console.log( store.getState() )
}


// РАБОТА С ХРАНИЛИЩЕМ
// Создать хранилище (подставив редьюсер)
const store = Redux.createStore(reducer);

// Подписаться на изменения хранилища
store.subscribe(log)

// Выполнить действие
store.dispatch( actions.addColor("blue") );
store.dispatch( actions.addColor("yellow") );
store.dispatch( actions.addColor("green") );
store.dispatch( actions.removeColor("green") );