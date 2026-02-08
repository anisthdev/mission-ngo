import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { thematicAreas } from '../data/programsData';
import { FaArrowLeft, FaCheckCircle, FaProjectDiagram, FaImage, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const ProgramDetail = () => {
  const { slug } = useParams();
  const program = thematicAreas.find(p => p.slug === slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Placeholder images for the gallery
  const galleryImages = program?.gallery || [
    program?.image || "",
    "/images/assets/misc-6.jpg",
    "/images/assets/livelihood-3.jpg",
    "/images/assets/fpo-1.jpg",
    "/images/assets/entrepreneurship-1.jpg",
    "/images/assets/capacity-building-1.jpg"
  ];

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen]);

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-3xl font-heading font-bold text-primary mb-4">Program Not Found</h2>
        <Link to="/our-work" className="btn-primary">Back to Our Work</Link>
      </div>
    );
  }

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Dynamic Header */}
      <section className="relative h-[500px] md:h-[600px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={program.image} 
            alt={program.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10 pb-16">
          <Link to="/our-work" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 font-bold text-xs uppercase tracking-widest transition-colors group">
            <FaArrowLeft size={10} className="group-hover:-translate-x-1 transition-transform" /> Back to thematic areas
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white max-w-4xl leading-tight"
          >
            {program.title}
          </motion.h1>
        </div>
      </section>

      {/* Program Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-7">
              <div className="mb-12">
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-4">Program Overview</h2>
                <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
                  {program.description}
                </p>
              </div>

              {program.approach && (
                <div className="mb-12">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-8 flex items-center gap-4">
                    <span className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary text-sm">01</span>
                    Strategic Implementation
                  </h3>
                  <div className="grid md:grid-cols-1 gap-6">
                    {program.approach.map((item, idx) => (
                      <div key={idx} className="flex gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-accent/20 transition-all">
                        <div className="mt-1">
                          <FaCheckCircle className="text-accent" />
                        </div>
                        <p className="text-slate-700 font-bold leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {program.outcome && (
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-8 flex items-center gap-4">
                    <span className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary text-sm">02</span>
                    Expected Impact
                  </h3>
                  <div className="bg-primary p-10 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                    <p className="text-2xl md:text-3xl font-heading italic leading-relaxed relative z-10">
                      "{program.outcome}"
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 space-y-8">
                <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100 shadow-xl shadow-slate-200/50">
                  <div className="flex items-center gap-4 mb-8">
                    <FaProjectDiagram className="text-accent text-2xl" />
                    <h4 className="text-xl font-heading font-bold text-primary">Sub-Programmes</h4>
                  </div>
                  <ul className="space-y-4">
                    {program.programs?.map((sub, idx) => (
                      <li key={idx} className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100">
                        <span className="font-bold text-slate-700">{sub}</span>
                        <span className="px-3 py-1 bg-accent/10 text-accent text-[10px] font-black uppercase tracking-widest rounded-lg">Active</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 bg-accent rounded-3xl text-white text-center">
                  <h4 className="text-xl font-heading font-bold mb-4">Support this work</h4>
                  <p className="text-white/80 text-sm mb-6">Help us expand this programme to more villages across Odisha.</p>
                  <Link to="/get-involved" className="inline-block w-full py-4 bg-white text-accent rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-slate-100 transition-colors">
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="flex items-center gap-6 mb-16">
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary text-2xl">
              <FaImage />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Event Gallery</h2>
              <p className="text-slate-500 mt-1 uppercase tracking-widest text-[10px] font-bold">Capturing moments of impact</p>
            </div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {galleryImages.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                onClick={() => openLightbox(idx)}
              >
                <img 
                  src={img} 
                  alt={`Gallery ${idx}`} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
              onClick={() => setLightboxOpen(false)}
            >
              <FaTimes size={32} />
            </button>

            {/* Navigation Buttons */}
            <button 
              className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors p-4 bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-md"
              onClick={prevImage}
            >
              <FaChevronLeft size={24} />
            </button>
            <button 
              className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors p-4 bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-md"
              onClick={nextImage}
            >
              <FaChevronRight size={24} />
            </button>

            {/* Image */}
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={galleryImages[currentImageIndex]}
              alt={`Gallery ${currentImageIndex}`}
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 font-mono text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProgramDetail;
