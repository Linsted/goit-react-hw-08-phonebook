
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import toast, { Toaster } from 'react-hot-toast';
import {InputStyledName,InputStyledMail, InputStyledPassword } from "./RegisterForm.styled"
import { useState } from 'react';




export const RegisterForm = () => { 

    const [errorValidationName, setErrorValidationName] = useState(false);
    const [errorValidationMail, setErrorValidationMail] = useState(false);
    const [errorValidationPassword, setErrorValidationPassword] = useState(false);

    const validationSchema = Yup.object().shape({
        name: Yup.string().required(()=>{}),
        email: Yup.string().email(()=>{}).required(()=>{}),
        password: Yup.string().required(()=>{}),
    });


    const handleSubmit = (values, { resetForm }) => {
        if (!values.name || !values.email || !values.password) {
            console.log(values)
            toast.error(`Please fill in all fields`,{ duration: 1000 })
            
            !values.name ?   setErrorValidationName(true) : setErrorValidationName(false) ;
            !values.email ?   setErrorValidationMail(true) : setErrorValidationMail(false) ;
            !values.password ?   setErrorValidationPassword(true) : setErrorValidationPassword(false) ;
            


            return;
        }
        console.log(values);
        setErrorValidationName(false);
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
                    name: '',
                    email: '',
                    password: '',
                }}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        <label htmlFor="name">Name</label>
                        <InputStyledName type="text" name="name" id="name" error={errorValidationName.toString()} />
                        <ErrorMessage name="name" />

                        <label htmlFor="email">Email</label>
                        <InputStyledMail type="email" name="email" id="email" error={errorValidationMail.toString()} />
                        <ErrorMessage name="email" />

                        <label htmlFor="password">Password</label>
                        <InputStyledPassword type="password" name="password" id="password" error={errorValidationPassword.toString()} />
                        <ErrorMessage name="password" />

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

