import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ArticlesList() {
  const [articles, setArticles] = useState(null)

  useEffect(() => {
    axios.get('https://news-block-d07d3-default-rtdb.firebaseio.com/articles.json')
      .then(({ data }) => {
        const newItems = Object.keys(data).map(id => {
          return ({id, ...data[id]})
        })
        setArticles(newItems)
      })
  }, [])

  let output = <h1>Loading...</h1>
  if (articles !== null) {
    output = articles.map(article => {
      return (
        <li key={article.id}>
          <Link to={'/' + article.id}>{article.name} {article.lastName}</Link>
        </li>
      )
    })
  }
  return ( 
    <div>
      <h2>Clients:</h2>
      <ul>
        {output}
    </ul>
    </div>
   );
}

export default ArticlesList;