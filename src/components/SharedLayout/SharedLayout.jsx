
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { UserMenu } from "components/UserMenu/UserMenu";
import { HeaderStyled, NavStyled, NavLinkStyled  } from "./SharedLayout.styled";
import { useSelector } from 'react-redux';
import { Fallback } from "components/Fallback/Falback";
import { getIasLoggedInSelector } from 'redux/auth/allSelectors';


export const SharedLayout = () => {
    const isLoggedIn = useSelector(getIasLoggedInSelector);
    

    return (<>
        <HeaderStyled>
            <NavStyled>
                <NavLinkStyled to="/">Home</NavLinkStyled>
                <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
                <NavLinkStyled to="/signup">Sign Up</NavLinkStyled>
                { !isLoggedIn && <NavLinkStyled to="/login">Log In</NavLinkStyled>}
            </NavStyled>
            <UserMenu />
        </HeaderStyled>
        <Suspense fallback={<Fallback/>}>
            <main>
            <Outlet /></main>
        </Suspense>
    </>)
};