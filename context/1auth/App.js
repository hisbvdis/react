// ========================================================================
// Основной компонент приложения
// ========================================================================

// 1. Импортировать хук для работы с контекстом
import { useAuth } from "./hooks/useAuth.js";

// 2. Компонент
const App = () => {
  // 2.1. Получить данные из контекста "AuthContext"
  const { isAuth, signIn, signOut } = useAuth();
  
  return (<>
      <button onClick={signIn}>Войти</button>
      <button onClick={signOut}>Выйти</button>
      <p>Пользователь {!isAuth && "НЕ"} авторизован</p>
  </>)
}

export default App;