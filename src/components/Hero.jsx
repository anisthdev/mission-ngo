import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { FaShieldAlt, FaArrowRight } from 'react-icons/fa';

const Hero = ({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  images = [],
  height = "h-[800px] lg:h-screen",
  interval = 6000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const fallbackImage = '/images/assets/slideshow-1.jpg';
  const displayImages = images.length > 0 ? images : [fallbackImage];

  return (
    <div className={`relative ${height} flex items-center overflow-hidden bg-gray-900`}>
      {/* Ken Burns Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.0 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.5 }, scale: { duration: interval / 1000 + 1, ease: "linear" } }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${displayImages[currentIndex]})`
            }}
          >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Container */}
      <div className="container-custom relative z-10 w-full">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          
          {/* Left: Glassmorphic Text Card */}
          <div className="md:col-span-8 lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden"
            >
              {/* Decorative accent line */}
              <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>

              {subtitle && (
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="h-px w-8 bg-primary-light"></span>
                  <p className="text-primary-light text-sm font-bold uppercase tracking-widest">
                    {subtitle}
                  </p>
                </div>
              )}
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-md">
                {title}
              </h1>
              
              {description && (
                <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-xl drop-shadow-sm">
                  {description}
                </p>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4">
                {primaryButton && (
                  <Link
                    to={primaryButton.link}
                    className="btn-primary inline-flex items-center justify-center gap-2 group"
                  >
                    {primaryButton.text}
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
                {secondaryButton && (
                  <Link
                    to={secondaryButton.link}
                    className="px-6 py-3 rounded-lg font-semibold border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                  >
                    {secondaryButton.text}
                  </Link>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right: Floating Trust Elements (Optional, creates balance) */}
          <div className="hidden md:block md:col-span-4 lg:col-span-5 relative h-full">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
               className="absolute bottom-0 right-0 lg:right-12 bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4 max-w-xs"
             >
               <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                 <FaShieldAlt size={20} />
               </div>
               <div>
                 <p className="text-white font-bold text-lg">Govt. Registered</p>
                 <p className="text-white/70 text-xs">Since 2002 • 80G & 12A Certified</p>
               </div>
             </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Counter/Indicators */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-4">
        <span className="text-white/80 font-mono text-sm">
          {String(currentIndex + 1).padStart(2, '0')}
        </span>
        <div className="flex gap-1.5">
          {displayImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <span className="text-white/40 font-mono text-sm">
          {String(displayImages.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

export default Hero;
