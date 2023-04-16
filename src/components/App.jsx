


import { useEffect, lazy } from 'react';
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { RestrictedRoute } from './RestrictedRoute';
import { RedirectedRoute } from './RedirectedRoute';

import { Fallback } from './Fallback/Falback';


// import ContactsPage from "../pages/Contacts"


const Home = lazy(() => import('../pages/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const SignUp = lazy(() => import('../pages/SignUp'));
const Login = lazy(() => import('../pages/Login'));



export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);



  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  
  return isRefreshing ? (<Fallback />) : (<Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
          
      <Route path="contacts" element={<RestrictedRoute path="contacts" component={<ContactsPage />} redirectTo="/login" />} />
          
      <Route path="signup" element={<SignUp />} />
          
      <Route path="login" element={<RedirectedRoute path="login" component={<Login />} redirectTo="/contacts" />} />


    </Route>


  </Routes>














      
  )
};
