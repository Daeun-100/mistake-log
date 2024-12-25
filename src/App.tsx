import { Routes, Route } from 'react-router-dom';
import TestPage from './pages/testPage';

const App: React.FC = () => (
  <>
    <Routes>
      <Route path="/" element={<TestPage />} />
    </Routes>
  </>
);

export default App;
