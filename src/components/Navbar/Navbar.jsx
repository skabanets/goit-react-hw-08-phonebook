import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/slice';
import { UserNavLinks } from './UserNavLinks';
import { AuthNavLinks } from './AuthNavLinks';

export const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);

  return (
    <div className="navbar bg-indigo-500 text-white font-bold">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          PHONEBOOK
        </Link>
      </div>
      {isLoggedIn ? <UserNavLinks /> : <AuthNavLinks />}
    </div>
  );
};
