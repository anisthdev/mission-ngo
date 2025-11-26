import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
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
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              MISSION
            </h3>
            <p className="text-sm mb-4 text-gray-400 italic">
              {organizationInfo.tagline}
            </p>
            <p className="text-sm mb-4">
              {organizationInfo.about.substring(0, 150)}...
            </p>
            <div className="flex space-x-4">
              <a
                href={`https://facebook.com/${organizationInfo.contacts.socialMedia.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href={`https://youtube.com/${organizationInfo.contacts.socialMedia.youtube}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span>{organizationInfo.contacts.registeredOffice.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary flex-shrink-0" />
                <a href="mailto:info@missionodisha.co.in" className="hover:text-primary transition-colors">
                  info@missionodisha.co.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary flex-shrink-0" />
                <span>+91-XXXX-XXXXXX</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statutory Details */}
      <div className="bg-gray-950 py-4">
        <div className="container-custom">
          <div className="text-xs text-gray-500 text-center md:text-left">
            <p>
              <span className="font-semibold">Registration:</span> {organizationInfo.registrations.districtNumber} (District), {organizationInfo.registrations.igrNumber} (IGR) |
              <span className="ml-2 font-semibold">PAN:</span> {organizationInfo.registrations.pan} |
              <span className="ml-2 font-semibold">80G:</span> {organizationInfo.registrations.urn80G} |
              <span className="ml-2 font-semibold">NITI Aayog:</span> {organizationInfo.registrations.nitiAayogUID}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>
              &copy; {currentYear} MISSION, Dhenkanal. All rights reserved.
            </p>
            <p className="mt-2 md:mt-0">
              Built with ❤️ for empowering rural communities
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
