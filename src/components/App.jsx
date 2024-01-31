import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Layout } from './Layout/Layout';
import { PublicRoute } from 'routes/PublicRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import { Loader } from './Loader/Loader';

import { refreshThunk } from '../redux/auth/operation';
import { selectIsError, selectIsLoading, selectIsRefresh } from '../redux/auth/slice';

const Home = lazy(() => import('pages/Home/Home'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));

export const App = () => {
  const isRefresh = useSelector(selectIsRefresh);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    toast.error('Something went wrong! Reload page or try again later.');
  }

  return isRefresh ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Route>
    </Routes>
  );
};
