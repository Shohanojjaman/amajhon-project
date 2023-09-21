import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import DashboardLayout from '../components/Layouts/DashboardLayout';
import Layout from '../components/Layouts/Layout';
import ProductDetails from '../components/Products/ProductDetails';
import Products from '../components/Products/Products';

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
            path: '/dashboard/home',
            element: <div>Dash</div>,
          },
          {
            path: '/dashboard/profile',
            element: <div>profile</div>,
          },
          {
            path: '/dashboard/editProfile',
            element: <div>Edit Profile</div>,
          },
        ],
      },
    ],
  },
]);

export default MainRoutes;
