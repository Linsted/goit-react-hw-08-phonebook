import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import { UserMenu } from "components/UserMenu/UserMenu";
import { HeaderStyled  } from "./SharedLayout.styled";
import { useSelector } from 'react-redux';
import { Fallback } from "components/Fallback/Falback";



export const SharedLayout = () => {
    const  isLoggedIn  = useSelector(state => state.auth.isLoggedIn)



    

    return (<>
        <HeaderStyled>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contacts">myContacts</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                { !isLoggedIn && <NavLink to="/login">Log In</NavLink>}
            </nav>
            <UserMenu />
        </HeaderStyled>
        <Suspense fallback={<Fallback/>}>
            <main>
            <Outlet /></main>
        </Suspense>
    </>)
};