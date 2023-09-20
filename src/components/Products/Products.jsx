import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
  const { products } = useLoaderData();
  return (
    <div className="container mx-auto max-sm:px-5 grid grid-cols-3 gap-6">
      {products?.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
