import { Contacts } from "../components/Contacts/Contacts"
import { FilterContacts } from "../components/FilterContacts/FilterContacts"
import { PhonebookForm } from "../components/PhonebookForm/PhonebookForm";
import { Section } from "../components/App.styled"
import { getContactsFromState,getIsLoading, getError } from "redux/contactsSlice";
import { getFilterState } from "../../src/redux/filterSlice";
import { fetchContacts } from "redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


const ContactsPage = () => { 




const dispatch = useDispatch();
  const contacts = useSelector(getContactsFromState);
  const filter = useSelector(getFilterState); 
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  
  useEffect(() => {

    dispatch(fetchContacts());
  }, [dispatch]);
  

  



  const normalizedRequest = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedRequest));



    return (<>
     <Section>



         <h1>Phonebook</h1>
        
         < PhonebookForm  />
         <h2>Contacts</h2>
         < FilterContacts
           filter={filter}
         />
         {isLoading && !error && <b>Request in progress...</b>}
         < Contacts
           contacts={filteredContacts}
          
            />

       </Section>
    </>)
};
export default ContactsPage;