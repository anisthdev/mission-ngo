import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { organizationInfo } from '../data/organizationData';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaClock } from 'react-icons/fa';

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
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-8">Office Locations</h2>
                <div className="space-y-8">
                  {offices.map((office, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-6 p-8 bg-white rounded-3xl border border-primary/5 shadow-xl shadow-primary/5 group hover:border-accent/30 transition-all"
                    >
                      <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-all">
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
                <h2 className="text-3xl font-heading font-bold text-primary mb-8">Direct Contact</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-primary rounded-3xl text-white">
                    <FaEnvelope className="text-secondary-light text-2xl mb-4" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1">Email Us</p>
                    <p className="font-bold text-sm">info@missionodisha.co.in</p>
                  </div>
                  <div className="p-6 bg-accent rounded-3xl text-white">
                    <FaPhone className="text-white/60 text-2xl mb-4" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1">Call Us</p>
                    <p className="font-bold text-sm">+91-XXXX-XXXXXX</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white rounded-3xl border border-primary/5 flex items-center gap-6">
                <div className="w-12 h-12 bg-secondary-light/10 rounded-full flex items-center justify-center text-secondary-dark">
                  <FaClock size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary">Office Hours</h4>
                  <p className="text-xs text-gray-500">Mon - Sat: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-10 md:p-16 rounded-[3.5rem] shadow-2xl shadow-primary/5 border border-primary/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32"></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-heading font-bold text-primary mb-2">Send a Message</h3>
                  <p className="text-gray-500 mb-10">We usually respond within 24-48 hours.</p>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                        <input type="text" className="w-full px-6 py-4 bg-warm-sand rounded-2xl border border-transparent focus:border-accent/30 focus:outline-none transition-all font-medium" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
                        <input type="email" className="w-full px-6 py-4 bg-warm-sand rounded-2xl border border-transparent focus:border-accent/30 focus:outline-none transition-all font-medium" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Subject</label>
                      <input type="text" className="w-full px-6 py-4 bg-warm-sand rounded-2xl border border-transparent focus:border-accent/30 focus:outline-none transition-all font-medium" placeholder="How can we help you?" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Message</label>
                      <textarea rows="5" className="w-full px-6 py-4 bg-warm-sand rounded-2xl border border-transparent focus:border-accent/30 focus:outline-none transition-all font-medium resize-none" placeholder="Your message here..."></textarea>
                    </div>
                    
                    <button className="w-full py-5 bg-primary hover:bg-accent text-white rounded-2xl font-bold uppercase tracking-[0.2em] text-sm shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-3 group">
                      <span>Send Message</span>
                      <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={14} />
                    </button>
                  </form>
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