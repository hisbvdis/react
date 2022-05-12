export const actionTypes = {
  CHANGE_SEARCH: "CHANGE_SEARCH",
}

export const actions = {
  changeSearch: (value) => ({
    type: actionTypes.CHANGE_SEARCH,
    value
  }),
}