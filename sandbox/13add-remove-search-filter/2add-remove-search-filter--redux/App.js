import { connect } from "react-redux";
import Search from "./components/Search.js";
import Filter from "./components/Filter.js";
import AddForm from "./components/AddForm.js";
import List from "./components/List.js";
import "./App.css";

const App = ({users}) => {
  return (<>
    <section>
      <h1>Пользователи</h1>
      <p>Общее количество: {users.length}</p>
      <p>Повышение получат: {users.filter(user => user.promo === true).length}</p>
    </section>

    <section>
      <h2>Фильтры</h2>
      <Search/>
      <Filter/>
    </section>

    <section>
      <h2>Добавить пользователя</h2>
      <AddForm/>
    </section>

    <section>
      <h2>Список пользователей</h2>
      <List/>
    </section>
  </>)
}

// Свойствам React-компонента присваиваются значения данных из Redux-хранилища
const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  users: state.users.list
})

export { App };
export default connect(mapStateToProps)(App);