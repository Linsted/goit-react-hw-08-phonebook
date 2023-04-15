import styled from '@emotion/styled';
import { Field } from 'formik';


export const InputStyledName = styled(Field)`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  ${({ error }) => {
    
    return  error === "false" ? error :'border: 1px solid red;'
    
    }}
`;

export const InputStyledMail = styled(Field)`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  ${({ error }) => {
    
    return  error === "false" ? error :'border: 1px solid red;'
    
    }}
`;

export const InputStyledPassword = styled(Field)`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  ${({ error }) => {
    
    return  error === "false" ? error :'border: 1px solid red;'
    
    }}
`;