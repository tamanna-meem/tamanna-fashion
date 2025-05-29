import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faSearch, 
  faShoppingBag, 
  faUser,
  faBars,
  faTimes,
  faHeart
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        {/* Top Row - Logo, Search, User Actions */}
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-indigo-700 flex items-center font-serif">
            <span className="bg-indigo-700 text-white px-2 py-1 rounded mr-2">T</span>
            <span>Tamanna Fashion</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for dresses, accessories..."
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-indigo-700 text-white rounded-r-md hover:bg-indigo-800 transition-colors">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/wishlist" className="hidden md:block text-gray-700 hover:text-indigo-700 transition-colors">
              <FontAwesomeIcon icon={faHeart} className="text-xl" />
            </Link>
            <Link to="/account" className="hidden md:block text-gray-700 hover:text-indigo-700 transition-colors">
              <FontAwesomeIcon icon={faUser} className="text-xl" />
            </Link>
            <Link to="/cart" className="relative text-gray-700 hover:text-indigo-700 transition-colors">
              <FontAwesomeIcon icon={faShoppingBag} className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-indigo-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <button 
              className="md:hidden text-gray-700 hover:text-indigo-700 transition-colors"
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="text-xl" />
            </button>
          </div>
        </div>

        {/* Bottom Row - Navigation and Categories */}
        <div className="flex items-center justify-between py-2 border-t border-gray-100">
          {/* Categories Dropdown */}
          <div className="relative hidden md:block group">
            <button className="flex items-center px-4 py-2 bg-indigo-700 text-white rounded-md hover:bg-indigo-800 transition-colors">
              <span className="mr-2">Shop Categories</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-20 hidden group-hover:block border border-gray-100">
              <div className="py-1">
                <Link to="/category/women" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors">Women's Fashion</Link>
                <Link to="/category/men" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors">Men's Fashion</Link>
                <Link to="/category/kids" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors">Kids & Babies</Link>
                <Link to="/category/jewelry" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors">Jewelry & Accessories</Link>
                <Link to="/category/shoes" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors">Shoes & Bags</Link>
              </div>
            </div>
          </div>

          {/* Main Navigation - Desktop */}
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-indigo-700 font-medium transition-colors">
              Home
            </a>
            <a href="#products" className="text-gray-700 hover:text-indigo-700 font-medium transition-colors">
              Collections
            </a>
            <a href="#about" className="text-gray-700 hover:text-indigo-700 font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-700 font-medium transition-colors">
              Contact Us
            </a>
          </nav>

          {/* Search Bar - Mobile */}
          <div className="md:hidden w-full mx-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search fashion items..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-700">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white py-4 px-2 shadow-lg rounded-b-md border border-gray-100">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-indigo-700 py-2 px-4 transition-colors" onClick={toggleMobileMenu}>
                Home
              </Link>
              <Link to="/new-arrivals" className="text-gray-700 hover:text-indigo-700 py-2 px-4 transition-colors" onClick={toggleMobileMenu}>
                New Arrivals
              </Link>
              <Link to="/collections" className="text-gray-700 hover:text-indigo-700 py-2 px-4 transition-colors" onClick={toggleMobileMenu}>
                Collections
              </Link>
              <Link to="/sale" className="text-indigo-700 py-2 px-4 font-medium" onClick={toggleMobileMenu}>
                Sale
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-indigo-700 py-2 px-4 transition-colors" onClick={toggleMobileMenu}>
                Fashion Blog
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <Link to="/wishlist" className="flex items-center text-gray-700 hover:text-indigo-700 py-2 px-4 transition-colors" onClick={toggleMobileMenu}>
                  <FontAwesomeIcon icon={faHeart} className="mr-3" />
                  Wishlist
                </Link>
                <Link to="/account" className="flex items-center text-gray-700 hover:text-indigo-700 py-2 px-4 transition-colors" onClick={toggleMobileMenu}>
                  <FontAwesomeIcon icon={faUser} className="mr-3" />
                  My Account
                </Link>
                <Link to="/cart" className="flex items-center text-gray-700 hover:text-indigo-700 py-2 px-4 transition-colors" onClick={toggleMobileMenu}>
                  <FontAwesomeIcon icon={faShoppingBag} className="mr-3" />
                  Bag (3)
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header