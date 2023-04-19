import styled from '@emotion/styled';

export const DivStyled = styled.div`
  display  : flex ;
  gap: 12px;
  align-items: center;
`;

export const MailStyled = styled.p`
font-size: 16px;
  font-weight: 700;
  color: #333;
  margin: 0;

`

export const Button = styled.button`
  
width: 100px;
padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #0077cc;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #005ea6;
  }

`