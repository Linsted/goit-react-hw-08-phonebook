import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";


export const SharedLayout = () => {
    

    return (<>
        <header>
        <nav>
            <NavLink  to="/">Home</NavLink>
            <NavLink to="/contacts">myContacts</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/login">Log In</NavLink>
        </nav>
        
    </header>
        <Outlet />
    </>)
};