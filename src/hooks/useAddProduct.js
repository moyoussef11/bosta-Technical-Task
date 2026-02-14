import { useEffect, useState } from 'react';
import { useProductsStore } from '../store/products.store';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const useAddProduct = () => {
  const [form, setForm] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
  });
  const categoriesData = useProductsStore((state) => state.categories);
  const getCategoriesData = useProductsStore((state) => state.fetchCategories);
  const addNewProduct = useProductsStore((state) => state.addNewProduct);
  const added = useProductsStore((state) => state.created);
  const loading = useProductsStore((state) => state.loading);
  const resetCreated = useProductsStore((state) => state.resetCreated);
  const nav = useNavigate();

  useEffect(() => {
    getCategoriesData();
    resetCreated();
  }, []);

  function validateInputs() {
    if (!form.title) {
      toast.error('Please enter a title product');
      return false;
    }
    if (!form.category) {
      toast.error('Please select a category product');
      return false;
    }
    if (!form.price) {
      toast.error('Please enter a price product  ');
      return false;
    }
    if (isNaN(form.price) || Number(form.price) <= 0) {
      toast.error('Price must be a positive number');
      return false;
    }
    if (!form.description) {
      toast.error('Please enter a description product');
      return false;
    }
    if (!form.image) {
      toast.error('Please enter a image url product');
      return false;
    }

    return true;
  }

  function submit(e) {
    e.preventDefault();
    if (!validateInputs()) return false;
    addNewProduct(form);
  }
  useEffect(() => {
    if (added) {
      toast.success('Product added successfully!');
      resetCreated();
      nav('/');
    }
  }, [added, nav]);

  return { submit, form, setForm, categoriesData, loading };
};

export default useAddProduct;
