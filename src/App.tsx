import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import ActivePage from './pages/ActivePage';
import LogDetailPage from './pages/LogDetailPage';
import CategoryPage from './pages/CategoryPage';

const App: React.FC = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ActivePage />} />
        <Route path="detail" element={<LogDetailPage />} />
        <Route path="category" element={<CategoryPage />} />
        <Route path="archive" element={<h1>Archive</h1>} />
      </Route>
    </Routes>
  </>
);

export default App;
