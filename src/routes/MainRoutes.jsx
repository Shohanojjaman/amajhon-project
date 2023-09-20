import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layouts/Layout';
import Home from '../components/Home/Home';

const MainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
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
