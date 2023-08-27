import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from 'redux/auth/operations';
import toast, { Toaster } from 'react-hot-toast';
import {
  InputStyledName,
  LabelStyled,
  InputStyledMail,
  InputStyledPassword,
  FormStyled,
} from './RegisterForm.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'components/PhonebookForm/PhoneBook.styled';
import { Title } from 'components/Contacts/Contacts.styled';
import { FcLeave } from 'react-icons/fc';
import { getIasLoggedInSelector } from 'redux/auth/allSelectors';

export const RegisterForm = () => {
  const [errorValidationName, setErrorValidationName] = useState(false);
  const [errorValidationMail, setErrorValidationMail] = useState(false);
  const [errorValidationPassword, setErrorValidationPassword] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIasLoggedInSelector);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(() => {}),
    email: Yup.string()
      .email(() => {})
      .required(() => {}),
    password: Yup.string().required(() => {}),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (!values.name || !values.email || !values.password) {
      toast.error(`Please fill in all fields!`, { duration: 1500 });

      !values.name
        ? setErrorValidationName(true)
        : setErrorValidationName(false);
      !values.email
        ? setErrorValidationMail(true)
        : setErrorValidationMail(false);
      !values.password
        ? setErrorValidationPassword(true)
        : setErrorValidationPassword(false);

      return;
    }

    setErrorValidationName(false);
    setErrorValidationMail(false);
    setErrorValidationPassword(false);
    dispatch(register(values));
    resetForm();
  };

  return (
    <>
      <Toaster />
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        {() => (
          <FormStyled>
            <Title>Registration form</Title>
            <LabelStyled htmlFor="name">
              Your name
              <InputStyledName
                placeholder="Enter  your name"
                type="text"
                name="name"
                id="name"
                error={errorValidationName.toString()}
              />
              <ErrorMessage name="name" />
            </LabelStyled>

            <LabelStyled htmlFor="email">
              Your e-mail
              <InputStyledMail
                placeholder="Enter  your e-mail"
                type="email"
                name="email"
                id="email"
                error={errorValidationMail.toString()}
              />
              <ErrorMessage name="email" />
            </LabelStyled>

            <LabelStyled htmlFor="password">
              Your password
              <InputStyledPassword
                placeholder="Enter  your password"
                type="password"
                name="password"
                id="password"
                error={errorValidationPassword.toString()}
              />
              <ErrorMessage name="password" />
            </LabelStyled>
            {isLoggedIn && (
              <p style={{ color: 'red', fontSize: '22px' }}>
                <FcLeave /> Please note that you already have an account.
              </p>
            )}
            <Button type="submit">Create account</Button>
          </FormStyled>
        )}
      </Formik>
    </>
  );
};
