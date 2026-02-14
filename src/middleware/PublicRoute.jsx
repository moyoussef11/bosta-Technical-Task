import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/auth.store';

const PublicRoute = () => {
  const token = useAuthStore((state) => state.token);
  return token ? <Navigate to="/" replace /> : <Outlet />;
};

export default PublicRoute;
