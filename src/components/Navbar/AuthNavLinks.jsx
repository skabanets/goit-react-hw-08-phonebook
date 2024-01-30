import { NavLink } from 'react-router-dom';

export const AuthNavLinks = () => {
  return (
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </div>
  );
};
