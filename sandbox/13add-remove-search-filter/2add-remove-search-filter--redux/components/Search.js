import { connect } from "react-redux";
import { actions as searchActions } from "../reducers/search.js";

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

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  search: state.search
})

const mapDispatchToProps = (dispatch) => ({
  changeSearch: (value) => dispatch(searchActions.changeSearch(value))
})

export {Search};
export default connect(mapStateToProps, mapDispatchToProps)(Search);