import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
  const product = useLoaderData();
  const { title, description, price, discountPercentage, rating, stock, brand, category, images } = product;
  const newPrice = price - (price * (discountPercentage / 100)).toFixed(2);
  return (
    <div className="container mx-auto max-sm:px-5 flex flex-col lg:flex-row gap-6 my-6">
      <div className="w-full lg:w-1/2">
        <div
          style={{
            paddingBottom: '30px',
            position: 'relative',
          }}>
          <Carousel
            className=""
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 1,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 1,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable>
            {images?.map((image, index) => (
              <img
                key={index}
                src={image}
                style={{
                  display: 'block',
                  height: 'auto',
                  margin: 'auto',
                  width: 'auto',
                }}
              />
            ))}
          </Carousel>
        </div>
      </div>
      <div className=" w-full lg:w-1/2 space-y-4">
        <h3 className="text-4xl font-bold">{title}</h3>
        <div className="space-y-2">
          <p className="font-bold">
            Brand: <span className="font-normal">{brand}</span>
          </p>
          <p className="font-bold">
            Price:{' '}
            <span className="font-normal">
              <del className="italic">${price}</del> <span className="text-2xl font-semibold">${newPrice}</span>
            </span>
          </p>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{rating}</p>
          </div>
          <p>{description}</p>
          <p className="font-bold">
            Stock:{' '}
            {stock < 100 ? (
              <span className="font-normal">
                only <span className="text-xl font-medium">{stock}</span> piece available
              </span>
            ) : (
              <span className="font-normal">
                <span className="text-xl font-medium">{stock}</span> piece available
              </span>
            )}
          </p>
          <p className="font-bold">
            Category: <span className="font-normal">{category}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
