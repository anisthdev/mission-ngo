import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { successStories } from '../data/storiesData';
import { StoryCard } from '../components/Cards';
import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

const ImpactStories = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', ...new Set(successStories.map(story => story.category))];

  const filteredStories = activeCategory === 'All' 
    ? successStories 
    : successStories.filter(story => story.category === activeCategory);

  return (
    <div className="bg-warm-sand min-h-screen">
      {/* Page Hero */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden bg-accent">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600" 
            alt="Impact Stories" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/90"></div>
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            Voices of <span className="text-primary-dark">Change</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-white leading-relaxed"
          >
            Every statistic represents a life transformed. These are the stories of resilience, hope, and self-reliance from the heart of Odisha.
          </motion.p>
        </div>
      </section>

      {/* Stories Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <div className="flex items-center gap-2 mr-4 text-primary font-bold text-xs uppercase tracking-widest">
              <FaFilter size={12} />
              <span>Filter by Program:</span>
            </div>
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' 
                    : 'bg-white text-primary border border-primary/5 hover:border-accent/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredStories.map((story, index) => (
              <motion.div
                key={story.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <StoryCard {...story} />
              </motion.div>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-gray-400 italic">No stories found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-primary py-20 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Have a story to share?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">If you have been part of our programmes and want to share your journey, we would love to hear from you.</p>
          <a href="/contact" className="px-10 py-4 bg-accent hover:bg-accent-light rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-xl shadow-accent/20">
            Contact Our Field Team
          </a>
        </div>
      </section>
    </div>
  );
};

export default ImpactStories;