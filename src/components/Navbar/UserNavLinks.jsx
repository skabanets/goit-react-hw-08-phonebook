import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUser } from '../../redux/auth/slice';

export const UserNavLinks = () => {
  const { name, email } = useSelector(selectUser);
  return (
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li>
          <details className="px-4">
            <summary>{name}</summary>
            <ul className="p-2 -translate-x-2/4  bg-indigo-400 rounded-t-none">
              <li>
                <p>{email}</p>
              </li>
              <li>
                <button type="button">Exit</button>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
};
