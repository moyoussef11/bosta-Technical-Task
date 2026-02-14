import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth.store';
import { toast } from 'react-toastify';

const useSignupPage = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
  });
  const nav = useNavigate();
  const register = useAuthStore((state) => state.register);
  const loading = useAuthStore((state) => state.loading);

  function validateInputs() {
    if (!form.username || form.username.length < 3) {
      toast.error('Please enter a username with at least 3 characters');
      return false;
    }
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }

    if (!form.password || form.password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return false;
    }

    return true;
  }

  async function submit(e) {
    e.preventDefault();
    if (!validateInputs()) return false;
    await register(form);
    nav('/login');
  }

  return { form, setForm, loading, submit };
};

export default useSignupPage;
