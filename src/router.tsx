import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home/';
import { NotFound_404 } from './screens/NotFound_404';
import UserSearchProducts from './screens/UserSearchProducts';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound_404 />} />
        <Route path="/buscar" element={<UserSearchProducts />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
