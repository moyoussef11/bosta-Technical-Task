import { useEffect, useState } from 'react';
import { useProductsStore } from '../store/products.store';

const useProducts = () => {
  const productsData = useProductsStore((state) => state.products);
  const getProductsData = useProductsStore((state) => state.fetchProducts);
  const categoriesData = useProductsStore((state) => state.categories);
  const getCategoriesData = useProductsStore((state) => state.fetchCategories);
  const loading = useProductsStore((state) => state.loading);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    getProductsData();
    getCategoriesData();
  }, []);

  const filteredProducts =
    selectedCategory === 'all'
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'low') return a.price - b.price;
    if (sortOrder === 'high') return b.price - a.price;
    return 0;
  });

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentProducts]);

  return {
    loading,
    categoriesData,
    setSelectedCategory,
    selectedCategory,
    setSortOrder,
    currentProducts,
    setCurrentPage,
    currentPage,
    totalPages,
  };
};

export default useProducts;
