import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBullhorn, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';

const newsItems = [
  { text: "Annual Report 2024-25 is now available for download", link: "/reports/AR 2024-25.pdf", isPdf: true },
  { text: "MISSION NGO is now 80G certified - Support our mission and save on taxes", link: "/reports/80g.pdf", isPdf: true },
  { text: "Empowering over 190,000 households across 18 districts of Odisha", link: "/impact-stories", isPdf: false },
  { text: "Annual Report 2023-24 available for review", link: "/reports/AR 2023-24.pdf", isPdf: true },
  { text: "Partner with us for sustainable community development and livelihoods", link: "/get-involved", isPdf: false }
];

const NewsMarquee = () => {
  return (
    <div className="bg-accent-dark text-white py-2 overflow-hidden border-y border-white/10 relative flex items-center h-12">
      {/* Fixed Label */}
      <div className="absolute left-0 z-20 bg-accent-dark pl-4 pr-4 md:pr-6 h-full flex items-center gap-2 shadow-[15px_0_25px_-5px_rgba(211,84,0,1)]">
        <FaBullhorn className="text-lg animate-pulse" />
        <span className="hidden md:block font-bold uppercase tracking-widest text-xs border-r border-white/30 pr-4 whitespace-nowrap">Announcements</span>
      </div>
      
      {/* Scrolling Content */}
      <div className="flex-1 overflow-hidden h-full">
        <motion.div 
          className="flex whitespace-nowrap gap-16 items-center h-full w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 50, 
            ease: "linear" 
          }}
        >
          {/* We repeat the items to create a continuous loop effect */}
          {[...newsItems, ...newsItems].map((item, index) => (
            <div key={index} className="flex items-center gap-3 group px-4">
              <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
              {item.isPdf ? (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-warm-sand transition-colors font-medium text-xs md:text-sm"
                >
                  {item.text}
                  <FaFilePdf className="text-white/60 group-hover:text-white transition-colors" />
                </a>
              ) : (
                <Link 
                  to={item.link}
                  className="flex items-center gap-2 hover:text-warm-sand transition-colors font-medium text-xs md:text-sm"
                >
                  {item.text}
                  <FaExternalLinkAlt className="text-white/60 group-hover:text-white text-[10px] transition-colors" />
                </Link>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NewsMarquee;
