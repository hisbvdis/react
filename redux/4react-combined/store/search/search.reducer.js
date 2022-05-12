import { actionTypes } from "./search.actions";

const initialState = "";

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SEARCH:
      return action.value
    
    default:
      return state;
  }
}