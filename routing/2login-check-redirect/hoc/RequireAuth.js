import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({children}) => {
  const auth = false;
  const location = useLocation();

  // Если пользователь не авторизован, перевести его на страницу авторизации
  if (!auth) {
    return <Navigate to="/login" state={{from: location}}/>
  }
  
  // Если авторизован — показать дочерний компонент
  return (<>
    { children }
  </>)
}

export default RequireAuth;