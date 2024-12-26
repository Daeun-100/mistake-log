import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import ActivePage from './pages/ActivePage';
import LogDetailPage from './pages/LogDetailPage';

const App: React.FC = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ActivePage />} />
        <Route path="detail" element={<LogDetailPage />} />
      </Route>
    </Routes>
  </>
);

export default App;
