import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { FaFilePdf, FaVideo, FaFileAlt, FaLock, FaPlay } from 'react-icons/fa';
import { useState } from 'react';

const VideoCard = ({ video, idx }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="bg-white p-4 rounded-[2.5rem] shadow-xl shadow-primary/5 border border-primary/5 group"
    >
      <div className="aspect-video rounded-3xl overflow-hidden bg-slate-900 relative">
        {!isPlaying ? (
          <div className="absolute inset-0 cursor-pointer group/vid" onClick={() => setIsPlaying(true)}>
            <img 
              src={thumbnailUrl} 
              alt={video.title} 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-accent-light transition-all duration-300 pl-1">
                <FaPlay size={24} />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        ) : (
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&modestbranding=1&rel=0`}
            title={video.title}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            className="absolute inset-0"
          ></iframe>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-primary group-hover:text-accent transition-colors">{video.title}</h3>
      </div>
    </motion.div>
  );
};

const Resources = () => {
  const videoResources = [
    { id: "sG_WE_AlUH0", title: "MISSION Impact Story 1" },
    { id: "vcPuTzBnuSk", title: "MISSION Impact Story 2" },
    { id: "IgPuZ8BxiNM", title: "Field Interventions" },
    { id: "fJsfvOBoT5U", title: "Community Engagement" }
  ];

  const resourceCategories = [
    {
      title: "Annual Reports",
      icon: <FaFilePdf />,
      items: [
        { name: "Annual Report 2024-25", status: "Coming Soon", locked: true },
        { name: "Annual Report 2023-24", status: "Coming Soon", locked: true }
      ]
    },
    {
      title: "Training Manuals",
      icon: <FaFileAlt />,
      items: [
        { name: "SHG Management Guide", status: "Coming Soon", locked: true },
        { name: "FPO Governance Protocol", status: "Coming Soon", locked: true }
      ]
    },
    {
      title: "Research & Learning",
      icon: <FaFileAlt />,
      items: [
        { name: "Cluster Development Impact Study", status: "Coming Soon", locked: true },
        { name: "Rural Technology Adoption Report", status: "Coming Soon", locked: true }
      ]
    }
  ];

  return (
    <div className="bg-warm-sand min-h-screen">
      {/* Page Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="/images/assets/awareness-2.jpeg" 
            alt="Knowledge Resources" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            Knowledge <span className="text-secondary-light">Center</span>
          </motion.h1>
          <p className="text-xl max-w-2xl mx-auto text-white/70 leading-relaxed text-balance">
            Access our reports, studies, and learning documents to understand the depth of our impact and methodologies.
          </p>
        </div>
      </section>

      {/* Videos Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent text-2xl">
              <FaVideo />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Media & Videos</h2>
              <p className="text-gray-500 mt-1 uppercase tracking-widest text-[10px] font-bold">Watch our work in action</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {videoResources.map((video, idx) => (
              <VideoCard key={idx} video={video} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {resourceCategories.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-primary/5 border border-primary/5"
              >
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-2xl">
                    {category.icon}
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-primary">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-center justify-between p-6 rounded-2xl bg-warm-sand border border-transparent hover:border-accent/20 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-gray-400 font-medium">{i + 1}.</span>
                        <span className="text-gray-700 font-bold group-hover:text-primary transition-colors">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-3 px-4 py-1.5 bg-white rounded-full border border-gray-100">
                        {item.locked && <FaLock className="text-[10px] text-gray-300" />}
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Request Section */}
          <div className="mt-20 bg-accent text-white p-12 rounded-[3rem] text-center shadow-2xl shadow-accent/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-heading font-bold mb-6">Looking for specific information?</h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">If you need specific data or reports not listed here, please reach out to our communications team.</p>
              <a href="/contact" className="inline-block px-10 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold uppercase tracking-widest text-sm transition-all">
                Request Information
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;