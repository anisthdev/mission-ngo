import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { organizationInfo } from '../data/organizationData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/our-work', label: 'Our Work' },
    { path: '/impact-stories', label: 'Impact Stories' }
  ];

  const resourceLinks = [
    { path: '/resources', label: 'Publications' },
    { path: '/resources', label: 'Annual Reports' },
    { path: '/get-involved', label: 'Volunteer' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <footer className="bg-primary-dark text-gray-300">
      {/* Top Branding Section */}
      <div className="bg-white/5 py-12 border-b border-white/5">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="bg-white p-2 rounded-xl">
              <img 
                src="/images/assets/logo.jpg" 
                alt="MISSION New Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="hidden md:block h-12 w-px bg-white/10"></div>
            <div className="flex flex-col items-center md:items-start opacity-80 hover:opacity-100 transition-opacity">
              <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-2 font-bold">Our Legacy</span>
              <div className="bg-white p-2 rounded-lg">
                <img 
                  src="/images/assets/logo-old.jpg" 
                  alt="MISSION Old Logo" 
                  className="h-10 w-auto object-contain"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
            </div>
          </div>
          <div className="flex space-x-6">
            <a
              href={organizationInfo.contacts.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 text-white"
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href={organizationInfo.contacts.socialMedia.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 text-white"
              aria-label="YouTube"
            >
              <FaYoutube size={18} />
            </a>
            <a
              href={organizationInfo.contacts.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 text-white"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href={organizationInfo.contacts.socialMedia.x}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 text-white"
              aria-label="X (Twitter)"
            >
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* About Column */}
          <div className="lg:pr-8">
            <h4 className="text-lg font-heading font-bold text-white mb-6 uppercase tracking-widest">
              Our Journey
            </h4>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              {organizationInfo.about.substring(0, 160)}...
            </p>
            <Link to="/about" className="text-secondary-light font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
              Read Our Full Story →
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold text-white mb-6 uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-secondary-light transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-secondary-light transition-all mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-heading font-bold text-white mb-6 uppercase tracking-widest">
              Get Involved
            </h4>
            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-secondary-light transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-secondary-light transition-all mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-bold text-white mb-6 uppercase tracking-widest">
              Contact Us
            </h4>
            <div className="space-y-6 text-sm">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-secondary-light flex-shrink-0">
                  <FaMapMarkerAlt size={16} />
                </div>
                <span className="text-gray-400 leading-relaxed">{organizationInfo.contacts.registeredOffice.address}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-secondary-light flex-shrink-0">
                  <FaEnvelope size={16} />
                </div>
                <a href="mailto:info@missionodisha.co.in" className="text-gray-400 hover:text-secondary-light transition-colors">
                  info@missionodisha.co.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black/40 py-8 border-t border-white/5">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-2">Statutory Registrations</p>
              <p className="text-[10px] text-gray-600">
                District: {organizationInfo.registrations.districtNumber} | 80G: {organizationInfo.registrations.urn80G} | NITI Aayog: {organizationInfo.registrations.nitiAayogUID}
              </p>
            </div>
            <div className="text-[10px] text-gray-500 text-center md:text-right uppercase tracking-[0.2em] font-bold">
              <p>&copy; {currentYear} MISSION. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
