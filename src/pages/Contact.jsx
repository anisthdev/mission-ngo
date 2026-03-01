import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { organizationInfo } from '../data/organizationData';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  const offices = [
    {
      type: "Registered Office",
      address: organizationInfo.contacts.registeredOffice.address,
      icon: <FaMapMarkerAlt />
    },
    {
      type: "State Office",
      address: organizationInfo.contacts.stateOffice.address,
      icon: <FaMapMarkerAlt />
    }
  ];

  return (
    <div className="bg-warm-sand min-h-screen">
      {/* Page Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="/images/assets/misc-2.jpg" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            Get in <span className="text-accent">Touch</span>
          </motion.h1>
          <p className="text-xl max-w-2xl mx-auto text-white/70 leading-relaxed">
            Have questions about our programmes or want to partner with us? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Office Locations</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {offices.map((office, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-6 p-8 bg-white rounded-3xl border border-primary/5 shadow-xl shadow-primary/5 group hover:border-accent/30 transition-all"
                    >
                      <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                        {office.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-accent mb-2">{office.type}</h4>
                        <p className="text-gray-600 leading-relaxed font-medium">{office.address}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Direct Contact</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-primary rounded-3xl text-white">
                    <FaEnvelope className="text-secondary-light text-2xl mb-4" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1">Email Us</p>
                    <a href={`mailto:${organizationInfo.contacts.email}`} className="font-bold text-sm hover:text-secondary-light transition-colors">{organizationInfo.contacts.email}</a>
                  </div>
                  <div className="p-6 bg-accent rounded-3xl text-white">
                    <FaPhone className="text-white/60 text-2xl mb-4" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1">Call Us</p>
                    <a href={`tel:${organizationInfo.contacts.phone}`} className="font-bold text-sm hover:text-white/80 transition-colors">{organizationInfo.contacts.phone}</a>
                  </div>
                  <div className="p-6 bg-white rounded-3xl border border-primary/5 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-10 h-10 bg-secondary-light/10 rounded-full flex items-center justify-center text-secondary-dark">
                        <FaClock size={16} />
                      </div>
                      <h4 className="text-sm font-bold text-primary">Office Hours</h4>
                    </div>
                    <p className="text-xs text-gray-500 ml-14">Mon - Sat: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;