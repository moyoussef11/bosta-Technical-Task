import axiosInstance from './api';

export const getProducts = () => axiosInstance.get('/products');

export const getProductById = (id) => axiosInstance.get(`/products/${id}`);

export const getCategories = () => axiosInstance.get('/products/categories');

export const createProduct = (data) => axiosInstance.post('/products', data);
