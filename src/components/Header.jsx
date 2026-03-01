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
    { path: '/contact', label: 'Contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-primary/5 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <img 
              src="/images/assets/logo.jpg" 
              alt="MISSION Logo" 
              className="h-14 md:h-16 w-auto object-contain"
            />
            <div className="flex flex-col border-l border-primary/10 pl-4 hidden sm:flex">
              <span className="text-xl md:text-2xl font-heading font-black text-primary tracking-tight leading-none">
                MISSION
              </span>
              <span className="text-[10px] text-accent font-bold uppercase tracking-[0.2em] mt-1">
                Educate • Uplift • Empower
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 relative group ${
                    isActive
                      ? 'text-primary'
                      : 'text-gray-600 hover:text-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-accent transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to="/get-involved"
              className="ml-6 bg-primary hover:bg-accent text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-accent/20"
            >
              Support Us
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
          <nav className="lg:hidden py-6 border-t border-primary/5 bg-white">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-200 ${
                    isActive
                      ? 'text-primary bg-primary/5 border-l-4 border-accent'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="px-4 mt-6">
              <Link
                to="/get-involved"
                onClick={() => setIsMenuOpen(false)}
                className="block text-center bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg shadow-primary/10"
              >
                Support Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
