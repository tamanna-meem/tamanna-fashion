import { useState } from 'react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import Footer from '@/components/Footer';
import useProducts from '@/hooks/useProducts';

const HomePage = () => {
  const { products, loading, error } = useProducts();

  // Handle form submit for Contact Us section
  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Here you can add form submission logic, e.g., send to API
    alert('Message sent! (This is a demo)');
    e.target.reset();
  };

  return (
    <div id="home" className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Hero Section with Banner */}
        <section  className="relative bg-indigo-900 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-indigo-900 opacity-75"></div>
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Fashion Banner"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="container mx-auto px-4 py-32 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
              Welcome to Tamanna Fashion
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
              Where Elegance Meets Contemporary Style
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="#products" 
                className="bg-white text-indigo-900 px-8 py-3 rounded-full font-medium hover:bg-indigo-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Shop Now
              </a>
              <a 
                href="#about" 
                className="border-2 border-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-indigo-900 transition-all duration-300"
              >
                Our Story
              </a>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-indigo-900">Shop By Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Women's Wear", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
                { name: "Men's Collection", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
                { name: "Kids Fashion", image: "https://images.unsplash.com/photo-1584847689007-3a9fe6ba7132?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                { name: "Accessories", image: "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
              ].map((category, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent flex items-end p-4">
                    <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                  </div>
                  <a href="#" className="absolute inset-0 z-10"></a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 bg-indigo-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-indigo-900 mb-2">Our Collections</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
            </div>
            
            {loading ? (
              <LoadingSpinner />
            ) : error ? (
              <div className="text-center text-red-500">{error}</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <div className="text-indigo-900 mb-4 font-medium">OUR STORY</div>
                <h2 className="text-3xl font-bold mb-6 text-indigo-900">Redefining Fashion Since 2010</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Tamanna Fashion began with a simple vision: to bring high-quality, stylish clothing to fashion-conscious individuals at affordable prices. 
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Today, we've grown into one of Bangladesh's most trusted fashion destinations, known for our curated collections and exceptional customer service.
                </p>
                <div className="flex space-x-4">
                  <div className="text-center p-4 bg-indigo-50 rounded-lg">
                    <div className="text-3xl font-bold text-indigo-900">10+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-indigo-50 rounded-lg">
                    <div className="text-3xl font-bold text-indigo-900">5000+</div>
                    <div className="text-gray-600">Happy Customers</div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="About Tamanna Fashion"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-white bg-indigo-100 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-indigo-900 font-bold text-xl">Since 2010</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-indigo-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">What Our Customers Say</h2>
              <div className="w-20 h-1 bg-white mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "The quality of clothes from Tamanna Fashion is exceptional. I always get compliments when I wear their pieces!",
                  name: "Ayesha Rahman",
                  role: "Loyal Customer"
                },
                {
                  quote: "Their customer service is outstanding. They helped me find the perfect outfit for my sister's wedding.",
                  name: "Rahim Khan",
                  role: "First-time Buyer"
                },
                {
                  quote: "I love how Tamanna Fashion keeps up with the latest trends while maintaining affordable prices.",
                  name: "Tasnim Ahmed",
                  role: "Fashion Blogger"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="text-yellow-300 mb-4">★★★★★</div>
                  <p className="italic mb-6">"{testimonial.quote}"</p>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-indigo-200 text-sm">{testimonial.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-indigo-900 mb-2">Get In Touch</h2>
                <p className="text-gray-600 max-w-lg mx-auto">Have questions or feedback? We'd love to hear from you!</p>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <div className="bg-indigo-50 p-8 rounded-xl h-full">
                    <h3 className="text-xl font-bold text-indigo-900 mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-indigo-100 p-2 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Our Location</h4>
                          <p className="text-gray-600">123 Fashion Street, Dhaka 1212, Bangladesh</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-indigo-100 p-2 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Phone Number</h4>
                          <p className="text-gray-600">+880 1234 567890</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-indigo-100 p-2 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Email Address</h4>
                          <p className="text-gray-600">info@tamannafashion.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                    <h3 className="text-xl font-bold text-indigo-900 mb-6">Send Us a Message</h3>
                    <form onSubmit={handleContactSubmit}>
                      <div className="mb-4">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          placeholder="Your Message"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          required
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-indigo-900 text-white py-3 px-4 rounded-lg hover:bg-indigo-800 transition-colors font-medium"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;