import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home/';
import { NotFound_404 } from './screens/NotFound_404';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound_404 />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
