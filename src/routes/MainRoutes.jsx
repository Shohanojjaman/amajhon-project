import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
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
        element: <section>Dashboard!</section>,
      },
    ],
  },
]);

export default MainRoutes;
