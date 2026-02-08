import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { successStories } from '../data/storiesData';
import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaQuoteLeft, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const StoryDetail = () => {
  const { slug } = useParams();
  const story = successStories.find(s => s.slug === slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  if (!story) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-warm-sand">
        <h2 className="text-3xl font-heading font-bold text-primary mb-4">Story Not Found</h2>
        <Link to="/impact-stories" className="btn-primary">Back to Impact Stories</Link>
      </div>
    );
  }

  const galleryImages = story.fullStory?.gallery || [story.image];

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-warm-sand min-h-screen">
      {/* Header / Hero */}
      <section className="relative h-[500px] md:h-[600px] flex items-end overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src={story.image} 
            alt={story.title} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10 pb-16">
          <Link to="/impact-stories" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 font-bold text-xs uppercase tracking-widest transition-colors group">
            <FaArrowLeft size={10} className="group-hover:-translate-x-1 transition-transform" /> Back to all stories
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="bg-accent text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6 inline-block">
              {story.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              {story.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-accent" />
                {story.location}
              </div>
              {story.date && (
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-accent" />
                  {story.date}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Main Narrative */}
            <div className="lg:col-span-8">
              <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-primary/5 border border-primary/5 relative">
                <FaQuoteLeft className="text-accent/10 text-6xl absolute top-10 left-10" />
                
                <div className="relative z-10 space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-heading font-bold text-primary">The Context</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {story.fullStory?.introduction}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-heading font-bold text-primary">The Challenge</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {story.fullStory?.challenge}
                    </p>
                  </div>

                  <div className="p-8 bg-warm-sand rounded-3xl border-l-4 border-accent italic">
                    <p className="text-primary font-heading text-xl leading-relaxed">
                      "{story.story}"
                    </p>
                    <p className="mt-4 text-sm font-bold uppercase tracking-widest text-accent">— {story.name}</p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-heading font-bold text-primary">The Intervention</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {story.fullStory?.intervention}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-heading font-bold text-primary">The Result & Impact</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {story.fullStory?.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar / Quick Info */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-primary text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                <h3 className="text-xl font-heading font-bold mb-6 relative z-10">Key Impact</h3>
                <div className="text-3xl font-heading font-bold text-secondary-light mb-2">
                  {story.impact}
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  Through systematic intervention and community participation, we achieved significant socioeconomic growth.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-primary/5 shadow-lg">
                <h3 className="font-heading font-bold text-primary mb-4">Program Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Beneficiary</p>
                    <p className="font-bold text-gray-800">{story.name}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Location</p>
                    <p className="font-bold text-gray-800">{story.location}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Thematic Area</p>
                    <p className="font-bold text-gray-800">{story.category}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      {galleryImages.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">Event Gallery</h2>
              <div className="h-1 w-20 bg-accent mx-auto"></div>
            </div>
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {galleryImages.map((img, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => openLightbox(idx)}
                >
                  <img 
                    src={img} 
                    alt={`Story Gallery ${idx}`} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setLightboxOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
              onClick={() => setLightboxOpen(false)}
            >
              <FaTimes size={32} />
            </button>

            <button 
              className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors p-4 bg-white/5 hover:bg-white/10 rounded-full"
              onClick={prevImage}
            >
              <FaChevronLeft size={24} />
            </button>
            <button 
              className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors p-4 bg-white/5 hover:bg-white/10 rounded-full"
              onClick={nextImage}
            >
              <FaChevronRight size={24} />
            </button>

            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={galleryImages[currentImageIndex]}
              className="max-w-full max-h-[90vh] rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StoryDetail;
