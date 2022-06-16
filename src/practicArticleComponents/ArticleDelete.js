import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ArticleDelete() {
	const { id } = useParams()
	const navigate = useNavigate()

	const onSubmit = e => {
		e.preventDefault()

		axios.delete(`https://news-post-c6720-default-rtdb.firebaseio.com/articles/${id}.json`)
			.then(res => navigate(`/`))
	}
  return ( 
      <form onSubmit={onSubmit}>
				<h1>Are you sure?</h1>
				<button>Yes</button>
			</form>
   );
}

export default ArticleDelete;