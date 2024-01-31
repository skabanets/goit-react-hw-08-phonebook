import { Navbar } from 'components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ToastContainer autoClose={3000} />
    </div>
  );
};
