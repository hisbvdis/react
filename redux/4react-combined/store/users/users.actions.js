export const actionTypes = {
  ADD_USER: "ADD_USER",
  REMOVE_USER: "REMOVE_USER",
  CHANGE_USER: "CHANGE_USER",
}

export const actions = {
  addUser: (name) => ({
    type: actionTypes.ADD_USER,
    name,
  }),
  removeUser: (id) => ({
    type: actionTypes.REMOVE_USER,
    id
  }),
  changeUser: ({id, field, value}) => ({
    type: actionTypes.CHANGE_USER,
    id,
    field,
    value
  }),
}