import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ArticleList() {

	const [articles, setArticles] = useState(null)
    
    useEffect(() => {
        axios
            .get('https://news-post-c6720-default-rtdb.firebaseio.com/articles.json')
            .then(({ data }) => {
                const newArticle = Object.keys(data).map(id => {
                    return {id: id, ...data[id]}
                })
                setArticles(newArticle)
            })
    }, [])
    

    let output = <h1>Loading...</h1>
    if (articles !== null) {
        output = articles.map((articles) => (
            <li key={articles.id}>
                <Link to={'/' + articles.id}>{articles.title}</Link>
            </li>
        ))
    }
		
  return ( 
      <div>
          <h1>Articles:</h1>
					<ul>
						{output}
					</ul>
      </div>
   );
}

export default ArticleList;