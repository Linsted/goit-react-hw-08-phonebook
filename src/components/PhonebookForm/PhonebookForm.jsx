import { Formik, Field } from 'formik';
import { object, string } from 'yup';
import { FormStyled, Label, Button } from './FormStyled.styled';
import { useDispatch, useSelector } from "react-redux";
import { addContact, updateContact } from 'redux/operations';
import { getContactsFromState } from 'redux/contactsSlice';




import toast, { Toaster } from 'react-hot-toast';




const phoneBookSchema = object().shape({
    name: string().required(),
    phone: string().required(),
});





export const PhonebookForm = () => {
    // console.log(onSubmit)

    const contacts = useSelector(getContactsFromState);
    const dispatch = useDispatch();

    return (
        <Formik
            validationSchema={phoneBookSchema}
            initialValues={{
                name: '',
                phone: ''}}
            onSubmit={(values, { resetForm }) => {
                
                const existingContact = contacts.filter(contact => { return contact.name === values.name });
                
                if (existingContact.length > 0) {
                    
                    
                    toast.error(`${values.name} updated`);
                    dispatch(updateContact({
                        id: existingContact[0].id,
                        name: values.name,
                        number:values.phone,
                    }))
                    resetForm();
                    return;
                }

                dispatch(addContact({ ...values }));
                resetForm();
            }}>
            
            <FormStyled>
                 <Toaster />
                <Label>Name
                    <Field name="name"/>
                </Label>
                <Label>
                    Number
                    <Field
                        type="phone"
                        name="phone"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"/>
                </Label>


            <Button type="submit">Add contact</Button>
            </FormStyled>
        </Formik>
    )
}



