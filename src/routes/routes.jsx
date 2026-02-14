import Layout from '../components/Layout';
import { Route, Routes } from 'react-router-dom';
import Products from '../pages/Products';
import DetailsProduct from '../pages/DetailsProduct';
import CreateProduct from '../pages/CreateProduct';
import Cart from '../pages/Cart';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import PublicRoute from '../middleware/PublicRoute';
import Auth from '../middleware/Auth';

const RoutesConfig = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<DetailsProduct />} />
        <Route element={<Auth />}>
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Route>
      </Routes>
    </Layout>
  );
};

export default RoutesConfig;
