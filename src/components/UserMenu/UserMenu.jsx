import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { DivStyled, MailStyled } from './UserMenu.styled';


export const UserMenu = () => { 
     const dispatch = useDispatch();
    const isLogin = useSelector(state => state.auth.isLoggedIn);
    const userMail = useSelector(state => state.auth.user.email)



    return (<>
        { isLogin &&  <DivStyled>
  <MailStyled>{userMail}</MailStyled>
  <Button onClick={() => dispatch(logOut())}  variant="outlined" size="small" color="secondary" >Logout</Button>
</DivStyled>}
    </>)
};
