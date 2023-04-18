import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.header`
  
  height: 60px; /* adjust to the desired height */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.72);
  

    
`;

export const CenteredStyled = styled.div`
  position: absolute;
     left: 50%;
     top: 50%;
     transform: translate(-50%, -50%);
`;

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  padding: 10px 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-size: 18px;
  margin: 0 10px;

  &:hover {
  color: #666666;
};

&.active {
  color: #0077CC;
  font-weight: bold;
};
`


