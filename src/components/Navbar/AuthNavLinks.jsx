import { NavLink } from 'react-router-dom';

export const AuthNavLinks = () => {
  return (
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1 flex items-center">
        <li className="p-1">
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className="p-1">
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </div>
  );
};
