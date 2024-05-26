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
import PersonalDataClient from './screens/PersonalDataClient';
import PersonalDataAddress from './screens/PersonalDataAddress';
import PersonalDataCard from './screens/PersonalDataCard';
import PersonalDataWishlist from './screens/PersonalDataWishlist';
import PersonalDataOrders from './screens/personalDataOrders';

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
        <Route path="/cadastrar_parceiro" element={<PartnerRegister />} />
        <Route path="/cadastro" element={<UserRegister />} />
        <Route path="/perfil/" element={<PersonalDataClient />} />
        <Route path="/perfil/dados_pessoais" element={<PersonalDataClient />} />
        <Route path="/perfil/pedidos" element={<PersonalDataOrders />} />
        <Route path="/perfil/enderecos" element={<PersonalDataAddress />} />
        <Route path="/perfil/cartoes" element={<PersonalDataCard />} />
        <Route
          path="/perfil/lista_de_desejos"
          element={<PersonalDataWishlist />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
