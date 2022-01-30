import User from "./User.js";

const List = ({users=[], search, filters, removeUser, changeUser}) => {
  const result = [];

  users.forEach(user => {
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

  return (
    <ul>
      {result.map(user => (
        <User
          key={user.id}
          {...user}
          removeUser={id => removeUser(id)}
          changeUser={params => changeUser(params)}
        />
      ))}
    </ul>
  )
}

export default List;