import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const existsProduct = state.cart.find((p) => p.id === product.id);
      if (existsProduct) return state;

      return {
        cart: [...state.cart, { ...product, quantity: 1 }],
      };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((p) => p.id !== id),
    })),

  increaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      ),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(1, p.quantity - 1) } : p
      ),
    })),

  clearCart: () => set({ cart: [] }),
}));
