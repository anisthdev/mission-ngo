import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { programmeTimeline } from '../data/organizationData';
import { FaCalendarAlt, FaCheckCircle, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const TimelineSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const nextPhase = () => {
    if (activeIndex < programmeTimeline.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const prevPhase = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <section className="section-padding bg-warm-sand overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold mb-3 uppercase tracking-[0.3em] text-sm"
          >
            Programme Timeline (2006–2026)
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6"
          >
            Two Decades of <br /><span className="text-accent">Development Action</span>
          </motion.h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>

        {/* Navigation / Years Bar */}
        <div className="relative mb-12 md:mb-20">
          <div 
            ref={scrollContainerRef}
            className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar pb-12 pt-6 px-4"
          >
            {programmeTimeline.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 flex flex-col items-center group transition-all duration-300 ${index === activeIndex ? 'scale-110' : 'opacity-50 hover:opacity-100'}`}
              >
                <div className={`w-14 h-14 md:w-20 md:h-20 rounded-full border-2 mb-4 flex items-center justify-center transition-all duration-500 ${index === activeIndex ? 'bg-primary border-primary text-white shadow-xl shadow-primary/20' : 'border-primary/20 text-primary bg-white'}`}>
                  <span className="text-xs md:text-sm font-bold font-heading">{item.period.split('–')[0]}</span>
                </div>
                <div className={`text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors ${index === activeIndex ? 'text-accent' : 'text-gray-400'}`}>
                  {item.phase}
                </div>
              </button>
            ))}
          </div>
          
          {/* Progress Line */}
          <div className="absolute top-7 md:top-10 left-0 right-0 h-0.5 bg-primary/10 -z-10 mx-12 hidden md:block">
            <motion.div 
              className="h-full bg-accent"
              initial={{ width: "0%" }}
              animate={{ width: `${(activeIndex / (programmeTimeline.length - 1)) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="relative min-h-[500px] md:min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-[2.5rem] shadow-2xl shadow-primary/5 border border-primary/5 p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center"
            >
              {/* Left Side: Info */}
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold rounded-full uppercase tracking-widest">
                    {programmeTimeline[activeIndex].period}
                  </span>
                  <span className="text-primary/40 font-heading font-bold text-lg italic">
                    {programmeTimeline[activeIndex].phase}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                  {programmeTimeline[activeIndex].title}
                </h3>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {programmeTimeline[activeIndex].description}
                </p>

                <div className="flex gap-4">
                  <button 
                    onClick={prevPhase}
                    disabled={activeIndex === 0}
                    className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary disabled:opacity-20 hover:bg-primary hover:text-white transition-all"
                  >
                    <FaChevronLeft />
                  </button>
                  <button 
                    onClick={nextPhase}
                    disabled={activeIndex === programmeTimeline.length - 1}
                    className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary disabled:opacity-20 hover:bg-primary hover:text-white transition-all"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>

              {/* Right Side: Highlights List */}
              <div className="lg:w-1/2 w-full">
                <div className="bg-primary/5 rounded-3xl p-8 md:p-10 border border-primary/5">
                  <h4 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                    <FaCheckCircle className="text-accent" />
                    Key Milestones
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    {programmeTimeline[activeIndex].highlights.map((highlight, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-4 text-sm md:text-base text-gray-700 font-medium"
                      >
                        <span className="text-accent mt-1">•</span>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
