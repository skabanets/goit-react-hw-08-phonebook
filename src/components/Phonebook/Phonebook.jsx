import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';

import { selectContacts, selectError, selectIsLoading } from '../../redux/contacts/slice';
import { fetchContacts } from '../../redux/contacts/operation';

export const Phonebook = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
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
    <div className=" min-h-screen bg-neutral ">
      <div className="flex flex-row justify-start">
        <div className="p-2.5 max-w-md">
          <ContactForm />
          <Filter />
        </div>
        {contacts.length ? (
          <Contacts />
        ) : (
          <h2 className="text-2xl mt-[80px] text-white">No contacts</h2>
        )}
      </div>
    </div>
  );
};
