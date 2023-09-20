import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { id, title, thumbnail, description, price } = product;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-60 object-cover w-full" src={thumbnail} alt={`Image of ${title}`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/products/${id}`}>
            <button className="btn btn-primary">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
