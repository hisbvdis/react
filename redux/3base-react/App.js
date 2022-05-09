// 1. Импортировать зависимости
// 1.1. Действия из редьюсера
import { actions } from "./reducers/counter.js";
// 1.2. Функция подключения к Redux
import { connect } from "react-redux";


// 2. Компонент
const App = ({result, increase, decrease}) => (
  <form>
    <h2>Результат: {result}</h2>
    <button type="button" onClick={increase}>Увеличить на 1</button>
    <button type="button" onClick={decrease}>Уменьшить на 1</button>
  </form>
)


// 3. Сопоставить свойства
// 3.1. Свойствам React-компонента присваиваются значения из Redux-хранилища
const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  result:  state.result
})


// 4. Сопоставить функции
// 4.1. Свойствам React-компонента присваиваются функции из Redux-хранилища
const mapDispatchToProps = (dispatch) => ({
  increase:  (value) => dispatch(actions.increase(value)),
  decrease:  () => dispatch(actions.decrease()),
})


// 5. Экспорт
// 5.1. Именованный экспорт обычной версии компонента
export { App };
// 5.2. Экспорт по умолчанию версии компонента, соединённого с Redux
export default connect(mapStateToProps, mapDispatchToProps)(App);