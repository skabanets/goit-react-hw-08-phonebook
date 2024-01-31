import { Route, Routes } from 'react-router-dom';
import { Phonebook } from './Phonebook/Phonebook';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';
import { PublicRoute } from 'routes/PublicRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from '../redux/auth/operation';
import { useEffect } from 'react';
import { selectIsError, selectIsLoading, selectIsRefresh } from '../redux/auth/slice';
import { Loader } from './Loader/Loader';
import { toast } from 'react-toastify';

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
              <Phonebook />
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
