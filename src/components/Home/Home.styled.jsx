import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import {  keyframes } from '@emotion/react';


const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;



export const BackingStyled = styled.div`
position: relative;
width: 100%;
height: auto;
   
`

export const TitleStyled = styled.h1`
     position: absolute;
     left: 50%;
     top: 50%;
     transform: translate(-50%, -50%);
     font-size: 3.5vw;
     font-family: 'Lobster', cursive;
     text-shadow: 2px 2px 2px #000000;
     color: #ffffff;
    
     
     
`;

export const NavlinkStyled = styled(NavLink)`
    color: #ffffff;
    font-size: 2.5vw;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    
`;

export const SpanStyled = styled.span`
  padding: 0px 10px;
  background-color: rgba(215, 214, 214, 0.5);
  display: inline-flex;
  align-items: center;
  border-radius: 24px;
  animation: ${pulse} 2s ease-in-out infinite;

`;

export const ImgStyled = styled.img`
      max-width: 100%;
  height: auto;
`