import { useDispatch, useSelector } from 'react-redux';

import { selectFilters } from '../../redux/filter/slice';
import { selectContacts } from '../../redux/contacts/slice';
import { deleteContact } from '../../redux/contacts/operation';

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul className="flex gap-12 flex-wrap mt-[80px] text-lg px-10">
      {filteredContacts.length !== 0 ? (
        filteredContacts.map(item => (
          <li key={item.id}>
            <div className="card w-72 bg-base-100 shadow-xl p-1 min-h-40">
              <div className="card-body p-2.5">
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-square btn-sm"
                    type="button"
                    onClick={() => dispatch(deleteContact(item.id))}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex gap-6 items-center">
                  <div class="avatar placeholder">
                    <div class=" text-neutral-content rounded-full w-16 bg-primary">
                      <span>{item.name[0]}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>{item.name}</span>
                    <span>{item.number}</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))
      ) : (
        <h2 className="text-2xl text-white">Could not find contacts with this name!</h2>
      )}
    </ul>
  );
};
