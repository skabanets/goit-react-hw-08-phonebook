import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectUser } from '../../redux/auth/slice';
import { logoutThunk } from '../../redux/auth/operation';
import { selectContacts } from '../../redux/contacts/slice';

export const UserNavLinks = () => {
  const contacts = useSelector(selectContacts);
  const { name, email } = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li>
          <NavLink to="/contacts">
            {contacts.length ? `Contacts (${contacts.length})` : 'Contacts'}
          </NavLink>
        </li>
        <li>
          <details className="px-4">
            <summary>{name}</summary>
            <ul className="p-2 -translate-x-2/4  bg-secondary rounded-t-none">
              <li>
                <p>{email}</p>
              </li>
              <li>
                <button type="button" onClick={() => dispatch(logoutThunk())}>
                  Exit
                </button>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
};
