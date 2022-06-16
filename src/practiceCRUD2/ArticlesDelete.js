import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ArticlesDelete() {
  const navigate = useNavigate()
  const { id } = useParams()

  const onSubmitDelete = e => {
    e.preventDefault()
    axios.delete(`https://news-block-d07d3-default-rtdb.firebaseio.com/articles/${id}.json`)
      .then(res => navigate('/'))
  }
  return ( 
    <form onSubmit={onSubmitDelete}>
      <h2>Are you sure?</h2>
      <button>YES</button>
    </form>
   );
}

export default ArticlesDelete;