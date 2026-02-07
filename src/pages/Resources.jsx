import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { FaFilePdf, FaVideo, FaFileAlt, FaLock } from 'react-icons/fa';

const Resources = () => {
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
    },
    {
      title: "Media & Videos",
      icon: <FaVideo />,
      items: [
        { name: "Documentary: Voices from Dhenkanal", status: "Coming Soon", locked: true },
        { name: "Project LEDP Highlights", status: "Coming Soon", locked: true }
      ]
    }
  ];

  return (
    <div className="bg-warm-sand min-h-screen">
      {/* Page Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1600" 
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
          <p className="text-xl max-w-2xl mx-auto text-white/70 leading-relaxed">
            Access our reports, studies, and learning documents to understand the depth of our impact and methodologies.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section-padding">
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