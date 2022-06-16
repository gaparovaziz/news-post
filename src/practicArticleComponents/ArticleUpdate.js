import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ArticleUpdate() {
	const { id } = useParams()
	const navigate = useNavigate()
	const [article, setArticle] = useState({
		title: '',
		description: ''
	})

	useEffect(() => {
		axios.get(`https://news-post-c6720-default-rtdb.firebaseio.com/articles/${id}.json`)
			.then(({ data }) => {setArticle(data)})
	}, [id])

	const onSubmitForm = e => {
		e.preventDefault()
		const formData = new FormData(e.target)
		
		axios.put(`https://news-post-c6720-default-rtdb.firebaseio.com/articles/${id}.json`,
		Object.fromEntries(formData.entries()))
			.then(res => navigate(`/`))
	}
  return ( 
      <div>
          <form onSubmit={onSubmitForm}>
						<div>
							<label>
								<p>Title:</p>
								<input type="text" name='title' defaultValue={article.title}/>
							</label>
						</div>
						<div>
							<label>
								<p>Description:</p>
								<input type="text" name="description" defaultValue={article.description}/>
							</label>
						</div>
						<button>SUBMIT</button>
					</form>
      </div>
   );
}

export default ArticleUpdate;