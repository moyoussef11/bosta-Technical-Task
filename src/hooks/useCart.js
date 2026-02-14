import { useEffect } from 'react';
import { useCartStore } from '../store/cart.store';

const useCart = () => {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const total = cart.reduce(
    (sum, product) => sum + product.quantity * product.price,
    0
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return { cart, total, clearCart };
};

export default useCart;
