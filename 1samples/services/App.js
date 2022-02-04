import { useEffect, useState } from "react";
import { getUserList, getUser
 } from "./services/MarvelService.js";

const App = () => {
  // Состояние для списка пользователей
  const [userList, setUserList] = useState([]);
  // После первого рендеринга запустить функцию загрузки списка пользователей
  useEffect(() => loadUserList(), []);
  // Функция загрузки списка пользователей и обновления состояния
  const loadUserList = () => getUserList().then(data => setUserList(data));

  // Состояние для отдельного пользователя
  const [user, setUser] = useState([]);
  // Функция загрузки отдельного пользователя и обновления состояния
  const loadUser = (id) => getUser(id).then(data => setUser(data));

  return (<>
    <ul>
      {userList.map(item => (
        <li key={item.id}>
          <button onClick={() => loadUser(item.id)}>{item.name}</button>
        </li>
      ))}
    </ul>

    <section>
      <h1>{user.name}</h1>
      <img src={user.imgSrc} width="300" height="200"/>
    </section>
  </>)
}

export default App;