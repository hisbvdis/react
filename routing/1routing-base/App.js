import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";

const App = () => {
  return (<>
    <Router>
      {/* Навигация — общая для всех страниц верстка */}
      <nav>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="about">О нас</NavLink>
        <NavLink to="contact">Контакты</NavLink>
      </nav>
      
      <div className="content">
        {/* Маршрутизация */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Routes>
      </div>
      
    </Router>
  </>)
}

export default App;