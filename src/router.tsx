import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { NotFound_404 } from './screens/NotFound_404';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound_404 />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
