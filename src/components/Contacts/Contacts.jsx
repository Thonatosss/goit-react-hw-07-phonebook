import { useDispatch, useSelector } from "react-redux";
import { DeleteButton } from "./Contacts.styled";
import { contactsSelector } from "redux/selectors/contactsSelector";
import { filterSelector } from "redux/selectors/filterSelector";
import { deleteContact } from "redux/operations/deleteContact";




const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  
  const formattedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(formattedFilter)
  );

  const removeContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <div>
      <ul>
        {filteredContacts.map(({ id, name, phone }) => {
          return (
            <li key={id}>
              {name} : {phone}
              <DeleteButton type="button" onClick={()=>(removeContact(id))}>Delete Contact</DeleteButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { Contacts };
