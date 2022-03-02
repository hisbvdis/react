import { Link } from "react-router-dom";

const Home = () => {
  return (<>
    <h1>Главная страница</h1>
    <Link to="/admin">Админка</Link>
  </>)
}

export default Home;