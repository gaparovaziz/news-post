import { Route, Routes } from 'react-router-dom';
import ArticleCreate from './practiceCRUD2/ArticlesCreate';
// import ArticleSingle from './practiceCRUD2/ArticleSingle';
import ArticleList from './practiceCRUD2/ArticlesList';
import ArticleUpdate from './practiceCRUD2/ArticlesUpdate';
import ArticleDelete from './practiceCRUD2/ArticlesDelete';
import ArticlesFull from './practiceCRUD2/ArticlesFull';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/create" element={<ArticleCreate />} />
        <Route path="/:id" element={<ArticleSingle />} />
        <Route path="/update/:id" element={<ArticleUpdate />} />
        <Route path="/delete/:id" element={<ArticleDelete />} />
      </Routes> */}

      {/* <Routes>
        <Route path='/create' element={<ArticleCreate/>}/>
        <Route path='/:id' element={<ArticleSingle/>}/>
        <Route path='/' element={<ArticleList/>}/>
        <Route path='/update/:id' element={<ArticleUpdate/>}/>
        <Route path='/delete/:id' element={<ArticleDelete/>}/>
      </Routes> */}

      {/* <Routes>
        <Route path="/create" element={<ArticleCreate/>}/>
        <Route path="/" element={<ArticleList/>}/>
        <Route path="/:id" element={<ArticlesFull/>}/>
        <Route path="/update/:id" element={<ArticleUpdate/>}/>
        <Route path="/delete/:id" element={<ArticleDelete/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
