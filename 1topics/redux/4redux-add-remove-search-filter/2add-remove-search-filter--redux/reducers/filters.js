const actionTypes = {
  CHANGE_FILTERS: "CHANGE_FILTERS",
}

const actions = {
  changeFilters: ({name, value}) => ({
    type: actionTypes.CHANGE_FILTERS,
    name,
    value
  }),
}

const initialState = {}

const filters = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_FILTERS: {
      return {
        ...state,
        [action.name]: action.value
      }
    }
    default: {
      return state;
    }
  }
}

export { actions };
export default filters;