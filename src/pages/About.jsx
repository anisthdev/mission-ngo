import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { organizationInfo, secretaryMessage } from '../data/organizationData';
import { TeamCard } from '../components/Cards';
import { FaQuoteLeft, FaCheckCircle, FaHandshake } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-warm-sand min-h-screen">
      {/* Page Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/assets/capacity-building-2.jpg" 
            alt="About MISSION" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-dark/80"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold text-white mb-4"
          >
            About <span className="text-accent">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-secondary-light font-bold uppercase tracking-[0.3em] text-sm"
          >
            Engross • Enable • Empower
          </motion.p>
        </div>
      </section>

      {/* Secretary's Message */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                  <img 
                    src="/images/assets/secretary.jpg" 
                    alt={secretaryMessage.secretary} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-accent p-8 rounded-3xl text-white shadow-xl max-w-[240px]">
                  <p className="font-heading font-bold text-xl">{secretaryMessage.secretary}</p>
                  <p className="text-xs uppercase tracking-widest mt-1 opacity-80">{secretaryMessage.designation}</p>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-7">
              <FaQuoteLeft className="text-accent/20 text-6xl mb-6" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">
                {secretaryMessage.title}
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg italic">
                {secretaryMessage.message.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach & Values */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">Our Core Philosophy</h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
        </div>
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {organizationInfo.coreValues.map((value, index) => (
              <div key={index} className="bg-warm-sand p-8 rounded-3xl border border-primary/5 hover:border-accent/30 transition-all group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <FaCheckCircle size={20} />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom mb-16 text-center">
          <p className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4">Leadership</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Governing Body Members</h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
        </div>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {organizationInfo.board.map((member, index) => (
              <TeamCard 
                key={index}
                name={member.name}
                designation={member.designation}
                role={member.expertise}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Donors */}
      <section className="section-padding bg-white">
        <div className="container-custom mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <FaHandshake className="text-accent text-3xl" />
            <h2 className="text-4xl font-heading font-bold text-primary">Supporting Partners</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our journey is made possible through the collaboration and trust of various government departments, agencies, and private institutions.
          </p>
        </div>
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {organizationInfo.partners.map((partner, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-center p-4 h-24 bg-warm-sand rounded-2xl border border-primary/5 hover:border-accent/30 transition-all group grayscale hover:grayscale-0"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-w-full max-h-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md transition-all"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;