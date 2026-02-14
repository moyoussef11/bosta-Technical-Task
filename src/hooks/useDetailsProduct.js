import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductsStore } from '../store/products.store';
import { useCartStore } from '../store/cart.store';

const useDetailsProduct = () => {
  const { id } = useParams();
  const fetchProductById = useProductsStore((state) => state.fetchProductById);
  const productDetailsData = useProductsStore((state) => state.product);
  const loading = useProductsStore((state) => state.loading);
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);
  const isInCart = cart.some((p) => p.id === productDetailsData.id);

  useEffect(() => {
    if (id) {
      fetchProductById(id);
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return { id, productDetailsData, isInCart, addToCart, loading };
};

export default useDetailsProduct;
