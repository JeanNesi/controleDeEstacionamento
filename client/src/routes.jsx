import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './screens/dashboard/Dashboard';
import Login from './screens/login/login';

const AppRoutes = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
);

export default AppRoutes;