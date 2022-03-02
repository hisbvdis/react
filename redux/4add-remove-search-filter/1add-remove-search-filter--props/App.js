import { useState } from "react";
import Search from "./components/Search.js";
import Filter from "./components/Filter.js";
import AddForm from "./components/AddForm.js";
import List from "./components/List.js";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState({list: [],nextId: 0});
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({});
  
  const addUser = (name, salary) => {
    setUsers({
      list: users.list.concat({
        id: users.nextId,
        name,
        salary,
        promo: false,
        favorite: false
      }),
      nextId: users.nextId + 1
    })
  }

  const removeUser = (id) => {
    setUsers({
      list: users.list.filter(item => item.id !== id),
      nextId: users.nextId
    })
  }

  const changeUser = ({id, field, value}) => {
    setUsers({
      list: users.list.map(user => {
        if (user.id === id) {
          return {
            ...user,
            [field]: value
          }
        }
        return user;
      }),
      nextId: users.nextId
    })
  }

  const changeFilters = ({name, value}) => {
    setFilters({
      ...filters,
      [name]: value
    })
  }
  
  return (<>
    <section>
      <h1>Пользователи</h1>
      <p>Общее количество: {users.list.length}</p>
      <p>Повышение получат: {users.list.filter(user => user.promo).length}</p>
    </section>

    <section>
      <h2>Фильтры</h2>
      <Search setSearch={(value) => setSearch(value)}/>
      <Filter changeFilters={changeFilters}/>
    </section>

    <section>
      <h2>Добавить пользователя</h2>
      <AddForm addUser={addUser}/>
    </section>

    <section>
      <h2>Список пользователей</h2>
      <List
        users={users.list}
        search={search}
        filters={filters}
        removeUser={removeUser}
        changeUser={changeUser}
      />
    </section>
  </>)
}

export default App;