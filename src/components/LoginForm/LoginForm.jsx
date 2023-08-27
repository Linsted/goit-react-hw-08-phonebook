import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { Button } from 'components/PhonebookForm/PhoneBook.styled';
import {
  InputStyledMail,
  InputStyledPassword,
} from '../RegisterForm/RegisterForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormStyled, LabelStyled } from '../RegisterForm/RegisterForm.styled';
import { Title } from 'components/Contacts/Contacts.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [errorValidationMail, setErrorValidationMail] = useState(false);
  const [errorValidationPassword, setErrorValidationPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(() => {})
      .required(() => {}),
    password: Yup.string().required(() => {}),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (!values.email || !values.password) {
      toast.error(`Please fill in all fields!`, { duration: 1500 });
      !values.email
        ? setErrorValidationMail(true)
        : setErrorValidationMail(false);
      !values.password
        ? setErrorValidationPassword(true)
        : setErrorValidationPassword(false);

      return;
    }
    dispatch(logIn(values));
    setErrorValidationMail(false);
    setErrorValidationPassword(false);
    resetForm();
  };

  return (
    <div>
      <Toaster />
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        {() => (
          <FormStyled>
            <Title>Log In Form</Title>
            <LabelStyled htmlFor="email">
              Email
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
              Password
              <InputStyledPassword
                placeholder="Enter  your password"
                type="password"
                name="password"
                id="password"
                error={errorValidationPassword.toString()}
              />
              <ErrorMessage name="password" />
            </LabelStyled>

            <Button
              type="submit"
              variant="outlined"
              size="small"
              color="secondary"
            >
              Log In
            </Button>
          </FormStyled>
        )}
      </Formik>
    </div>
  );
};
