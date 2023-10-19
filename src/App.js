import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';

// 글쓰기, 글삭제, 글 목록보기
function App() {
  return (
    <div>
      <ListPage />
      {/* <Navigation />
      <Routes>
        <Route path="/" exact={true} element={<ListPage />} />
        <Route path="/write" exact={true} element={<WritePage />} />
      </Routes> */}
    </div>
  );
}

export default App;
