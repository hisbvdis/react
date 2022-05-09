// 1. Импортировать зависимости
// 1.1. Действия из редьюсера  (с добавлением к названию редьюсера)
import { actions as filtersActions } from "../reducers/filters.js";
// 1.2. Функция подключения к Redux
import { connect } from "react-redux"


// 2. Компонент
const Filters = ({filters, changeFilters}) => {
  const filterElems = [
    {id: 1, name: "promo",    label: "На повышение"},
    {id: 2, name: "favorite", label: "Избранное"},
  ]
  
  return (<>
    {filterElems.map(({id, name, label}) => (
      <label key={id}>
        <input
          type="checkbox"
          name={name}
          value={filters[name]}
          onChange={(evt) => changeFilters({
            name: evt.target.name,
            value: evt.target.checked
          })}
        />
        <span>{label}</span>
      </label>
    ))}
  </>)
}


// 3. Сопоставить свойства
// 3.1. Свойствам React-компонента присваиваются значения из Redux-хранилища
const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  filters:  state.filters,
})


// 4. Сопоставить функции
// 4.1. Свойствам React-компонента присваиваются функции из Redux-хранилища
const mapDispatchToProps = (dispatch) => ({
  changeFilters:  (name, value) => dispatch(filtersActions.changeFilters(name, value))
})


// 5. Экспорт
// 5.1. Именованный экспорт обычной версии компонента
export { Filters };
// 5.2. Экспорт по умолчанию версии компонента, соединённого с Redux
export default connect(mapStateToProps, mapDispatchToProps)(Filters);