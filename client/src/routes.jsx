import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Grid from './components/grid/grid';

const AppRoutes = () => (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Grid />} />
      </Routes>
    </BrowserRouter>
);

export default AppRoutes;