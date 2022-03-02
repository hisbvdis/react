import { useParams } from "react-router-dom";
import { articles } from "../../data/data.js";
import NotFound from "../NotFound.js";

const Article = () => {
  const {id} = useParams();
  const article = articles.find(article => article.id === Number(id));
  if (article === undefined) {
    return <NotFound/>
  }
  
  return (<>
    <h1>{article.title}</h1>
    <p>{article.content}</p>
  </>)
}

export default Article;