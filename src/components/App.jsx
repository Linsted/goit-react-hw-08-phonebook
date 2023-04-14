



import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import ContactsPage from "../pages/Contacts"

export const App = () => {

   

  
  return (
      
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<ContactsPage />}></Route>

      </Route>


    </Routes>














      
  )
};
