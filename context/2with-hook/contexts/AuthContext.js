// ========================================================================
// Компонент, создающий контекст и его компонент-провайдер
// ========================================================================

// 1. Импортировать зависимости
// 1.1. Функция создания контекста
import { createContext } from "react";
// 1.2. Хук состояния
import { useState } from "react";


// 2. Создать контекст
export const AuthContext = createContext(null);


// 3. Компонент, который работает с данными контекста и возвращает его провайдер
export const AuthProvider = ({children}) => {
  // 3.1. Состояние для хранения "Статуса авторизованности"
  const [isAuth, setAuth] = useState(false);

  // 3.2. Функции для изменения "Статуса авторизованности"
  const signIn = () => setAuth(true);
  const signOut = () => setAuth(false);

  // 3.3. Сформировать данные контекста (для передачи потомкам)
  // - auth: статус авторизованности
  // - signIn/signOut: функции для изменения статуса авторизованности
  const value = { isAuth, signIn, signOut };
  
  return(
    // 3.4. В компонент-провайдер передаётся value (данные контекста)
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}