import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import { PhonebookWrapper, Subtitle, Title } from './Phonebook.styled';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';

import { selectContacts, selectError, selectIsLoading } from '../../redux/contacts/slice';
import { fetchContacts } from '../../redux/contacts/operation';

export const Phonebook = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    toast.error('Something went wrong! Reload page or try again later.');
  }

  return (
    <PhonebookWrapper>
      <Title className="text-center font-bold text-4xl">Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts ({contacts.length})</Subtitle>
      <Filter />
      {contacts.length ? <Contacts /> : <p>No contacts</p>}
    </PhonebookWrapper>
  );
};
