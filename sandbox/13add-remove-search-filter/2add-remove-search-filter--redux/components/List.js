import User from "./User.js";
import { connect } from "react-redux";

const List = ({users, search, filters}) => {
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
        <User key={user.id} user={user} />
      ))}
    </ul>
  )
}

// Свойствам React-компонента присваиваются значения данных из Redux-хранилища
const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  users: state.users.list,
  search: state.search,
  filters: state.filters
})

export { List };
export default connect(mapStateToProps, null)(List);