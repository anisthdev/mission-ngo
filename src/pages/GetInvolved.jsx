import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { FaHeart, FaHandsHelping, FaBriefcase } from 'react-icons/fa';
import DonationSection from '../components/DonationSection';

const GetInvolved = () => {
  return (
    <div className="bg-warm-sand min-h-screen">
      {/* Page Hero */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/assets/health-2.jpeg" 
            alt="Support Our Mission" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/90"></div>
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            Support Our <span className="text-secondary-light">Mission</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-white/80 leading-relaxed"
          >
            Your contribution, time, and partnership can transform lives and build self-reliant rural communities.
          </motion.p>
        </div>
      </section>

      {/* Main Options */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHeart />,
                title: "Donate",
                desc: "Financial support enables us to scale our impact and sustain our long-term livelihood programmes.",
                color: "bg-accent",
                link: "#donation-details"
              },
              {
                icon: <FaHandsHelping />,
                title: "Volunteer",
                desc: "Share your skills and time to empower rural communities directly through our various field initiatives.",
                color: "bg-primary",
                link: "/contact"
              },
              {
                icon: <FaBriefcase />,
                title: "Partner",
                desc: "We collaborate with government, CSR, and private agencies for collective socio-economic impact.",
                color: "bg-secondary-dark",
                link: "/contact"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[3rem] shadow-xl shadow-primary/5 text-center group hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`w-20 h-20 ${item.color} text-white rounded-2xl mx-auto flex items-center justify-center text-3xl mb-8 group-hover:rotate-6 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{item.desc}</p>
                <a href={item.link} className="inline-block px-8 py-3 bg-primary/5 text-primary font-bold text-xs uppercase tracking-widest rounded-full hover:bg-primary hover:text-white transition-all">
                  Learn More
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Details Section */}
      <div id="donation-details">
        <DonationSection />
      </div>
    </div>
  );
};

export default GetInvolved;
