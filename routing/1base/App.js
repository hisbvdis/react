import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.js";
import { Home, About, Contact, NotFound } from "./pages";
import { Blog, AllArticles, Category, Article } from "./pages";

const App = () => {
  return (<>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="blog" element={<Blog/>}>
            <Route index element={<AllArticles/>}/>
            <Route path="category/:id" element={<Category/>}/>
            <Route path="article/:id" element={<Article/>}/>
          </Route>
          <Route path="contact" element={<Contact/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  </>)
}

export default App;