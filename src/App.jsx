import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Main from './pages/Main';


const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
};

export default App;
