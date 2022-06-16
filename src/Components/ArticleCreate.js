import axios from "axios";

function ArticleCreate() {
    const onFormSubmit = event => {
        event.preventDefault();
        const formData = new FormData(event.target);

        axios.post(
            "https://news-post-c6720-default-rtdb.firebaseio.com/articles.json",
            Object.fromEntries(formData.entries())
        );
    }

    return (
        <form className="ArticleCreate" onSubmit={onFormSubmit}>
            <div>
                <label>
                    Title
                    <input type="text" name="title" required />
                </label>
            </div>
            <div>
                <label>
                    Description
                    <textarea name="description" required></textarea>
                </label>
            </div>
            <button>Submit</button>
        </form>
    );
}

export default ArticleCreate;