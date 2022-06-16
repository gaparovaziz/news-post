import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ArticlesFull() {
  const { id } = useParams()
  const [article, setArticle] = useState(null)

  useEffect(() => {
    axios.get(`https://news-block-d07d3-default-rtdb.firebaseio.com/articles/${id}.json`)
      .then(({data}) => setArticle(data))
  }, [id])

  console.log(article);

  let output = <h1>Loading...</h1>
  if (article !==null) {
    output = (
      <>
        <h2>{article.name} {article.lastName}</h2>
        <h3>Status: {article.status}</h3>

        <Link to={`/update/${id}`}><button>Ubdate</button></Link>
        <Link to={`/delete/${id}`}><button>Delete</button></Link>
      </>
    )
  }
  return ( 
    <div>
      {output}
    </div>
   );
}

export default ArticlesFull;