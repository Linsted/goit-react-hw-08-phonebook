import { Contacts } from "../components/Contacts/Contacts"
import { FilterContacts } from "../components/FilterContacts/FilterContacts"
import { PhonebookForm } from "../components/PhonebookForm/PhonebookForm";
import { Title, WrapperStyled, ContactsInfoStyled } from "../components/Contacts/Contacts.styled"
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
    

      <WrapperStyled>

        <Title>Add new contact</Title>
        
        < PhonebookForm />
      </WrapperStyled>
        
    <WrapperStyled>
      
      <Title>Phonebook</Title>
      <ContactsInfoStyled>
        < FilterContacts
          filter={filter}
        />
        {isLoading && !error && <b>Request in progress...</b>}
        < Contacts
          contacts={filteredContacts}
          
        /></ContactsInfoStyled>
      </WrapperStyled>
    
  </>)
};
export default ContactsPage;