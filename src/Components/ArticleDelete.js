import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ArticleDelete() {
    const { id } = useParams();
    const navigate = useNavigate();

    function onFormSubmit(event) {
        event.preventDefault();

        axios.delete(`https://news-post-c6720-default-rtdb.firebaseio.com/${id}.json`)
            .then(response => navigate('/'));
    }

    return (
        <form className="ArticleDelete" onSubmit={onFormSubmit}>
            <h1>Are you sure?</h1>
            <button>Yes</button>
        </form>
    );
}

export default ArticleDelete;