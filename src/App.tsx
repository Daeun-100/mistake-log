import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import ActivePage from './pages/ActivePage';

const App: React.FC = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ActivePage />} />
      </Route>
    </Routes>
  </>
);

export default App;
