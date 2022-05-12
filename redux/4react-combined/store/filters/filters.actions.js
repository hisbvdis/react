export const actionTypes = {
  CHANGE_FILTERS: "CHANGE_FILTERS",
}

export const actions = {
  changeFilters: ({name, isActive}) => ({
    type: actionTypes.CHANGE_FILTERS,
    name,
    isActive
  }),
}