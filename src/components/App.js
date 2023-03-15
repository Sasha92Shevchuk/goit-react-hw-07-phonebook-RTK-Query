import React from 'react';
import { useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { Wrapper } from './App.styled';
import ContactForm from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export const App = () => {
  // const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Wrapper>
  );
};
