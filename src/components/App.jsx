import { Route, Routes } from 'react-router-dom';
import { Phonebook } from './Phonebook/Phonebook';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Phonebook />} />
      </Route>
    </Routes>
  );
};
