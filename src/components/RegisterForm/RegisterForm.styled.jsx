import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  gap: 10px;
  margin-inline: auto;
  background-color: rgba(248, 248, 255, 0.7);
  padding: 20px 0;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
  border-radius: 16px;
  overflow-x: auto;
  margin-top: 48px;

  border-radius: 16px;
  border: 1px solid #ccc;
  font-size: 18px;
`;

export const InputStyledName = styled(Field)`
  padding: 10px;
  width: 27vw;
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
  &:focus::placeholder {
    opacity: 0;
  }
  &::placeholder {
    color: #999;
  }
  ${({ error }) => (error === 'false' ? error : 'border: 1px solid red;')};
`;

export const InputStyledMail = styled(Field)`
  padding: 10px;
  width: 27vw;
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
  &:focus::placeholder {
    opacity: 0;
  }
  &::placeholder {
    color: #999;
  }
  ${({ error }) => (error === 'false' ? error : 'border: 1px solid red;')};
`;

export const InputStyledPassword = styled(Field)`
  width: 27vw;
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
  &:focus::placeholder {
    opacity: 0;
  }
  &::placeholder {
    color: #999;
  }
  ${({ error }) => (error === 'false' ? error : 'border: 1px solid red;')};
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-family: roboto;
`;
