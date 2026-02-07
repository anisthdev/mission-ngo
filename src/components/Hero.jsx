import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars

const Hero = ({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  images = [],
  height = "h-[700px] md:h-[850px]",
  interval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const fallbackImage = 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600';
  const displayImages = images.length > 0 ? images : [fallbackImage];

  return (
    <div className={`relative ${height} flex items-center justify-center overflow-hidden bg-gray-900`}>
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "linear" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${displayImages[currentIndex]})`
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-white text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary-light text-sm md:text-base font-semibold mb-2 uppercase tracking-wider"
            >
              {subtitle}
            </motion.p>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-4 md:mb-6 leading-tight"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-200 mb-6 md:mb-8 max-w-2xl"
            >
              {description}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            {primaryButton && (
              <Link
                to={primaryButton.link}
                className="btn-primary inline-block text-center"
              >
                {primaryButton.text}
              </Link>
            )}
            {secondaryButton && (
              <Link
                to={secondaryButton.link}
                className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 inline-block text-center"
              >
                {secondaryButton.text}
              </Link>
            )}
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      {displayImages.length > 1 && (
        <div className="absolute bottom-8 right-8 z-20 flex gap-2">
          {displayImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary w-8' : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 bg-white/70 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
