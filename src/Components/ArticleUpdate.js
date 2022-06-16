import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ArticleUpdate() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState({
        title: "",
        description: ""
    });

    useEffect(function() {
        axios.get(`https://news-post-c6720-default-rtdb.firebaseio.com/articles/${id}.json`)
            .then(({ data }) => setArticle(data));
    }, [id]);

    const onFormSubmit = function (event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        axios.put(
            `https://articles-cc00e-default-rtdb.firebaseio.com/articles/${id}.json`,
            Object.fromEntries(formData.entries())
        ).then(response => navigate(`/${id}`));
    }

    return (
        <form className="ArticleUpdate" onSubmit={onFormSubmit}>
            <div>
                <label>
                    Title
                    <input type="text" name="title" defaultValue={article.title} required />
                </label>
            </div>
            <div>
                <label>
                    Description
                    <textarea name="description" defaultValue={article.description} required></textarea>
                </label>
            </div>
            <button>Submit</button>
        </form>
    );
}

export default ArticleUpdate;