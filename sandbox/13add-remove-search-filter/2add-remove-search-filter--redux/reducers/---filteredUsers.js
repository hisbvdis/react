const actionTypes = {
  FILTER_USERS: "FILTER_USERS",
}

const actions = {
  filterUsers: (userList, search, filters) => ({
    type: actionTypes.FILTER_USERS,
    userList,
    search,
    filters
  }),
}

const initialState = []

const filteredUsers = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.FILTER_USERS: {
      const {userList, search, filters} = action;
      const result = [];

      userList.forEach(user => {
        // 1. Если имя элемента не содержит текст из "Search", прервать
        if (user.name.toLowerCase().includes(search.toLowerCase()) === false) {
          return;
        }

        // 2. Если включён фильтр "На повышение", а у пользователя "false", прервать
        if (filters.promo === true && user.promo !== true) {
          return;
        }

        // 3. Если включён фильтр "З/п больше 1000$", а у пользователя "false", прервать
        if (filters.overk === true && user.salary <= 1000) {
          return;
        }

        // 4. Если включён фильтр "Избранное", а у пользователя "false", прервать
        if (filters.favorite === true && user.favorite !== true) {
          return;
        }

        // 5. Добавить в результирующий массив
        result.push(user);
      })

      return result;
    }
    default: {
      return state;
    }
  }
}

export { actions };
export default filteredUsers;