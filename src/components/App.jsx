import { Route, Routes } from 'react-router-dom';
import { Phonebook } from './Phonebook/Phonebook';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';
import { PublicRoute } from 'routes/PublicRoute';
import { PrivateRoute } from 'routes/PrivateRoute';

export const App = () => {
  return (
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
