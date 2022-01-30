import { connect } from "react-redux"
import { actions as filterActions } from "../reducers/filters.js";

const Filter = ({filters, changeFilters}) => {
  const filterElems = [
    {id: 1, name: "promo",            label: "На повышение"},
    {id: 2, name: "З/п больше 1000$", label: "З/п больше 1000$"},
    {id: 3, name: "favorite",         label: "Избранное"},
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

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  filters: state.filters,
})

const mapDispatchToProps = (dispatch) => ({
  changeFilters: (name, value) => dispatch(filterActions.changeFilters(name, value))
})

export {Filter};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);