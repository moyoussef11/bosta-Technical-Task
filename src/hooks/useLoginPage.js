import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth.store';
import { toast } from 'react-toastify';

const useLoginPage = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const nav = useNavigate();
  const loginUser = useAuthStore((state) => state.loginUser);
  const loading = useAuthStore((state) => state.loading);

  function validateInputs() {
    if (
      !form.username ||
      (form.username !== 'mor_2314' && form.username !== 'johnd')
    ) {
      toast.error(
        'Please enter a username: (mor_2314) or (johnd)(FAKE DATA, dummy project)'
      );
      return false;
    }

    if (
      (form.username === 'mor_2314' && form.password !== '83r5^_') ||
      (form.username === 'johnd' && form.password !== 'm38rmF$')
    ) {
      toast.error(
        'Password must match the username: (mor_2314 → (83r5^_)) or (johnd → (m38rmF$)) (FAKE DATA, dummy project)'
      );
      return false;
    }

    return true;
  }

  async function submit(e) {
    e.preventDefault();
    if (!validateInputs()) return false;
    await loginUser(form);
    nav('/');
  }
  return { form, setForm, submit, loading };
};

export default useLoginPage;
