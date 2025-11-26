import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/our-work', label: 'Our Work' },
    { path: '/impact-stories', label: 'Impact Stories' },
    { path: '/resources', label: 'Resources' },
    { path: '/get-involved', label: 'Get Involved' },
    { path: '/contact', label: 'Contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-heading font-bold text-primary">
                MISSION
              </span>
              <span className="text-xs md:text-sm text-gray-600 italic">
                Engross, Enable, Empower
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/get-involved"
              className="ml-4 btn-primary text-sm py-2 px-5"
            >
              Donate
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-700 hover:text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-primary bg-primary/10 border-l-4 border-primary'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="px-4 mt-4">
              <Link
                to="/get-involved"
                onClick={() => setIsMenuOpen(false)}
                className="block text-center btn-primary w-full"
              >
                Donate
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
