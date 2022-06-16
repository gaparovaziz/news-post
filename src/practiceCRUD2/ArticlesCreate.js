import axios from "axios";
import { useNavigate } from "react-router-dom";

function ArticlesCreate() {

  const navigate = useNavigate()
  const onSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    
    axios.post('https://news-block-d07d3-default-rtdb.firebaseio.com/articles.json', Object.fromEntries(formData.entries())).then(res => navigate("/"))
  }
  return ( 
    <form  className="formSubmit" onSubmit={onSubmit}>
      <div>
        <label>
          <span>Name: </span><br />
          <input type="text" name="name" required/>
        </label>
      </div>
      <div>
        <label>
          <span>Last Name: </span><br />
          <input type="text" name="lastName" required/>
        </label>
      </div>
      <div>
        <label>
          <span>Status: </span><br />
          <input type="text" name="status" required/>
        </label>
      </div>
      <button className="btn-submit">SUBMIT</button>
    </form>
   );
}

export default ArticlesCreate;