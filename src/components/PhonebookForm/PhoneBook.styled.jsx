import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormStyled = styled(Form)`
  padding: 30px 90px;
  border-radius: 16px;
  border: 1px solid #ccc;
  font-size: 18px;
`;
export const FieldStyled = styled(Field)`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  box-shadow: none;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: #0077cc;
    box-shadow: 0 0 0 2px rgba(0, 119, 204, 0.3);
  }

  &::placeholder {
    color: #999;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-family: roboto;
`;

export const Button = styled.button`
  width: 200px;
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
`;
