


import { useEffect, lazy } from 'react';
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Route, Routes } from "react-router-dom";
// import { Home } from "pages/Home";


// import ContactsPage from "../pages/Contacts"


const Home = lazy(() => import('../pages/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const SignUp = lazy(() => import('../pages/SignUp'));
const Login = lazy(() => import('../pages/Login'));


export const App = () => {

   

  
  return (
      
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />


      </Route>


    </Routes>














      
  )
};
