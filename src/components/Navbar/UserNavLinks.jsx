import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logoutThunk } from '../../redux/auth/operation';
import { selectContacts } from '../../redux/contacts/slice';

export const UserNavLinks = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1 flex gap-1 items-baseline">
        <li>
          <NavLink to="/contacts">
            {contacts.length ? `Contacts (${contacts.length})` : 'Contacts'}
          </NavLink>
        </li>
        <li>
          <button type="button" onClick={() => dispatch(logoutThunk())}>
            Exit
          </button>
        </li>
      </ul>
    </div>
  );
};
