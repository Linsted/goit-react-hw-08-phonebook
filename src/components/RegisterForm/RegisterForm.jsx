
import { Formik, Form,  ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from 'redux/auth/operations';

import toast, { Toaster } from 'react-hot-toast';
import {InputStyledName,InputStyledMail, InputStyledPassword } from "./RegisterForm.styled"
import { useState } from 'react';
import { useDispatch } from 'react-redux';




export const RegisterForm = () => { 

    const [errorValidationName, setErrorValidationName] = useState(false);
    const [errorValidationMail, setErrorValidationMail] = useState(false);
    const [errorValidationPassword, setErrorValidationPassword] = useState(false);
    const dispatch = useDispatch();

    const validationSchema = Yup.object().shape({
        name: Yup.string().required(()=>{}),
        email: Yup.string().email(()=>{}).required(()=>{}),
        password: Yup.string().required(()=>{}),
    });


    const handleSubmit = (values, { resetForm }) => {
        if (!values.name || !values.email || !values.password) {
            // console.log(values)
            toast.error(`Please fill in all fields!`,{ duration: 1500 })
            
            !values.name ?   setErrorValidationName(true) : setErrorValidationName(false) ;
            !values.email ?   setErrorValidationMail(true) : setErrorValidationMail(false) ;
            !values.password ?   setErrorValidationPassword(true) : setErrorValidationPassword(false) ;
            


            return;
        }
        // console.log(values);
        setErrorValidationName(false);
        setErrorValidationMail(false);
        setErrorValidationPassword(false);
        dispatch(register(values));
        resetForm();

    };

    return (
        <div>
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
                    <Form>
                        <label htmlFor="name">Name
                        <InputStyledName type="text" name="name" id="name" error={errorValidationName.toString()} />
                        <ErrorMessage name="name" /></label>

                        <label htmlFor="email">Email
                        <InputStyledMail type="email" name="email" id="email" error={errorValidationMail.toString()} />
                        <ErrorMessage name="email" /></label>

                        <label htmlFor="password">Password
                        <InputStyledPassword type="password" name="password" id="password" error={errorValidationPassword.toString()} />
                        <ErrorMessage name="password" /></label>

                        <button type='submit'>Sign Up</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};




// export const RegisterForm = () => { 

// const validationSchema = object().shape({
//     name: string().required(),
//     phone: string().required(),
// });
    
    
    
//     return (<>

//         <div>
//             <Formik
//                 validationSchema={validationSchema}
//                 initialValues={{
//                     name: '',
//                     email: ``,
//                     password: ''}}
//             >
                
//                 <Formik />
//         </div>
   
//     </>);
// };

