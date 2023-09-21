import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import DashboardLayout from '../components/Layouts/DashboardLayout';
import Layout from '../components/Layouts/Layout';
import ProductDetails from '../components/Products/ProductDetails';
import Products from '../components/Products/Products';
import ComingSoon from '../components/ComingSoon/ComingSoon';

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
        element: <Products></Products>,
        loader: () => fetch(`https://dummyjson.com/products`),
      },
      {
        path: '/products/:id',
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) => fetch(`https://dummyjson.com/products/${params.id}`),
      },
      {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: '/dashboard',
            element: <ComingSoon page={`Dashboard`}></ComingSoon>,
          },
          {
            path: '/dashboard/profile',
            element: <ComingSoon page={`Profile`}></ComingSoon>,
          },
          {
            path: '/dashboard/editProfile',
            element: <ComingSoon page={`Edit Profile`}></ComingSoon>,
          },
        ],
      },
    ],
  },
]);

export default MainRoutes;
