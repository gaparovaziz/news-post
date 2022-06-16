import axios from "axios";

function ArticleCreate() {

	const onFormSubmit = event => {
		event.preventDefault()

		const formData = new FormData(event.target);
		alert(`
		${formData.get('title')} 
		${formData.get('desctiption')}
		`)

		axios.post('https://news-post-c6720-default-rtdb.firebaseio.com/articles.json', Object.fromEntries(formData.entries()))

}
  return ( 
		<form className="formSubmit" onSubmit={onFormSubmit}>
		<input type="text" placeholder="Title.." name="title"/><br />
		<input type="text" placeholder="description..." name="desctiption"/><br />
		<button className="btn-submit">ok</button>
</form>
   );
}

export default ArticleCreate;