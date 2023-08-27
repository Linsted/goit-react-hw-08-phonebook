import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIasLoggedInSelector } from 'redux/auth/allSelectors';

export const RestrictedRoute = ({ component, redirectTo }) => {
  const isLoggedIn = useSelector(getIasLoggedInSelector);

  return !isLoggedIn ? <Navigate to={redirectTo} /> : component;
};
