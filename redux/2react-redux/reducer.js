// =============================================================================
// ДЕЙСТВИЯ
// =============================================================================
// Типы действий
const actionTypes = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
}

// Создатели действий
const actions = {
  increaseValue: () => ({
    type: actionTypes.INCREASE
  }),
  decreaseValue: () => ({
    type: actionTypes.DECREASE
  })
}


// =============================================================================
// НАЧАЛЬНОЕ СОСТОЯНИЕ
// =============================================================================
const initialState = {
  result: 0
}


// =============================================================================
// РЕДЬЮСЕР
// =============================================================================
const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREASE: {
      return { result: state.result + 1 }
    }
    case actionTypes.decreaseValue: {
      return { result: state.result - 1 }
    }
    default: {
      return state;      // По умолчанию вернуть "state" в исходном виде
    }
  }

}


export {actions};
export default reducer;