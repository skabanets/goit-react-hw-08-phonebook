import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { UserNavLinks } from './UserNavLinks';
import { AuthNavLinks } from './AuthNavLinks';

import { selectIsLoggedIn, selectUser } from '../../redux/auth/slice';

export const Navbar = () => {
  const { name } = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className="navbar bg-base-content text-white font-bold">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          {name ? `PHONEBOOK (${name})` : 'PHONEBOOK'}
        </Link>
      </div>
      {isLoggedIn ? <UserNavLinks /> : <AuthNavLinks />}
    </div>
  );
};
