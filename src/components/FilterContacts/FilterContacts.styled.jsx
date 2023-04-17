import styled from '@emotion/styled';
import { BiSearchAlt } from 'react-icons/bi';

export const Label = styled.label`
position: relative;
    display: flex;
    flex-direction: column;
    /* width: 200px; */
    gap: 10px;
    margin-bottom: 10px;
`;

export const InputStyled = styled.input`
padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  box-shadow: none;
  transition: all 0.3s ease-in-out;
  padding-left: 29px;

  &:focus{
    outline: none;
  border-color: #0077cc;
  box-shadow: 0 0 0 2px rgba(0, 119, 204, 0.3);
  };

  &::placeholder{
     color: #999;
  }
`;

export const IconStyled = styled(BiSearchAlt)`
position: absolute;
top: 49px;
left: 8px;
`