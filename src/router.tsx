import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home/';
import { NotFound404 } from './screens/NotFound_404';
import UserSearchProducts from './screens/UserSearchProducts';
import SingleProduct from './screens/SingleProduct';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/buscar" element={<UserSearchProducts />} />
        <Route path="/produto/:id" element={<SingleProduct />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
