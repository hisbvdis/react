import { useEffect, useState } from "react";

const App = () => {
  // 1. Состояние
  // 1.1. Массив пользователей
  const [users, setUsers] = useState([]);
  // 1.2. Переменная смещения
  const [offset, setOffset] = useState(0)
  
  // 2. Функция загрузки данных
  const loadData = (offset=0) => {
    // 2.1. В запрос передаётся переменная смещения
    fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=1&offset=${offset}&apikey=fa048bd5ea2cf04c794f49fdb2d0415a`)
      .then(response => response.json())
      // 2.2. После успешной загрузки:
      .then(data => {
        // ДОПОЛНИТЬ массив пользователей
        setUsers( users.concat(data.data.results) );
        // УВЕЛИЧИТЬ переменную смещения
        setOffset(offset + 1);
      })
  }
  
  // 3. Нажатие на кнопку вызывает функцию загрузки данных
  return (<>
    <h1>Список пользователей</h1>
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
    <button onClick={() => loadData(offset)}>Загрузить ещё</button>
  </>)
}

export default App;