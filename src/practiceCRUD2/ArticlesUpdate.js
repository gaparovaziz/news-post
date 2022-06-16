import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ArticlesUpdate() {
  const { id } = useParams()
  const [article, setArticle] = useState({
    name: '',
    lastName: '',
    status: ''
  })
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`https://news-block-d07d3-default-rtdb.firebaseio.com/articles/${id}.json`)
      .then(({data}) => {setArticle(data)})
  }, [id])

  const onSubmitUbdate = e => {
    e.preventDefault()
    const formData = new FormData(e.target)

    axios.put(`https://news-block-d07d3-default-rtdb.firebaseio.com/articles/${id}.json`, Object.fromEntries(formData.entries()))
      .then(res => navigate('/'))
  }

  
  return ( 
    <form onSubmit={onSubmitUbdate}>
      <div>
        <label>
          <span>Name:</span><br />
          <input type="text" name="name" defaultValue={article.name} required/>
        </label>
      </div>
      <div>
        <label>
          <span>Last Name:</span><br />
          <input type="text" name="lastName" defaultValue={article.lastName} required/>
        </label>
      </div>
      <div>
        <label>
          <span>Status:</span><br />
          <input type="text" name="status" defaultValue={article.status} required/>
        </label>
      </div>
      <button>SUBMIT</button>
    </form>
   );
}

export default ArticlesUpdate;