import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home/';
import { NotFound404 } from './screens/NotFound_404';
import UserSearchProducts from './screens/UserSearchProducts';
import SingleProduct from './screens/SingleProduct';
import ContactUs from './screens/ContactUs';
import AboutUs from './screens/AboutUs';
import FAQPage from './screens/FAQ';
import PartnerRegister from './screens/PartnerRegister';
import Login from './screens/Login';
import UserRegister from './screens/UserRegister';
import ConnectedProtectedRoute from './lib/components/ProtectedRoute';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/buscar" element={<UserSearchProducts />} />
        <Route path="/produto/:id" element={<SingleProduct />} />
        <Route path="/formulario_de_contato" element={<ContactUs />} />
        <Route path="/sobre" element={<AboutUs />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route
          path="/cadastrar_parceiro"
          element={
            <ConnectedProtectedRoute>
              <PartnerRegister />
            </ConnectedProtectedRoute>
          }
        />

        <Route path="/cadastro" element={<UserRegister />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
