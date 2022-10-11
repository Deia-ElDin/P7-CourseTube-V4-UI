import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/hooks';
import { selectCurrentToken } from '../slices/authSlice';

const RequiredAuth = () => {
  const token = useAppSelector(selectCurrentToken);
  const location = useLocation();

  return token ? <Outlet /> : <Navigate to="/" state={{ from: location }} />;
};

export default RequiredAuth;
