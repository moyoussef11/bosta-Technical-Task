import Layout from '../components/Layout';
import { Route, Routes } from 'react-router-dom';
import Products from '../pages/Products';
import DetailsProduct from '../pages/DetailsProduct';
import CreateProduct from '../pages/CreateProduct';
import Cart from '../pages/Cart';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';

const RoutesConfig = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<DetailsProduct />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </Layout>
  );
};

export default RoutesConfig;
