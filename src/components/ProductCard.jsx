import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faEye, faStar } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product }) => {
  const imageUrl = product.images?.[0]?.secure_url || 'https://via.placeholder.com/400';

  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-50 flex flex-col h-full">
      {/* Extra Tall Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={product.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

        
        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {product.status && (
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
              In Stock
            </span>
          )}
          {product.discount && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
              {Math.round((product.discount / product.price) * 100)}% OFF
            </span>
          )}
        </div>
        
        {/* Quick Action Buttons */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <div className="flex space-x-3">
          <Link to={`/single-product/${product._id}`}>
  <button className="bg-white/90 hover:bg-white text-indigo-700 p-3 rounded-full shadow-lg transform transition-all hover:scale-110">
    <FontAwesomeIcon icon={faEye} />
  </button>
</Link>

            <button className="bg-white/90 hover:bg-white text-indigo-700 p-3 rounded-full shadow-lg transform transition-all hover:scale-110">
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Product Details */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-2 flex justify-between items-start">
          <span className="text-indigo-400 text-xs font-semibold uppercase tracking-wide">
            {product.category?.name || 'Uncategorized'}
          </span>
          <div className="flex items-center bg-indigo-50 px-2 py-1 rounded">
            <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-xs mr-1" />
            <span className="text-gray-700 text-xs font-medium">4.8</span>
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-indigo-600 transition-colors">
          <Link to={`/single-product/${product._id}`} className="line-clamp-2">
            {product.name}
          </Link>
        </h3>
        
        <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-1">
          {product.description}
        </p>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-xl font-bold text-indigo-700">${product.price}</span>
              {product.discount && (
                <span className="ml-2 text-sm text-gray-400 line-through">${product.discount}</span>
              )}
            </div>
            <span className="text-xs text-gray-500">Free Shipping</span>
          </div>
          
          <div className="flex space-x-3">
            <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg flex items-center justify-center transition-colors font-medium">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
              Add to Cart
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition-colors">
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Wishlist Button */}
      <button className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-md text-gray-400 hover:text-red-500 transition-colors">
        <FontAwesomeIcon icon={faHeart} />
      </button>
    </div>
  );
};

export default ProductCard;