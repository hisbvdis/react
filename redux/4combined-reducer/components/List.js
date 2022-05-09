// 1. Импортировать зависимости
// 1.1. Компонент
import User from "./User.js";
// 1.2. Функция подключения к Redux
import { connect } from "react-redux";


// 2. Компонент
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

    // 3. Если включён фильтр "Избранное", а у пользователя "false", прервать
    if (filters.favorite === true && user.favorite !== true) {
      return;
    }

    // 4. Добавить в результирующий массив
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


// 3. Сопоставить свойства
// 3.1. Свойствам React-компонента присваиваются значения из Redux-хранилища
const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  users:   state.users.list,
  search:  state.search,
  filters: state.filters
})



// 5. Экспорт
// 5.1. Именованный экспорт обычной версии компонента
export { List };
// 5.2. Экспорт по умолчанию версии компонента, соединённого с Redux
export default connect(mapStateToProps, null)(List);