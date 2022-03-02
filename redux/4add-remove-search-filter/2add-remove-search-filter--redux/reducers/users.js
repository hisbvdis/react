const actionTypes = {
  ADD_USER: "ADD_USER",
  REMOVE_USER: "REMOVE_USER",
  CHANGE_USER: "CHANGE_USER",
}

const actions = {
  addUser: (name, salary) => ({
    type: actionTypes.ADD_USER,
    name,
    salary
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

const initialState = {
  list: [],
  nextId: 0,
}

const users = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER: {
      return {
        ...state,
        list: state.list.concat({
          id: state.nextId,
          name: action.name,
          salary: action.salary,
          promo: false,
          favorite: false
        }),
        nextId: state.nextId + 1
      }
    }
    case actionTypes.REMOVE_USER: {
      return {
        ...state,
        list: state.list.filter(user => user.id !== action.id)
      }
    }
    case actionTypes.CHANGE_USER: {
      return {
        ...state,
        list: state.list.map(user => {
          if (user.id === action.id) {
            return {
              ...user,
              [action.field]: action.value
            }
          }
          return user;
        })
      }
    }
    default: {
      return state;
    }
  }
}

export { actions };
export default users;