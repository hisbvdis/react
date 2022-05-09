// 1. Импортировать зависимости
// 1.1. Действия из редьюсера  (с добавлением к названию редьюсера)
import { actions as searchActions } from "../reducers/search.js";
// 1.2. Функция подключения к Redux
import { connect } from "react-redux";


// 2. Компонент
const Search = ({search, changeSearch}) => {
  return (
    <input
      type="text"
      placeholder="Поиск по имени"
      value={search}
      onChange={(evt) => changeSearch(evt.target.value)}
    />
  )
}


// 3. Сопоставить свойства
// 3.1. Свойствам React-компонента присваиваются значения из Redux-хранилища
const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  search:  state.search
})


// 4. Сопоставить функции
// 4.1. Свойствам React-компонента присваиваются функции из Redux-хранилища
const mapDispatchToProps = (dispatch) => ({
  changeSearch:  (value) => dispatch(searchActions.changeSearch(value))
})


// 5. Экспорт
// 5.1. Именованный экспорт обычной версии компонента
export { Search };
// 5.2. Экспорт по умолчанию версии компонента, соединённого с Redux
export default connect(mapStateToProps, mapDispatchToProps)(Search);