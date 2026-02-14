import { create } from 'zustand';
import axiosInstance from '../services/api';
import { toast } from 'react-toastify';

export const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem('token') || null,
  loading: false,
  error: null,

  register: async (data) => {
    try {
      set({ loading: true, error: null });
      const res = await axiosInstance.post('/users', data);
      set({
        user: data.username,
        loading: false,
      });
      if (res.status === 201)
        toast.success('user created successfully FAKE DATA');
    } catch (error) {
      set({ error: error?.response?.data?.message });
    }
  },

  loginUser: async (data) => {
    try {
      set({ loading: true, error: null });
      const res = await axiosInstance.post('/auth/login', data);
      localStorage.setItem('token', res.data.token);
      set({
        user: data.username,
        token: res.data.token,
        loading: false,
      });
      if (res.status === 201)
        toast.success('user login successfully FAKE DATA');
    } catch (error) {
      set({ error: error?.response?.data?.message });
    }
  },

  logoutUser: () => {
    localStorage.removeItem('token');
    set({
      user: null,
      token: null,
    });
  },
}));
