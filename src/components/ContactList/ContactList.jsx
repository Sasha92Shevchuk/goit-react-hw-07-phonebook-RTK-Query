import { Contact } from '../Contact';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactApi';
import { selectFilter } from 'redux/selectors';

const filterContact = (contacts, query) => {
  if (contacts) {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(query)
    );
  }
};

export const ContactList = () => {
  const { data: items, error, isLoading } = useGetContactsQuery();
  const filter = useSelector(selectFilter);
  const filteredContacts = filterContact(items, filter);

  return (
    <List>
      {!isLoading &&
        !error &&
        filteredContacts.map(item => <Contact key={item.id} item={item} />)}
    </List>
  );
};
