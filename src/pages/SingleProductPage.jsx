import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoadingSpinner from '@/components/LoadingSpinner';
import { fetchSingleProduct } from '@/utils/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchSingleProduct(id);
        setProduct(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  const handleAddToCart = () => {
    alert(`Added ${quantity} "${product.name}" to cart!`);
    // Replace with your real add to cart logic
  };

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-center text-red-500 py-8">{error}</div>;
  if (!product) return <div className="text-center py-8">Product not found</div>;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Product Images Section */}
            <div className="lg:w-1/2">
              <div className="bg-white p-4 rounded-xl shadow-md">
                {/* Main Image */}
                <div className="relative aspect-square w-full mb-4 rounded-lg overflow-hidden">
                  <img
                    src={product.images?.[activeImage]?.secure_url || 'https://via.placeholder.com/800'}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    loading="eager"
                  />
                </div>

                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-4 gap-2">
                  {product.images?.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`aspect-square rounded-md overflow-hidden border-2 ${activeImage === index ? 'border-indigo-500' : 'border-transparent'}`}
                    >
                      <img
                        src={image.secure_url}
                        alt={`${product.name} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Product Video */}
                {product.video?.secure_url && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Product Video</h3>
                    <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
                      <video
                        controls
                        className="w-full h-full object-contain"
                        poster={product.images?.[0]?.secure_url}
                      >
                        <source src={product.video.secure_url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Product Details Section */}
            <div className="lg:w-1/2">
              <div className="bg-white p-6 rounded-xl shadow-md h-full">
                {/* Product Header */}
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStarHalfAlt} />
                    </div>
                    <span className="text-gray-500 text-sm">(24 reviews)</span>
                  </div>
                </div>

                {/* Price Section */}
                <div className="mb-6 p-4 bg-indigo-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-indigo-700">
                        ${Number(product.price).toFixed(2)}
                      </span>
                      {product.discount && Number(product.discount) < Number(product.price) && (
                        <span className="ml-2 text-lg text-gray-500 line-through">
                          ${Number(product.discount).toFixed(2)}
                        </span>
                      )}
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {product.status ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3 text-gray-800">Description</h2>
                  <p className="text-gray-700 whitespace-pre-line">
                    {product.description || 'No description available.'}
                  </p>
                </div>

                {/* Additional Details */}
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3 text-gray-800">Product Details</h2>
                  <div className="space-y-2">
                    <div className="flex">
                      <span className="text-gray-600 font-medium w-32">Category:</span>
                      <span className="text-gray-800">
                        {product.category?.name || 'Uncategorized'}
                      </span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-600 font-medium w-32">Product ID:</span>
                      <span className="text-gray-800">{product._id}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-600 font-medium w-32">Added On:</span>
                      <span className="text-gray-800">
                        {new Date(product.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-600 font-medium w-32">Last Updated:</span>
                      <span className="text-gray-800">
                        {new Date(product.updatedAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3 text-gray-800">Quantity</h2>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-lg bg-gray-100 text-gray-600 hover:bg-gray-200"
                    >
                      -
                    </button>
                    <div className="w-16 h-10 flex items-center justify-center border-t border-b border-gray-300 bg-white text-center">
                      {quantity}
                    </div>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-lg bg-gray-100 text-gray-600 hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-3">
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                    disabled={!product.status}
                  >
                    {product.status ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                  <button className="w-full border border-indigo-600 text-indigo-600 hover:bg-indigo-50 py-3 px-6 rounded-lg font-medium transition-colors">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SingleProductPage;