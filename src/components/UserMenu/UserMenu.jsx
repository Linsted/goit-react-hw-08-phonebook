// import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { DivStyled, MailStyled,Button  } from './UserMenu.styled';
import { getIasLoggedInSelector, getMail } from 'redux/auth/allSelectors';



export const UserMenu = () => { 
     const dispatch = useDispatch();
    const isLogin = useSelector(getIasLoggedInSelector);
    const userMail = useSelector(getMail);



    return (<>
        { isLogin &&  <DivStyled>
  <MailStyled>{userMail}</MailStyled>
  <Button onClick={() => dispatch(logOut())}  variant="outlined" size="small" color="secondary" >Logout</Button>
</DivStyled>}
    </>)
};
