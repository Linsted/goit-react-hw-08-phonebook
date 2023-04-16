import { Formik, Form,  ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import Button from '@mui/material/Button';
import {InputStyledMail, InputStyledPassword } from "../RegisterForm/RegisterForm.styled"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';



export const LoginForm = () => { 
   
    

        const dispatch = useDispatch();
    const [errorValidationMail, setErrorValidationMail] = useState(false);
    const [errorValidationPassword, setErrorValidationPassword] = useState(false);

    const validationSchema = Yup.object().shape({
        
        email: Yup.string().email(()=>{}).required(()=>{}),
        password: Yup.string().required(()=>{}),
    });


    const handleSubmit = (values, { resetForm }) => {
        if (!values.email || !values.password) {
            console.log(values)
            toast.error(`Please fill in all fields!`,{ duration: 1500 })
            
           
            !values.email ?   setErrorValidationMail(true) : setErrorValidationMail(false) ;
            !values.password ?   setErrorValidationPassword(true) : setErrorValidationPassword(false) ;
            


            return;
        }
        console.log(values);
        dispatch(logIn(values))
        setErrorValidationMail(false)
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
                    <Form>


                        <label htmlFor="email">Email
                        <InputStyledMail type="email" name="email" id="email" error={errorValidationMail.toString()} />
                        <ErrorMessage name="email" /></label>

                        <label htmlFor="password">Password
                        <InputStyledPassword type="password" name="password" id="password" error={errorValidationPassword.toString()} />
                        <ErrorMessage name="password" /></label>

                        <Button type='submit'  variant="outlined" size="small" color="secondary" >Log In</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
