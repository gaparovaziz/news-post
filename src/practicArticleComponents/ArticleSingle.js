import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ArticleSingle() {
	const {id} = useParams()
	const [article, setArticle] = useState(null)

	useEffect(() => {
		axios.get(`https://news-post-c6720-default-rtdb.firebaseio.com/articles/${id}.json`)
			.then(({ data }) => setArticle(data))
			
	}, [id])
	
	let output = <h1>Loading...</h1>
	if (article !== null) {
		output = (
			<>
				<h1>{article.title}</h1>
				<p>{article.desctiption}</p>

				<Link to={`/Update/${id}`}><button>Update</button></Link>
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

export default ArticleSingle;