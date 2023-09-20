import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layouts/Layout';

const MainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
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
    ],
  },
]);

export default MainRoutes;
