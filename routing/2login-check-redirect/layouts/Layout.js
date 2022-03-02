// 1. Импортировать зависимости
// 1.1. Компонент для отображения содержимого дочернего маршрута
import { Outlet } from "react-router-dom";

// 2. Создать компонент
const Main = () => {
  return (<>
    <header>
      <button>Войти</button>
    </header>
    <main>
      <Outlet/>
    </main>
  </>)
}

export default Main;