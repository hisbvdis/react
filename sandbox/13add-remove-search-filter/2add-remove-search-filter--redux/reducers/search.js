const actionTypes = {
  CHANGE_SEARCH: "CHANGE_SEARCH",
}

const actions = {
  changeSearch: (value) => ({
    type: actionTypes.CHANGE_SEARCH,
    value
  }),
}

const initialState = "";

const search = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SEARCH: {
      return action.value
    }
    default: {
      return state;
    }
  }
}

export { actions };
export default search;