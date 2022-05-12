import { actionTypes } from "./users.actions";

const initialState = {
  list: [],
  nextId: 0,
}

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return {
        ...state,
        list: state.list.concat({
          id: state.nextId,
          name: action.name,
          promo: false,
          favorite: false
        }),
        nextId: state.nextId + 1
      }

    case actionTypes.REMOVE_USER:
      return {
        ...state,
        list: state.list.filter(user => user.id !== action.id)
      }
    
    case actionTypes.CHANGE_USER:
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
    
    default:
      return state;
  }
}