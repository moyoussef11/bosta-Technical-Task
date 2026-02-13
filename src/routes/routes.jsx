import Layout from '../components/Layout';
import { Route, Routes } from 'react-router-dom';
import Products from '../pages/Products';
import DetailsProduct from '../pages/DetailsProduct';
import CreateProduct from '../pages/CreateProduct';
import Cart from '../pages/Cart';

const RoutesConfig = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<DetailsProduct />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
};

export default RoutesConfig;
