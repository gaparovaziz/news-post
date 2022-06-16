import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ArticleList() {
    const [articles, setArticles] = useState(null);

    useEffect(function() {
        axios.get("https://news-post-c6720-default-rtdb.firebaseio.com/articles.json")
            .then(({ data }) => {
                const newItem = Object.keys(data).map(id => {
                    return({ id:id, ...data[id] })
                })
            setArticles(newItem);
            });
    }, []);

    let output = "Loading...";
    if (articles !== null) {
        output = articles.map(article => (
            <li key={article.id}>
                <Link to={'/' + article.id}>{article.title}</Link>
            </li>
        ))
    }

    return (
        <ul className="ArticleList">
            {output}
        </ul>
    );
}

export default ArticleList;