// Функция, которая соединяет с Redux
import { connect } from "react-redux";
// Объект с действиями (в виде методов объекта)
import { actions } from "./reducer.js";


// Свойства компонента — значения и функции Redux
const App = ({result, onIncrease, onDecrease}) => (
  <form>
    <h2>Результат: {result}</h2>
    <button type="button" onClick={onIncrease}>Увеличить на 1</button>
    <button type="button" onClick={onDecrease}>Уменьшить на 1</button>
  </form>
)


// Свойствам React-компонента присваиваются значения данных из Redux-хранилища
const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  result: state.result
})


// Свойствам React-компонента присваиваются функции, которые через "dispatch"
// .. выполняют "действия" с хранилищем Redux
const mapDispatchToProps = (dispatch) => ({
  onIncrease: (value) => dispatch(actions.increaseValue(value)),
  onDecrease: () => dispatch(actions.decreaseValue()),
})


// Экспорт обычной версии компонента (например, для тестирования)
export {App};
// Экспорт версии компонента, который был пропущен через "connect"
// .. (для импортов в index.js)
export default connect(mapStateToProps, mapDispatchToProps)(App);