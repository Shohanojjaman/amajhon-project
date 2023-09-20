import { createBrowserRouter } from 'react-router-dom';

const MainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <section>Home</section>,
  },
  {
    path: '/products',
    element: <section>Products</section>,
  },
  {
    path: '/dashboard',
    element: <section>Dashboard!</section>,
  },
]);

export default MainRoutes;
