import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Admin from "./pages/Admin.js";
import Login from "./pages/Login.js";
import RequireAuth from "./hoc/RequireAuth.js";

const App = () => {
  return (<>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* Путь "/admin" обрабатывается HOC-компонентом, который проверяет авторизованность пользователя */}
        <Route path="/admin" element={<RequireAuth><Admin/></RequireAuth>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  </>)
}

export default App;