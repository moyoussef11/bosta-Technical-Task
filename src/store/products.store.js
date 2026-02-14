import { create } from 'zustand';
import {
  createProduct,
  getCategories,
  getProductById,
  getProducts,
} from '../services/products.service';

export const useProductsStore = create((set) => ({
  products: [],
  loading: false,
  error: null,
  categories: [],
  product: {},
  created: false,

  fetchProducts: async () => {
    try {
      set({ loading: true, error: null });
      const { data } = await getProducts();
      set({ products: data, loading: false });
    } catch (err) {
      set({
        error: `Failed to fetch products please try again ${err}`,
        loading: false,
      });
    }
  },

  fetchCategories: async () => {
    try {
      set({ loading: true, error: null });
      const { data } = await getCategories();
      set({ categories: data, loading: false });
    } catch (err) {
      set({
        error: `Failed to fetch categories please try again ${err}`,
        loading: false,
      });
    }
  },

  fetchProductById: async (id) => {
    try {
      set({ loading: true, error: null });
      const { data } = await getProductById(id);
      set({ product: data, loading: false });
    } catch (err) {
      set({
        error: `Failed to fetch product please try again ${err}`,
        loading: false,
      });
    }
  },
  addNewProduct: async (dataForm) => {
    try {
      set({ loading: true, error: null });
      const { data } = await createProduct(dataForm);
      set({ created: true, loading: false, product: data });
    } catch (err) {
      set({
        error: `Failed to add product please try again ${err}`,
        loading: false,
        created: false,
      });
    }
  },
  resetCreated: () => set({ created: false, loading: false, error: null }),
}));
