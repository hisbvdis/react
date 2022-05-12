import { actionTypes } from "./filters.actions";

const initialState = {}

export const reducer = (state=initialState, action) => {
  console.log( state )
  switch (action.type) {
    case actionTypes.CHANGE_FILTERS:
      return {
        ...state,
        [action.name]: action.isActive
      }
    
    default:
      return state;
  }
}