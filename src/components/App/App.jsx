import { UserForm } from '../Form/Form';
import { Contacts } from '../Contacts/Contacts';
import { Filter } from '../Filter/Filter';
import { PhonebookWrapper } from '../Form/Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector } from 'redux/selectors/contactsSelector';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations/fetchContacts';





function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());

  }, [dispatch]);
  const contacts = useSelector(contactsSelector);
  return (
    <PhonebookWrapper>
      <h1>Phonebook</h1>
      <UserForm />
      <h2>Find contact by name</h2>
      <Filter/>
      {contacts.length === 0 ? (
        <p>You don't have contacts </p>
      ) : (
        <Contacts />
      )}
    </PhonebookWrapper>
  );
}

export { App };
