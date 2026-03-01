import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { organizationInfo, secretaryMessage } from '../data/organizationData';
import { TeamCard } from '../components/Cards';
import { FaQuoteLeft, FaCheckCircle, FaHandshake, FaFilePdf, FaEye, FaDownload, FaCertificate, FaTimes } from 'react-icons/fa';

const About = () => {
  const [viewingFile, setViewingFile] = useState(null);

  const registrations = [
    {
      title: "Registered with IGR",
      number: organizationInfo.registrations.igrNumber,
      description: "Registration with the Inspector General of Registration (IGR), Odisha for legal identity.",
      file: "/reports/registration-igr.pdf"
    },
    {
      title: "Registered under 12A & 80G",
      number: organizationInfo.registrations.urn12A,
      description: "Income Tax exemption certificates under section 12A & 80G ensuring transparency and tax benefits for donors.",
      file: "/reports/12a.pdf"
    },
    {
      title: "Registered with CSR-1",
      number: organizationInfo.registrations.csr1,
      description: "Ministry of Corporate Affairs (MCA) registration for undertaking Corporate Social Responsibility projects.",
      file: "/reports/csr-1.pdf"
    },
    {
      title: "Registered as VTP",
      number: organizationInfo.registrations.vtp,
      description: "Registered as a Vocational Training Provider (VTP) to deliver certified skill development programs.",
      file: "/reports/registration-document.pdf",
      missing: true
    },
    {
      title: "Registered with NITI Aayog",
      number: organizationInfo.registrations.nitiAayogUID,
      description: "Unique ID on NGO Darpan (NITI Aayog) for government collaboration and recognition.",
      file: "/reports/registration-document.pdf",
      missing: true
    }
  ];

  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            Educate • Uplift • Empower
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

      {/* Legal & Compliance Section */}
      <section id="legal" className="section-padding bg-slate-50">
        <div className="container-custom mb-16 text-center">
          <p className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4">Compliance</p>
          <h2 className="text-4xl font-heading font-bold text-primary mb-6">Legal & Statutory Documents</h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto italic">
            "MISSION maintains full compliance with statutory requirements to ensure transparency and accountability in all operations."
          </p>
        </div>

        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {registrations.map((reg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl shadow-primary/5 border border-slate-100 flex flex-col h-full hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <FaCertificate size={28} />
                </div>
                
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {reg.title}
                </h3>
                
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Registration No.</span>
                    <span className="text-sm font-mono font-bold text-accent bg-accent/5 px-3 py-1 rounded-lg">
                      {reg.number}
                    </span>
                  </div>
                  {reg.missing && (
                    <span className="bg-amber-100 text-amber-700 text-[8px] font-black uppercase tracking-tighter px-2 py-1 rounded-full border border-amber-200">
                      Pending Upload
                    </span>
                  )}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                  {reg.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => !reg.missing && setViewingFile(reg)}
                    disabled={reg.missing}
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${reg.missing ? 'bg-slate-50 text-slate-300 cursor-not-allowed' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                  >
                    <FaEye /> View
                  </button>
                  <button 
                    onClick={() => !reg.missing && handleDownload(reg.file, `${reg.title.replace(/\s+/g, '_')}.pdf`)}
                    disabled={reg.missing}
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-lg ${reg.missing ? 'bg-slate-100 text-slate-300 cursor-not-allowed' : 'bg-primary hover:bg-accent text-white shadow-primary/20 hover:shadow-accent/20'}`}
                  >
                    <FaDownload /> Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {viewingFile && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-primary-dark/90 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-5xl h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white">
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary">{viewingFile.title}</h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Registration Document</p>
                </div>
                <button 
                  onClick={() => setViewingFile(null)}
                  className="w-10 h-10 bg-slate-100 hover:bg-accent hover:text-white rounded-full flex items-center justify-center transition-all group"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              <div className="flex-grow bg-slate-200 relative">
                <iframe 
                  src={`${viewingFile.file}#toolbar=0&navpanes=0`}
                  title={viewingFile.title}
                  className="w-full h-full border-none"
                />
              </div>

              <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-4">
                <button 
                  onClick={() => setViewingFile(null)}
                  className="px-6 py-2.5 text-slate-500 font-bold uppercase tracking-widest text-xs hover:text-primary transition-colors"
                >
                  Close
                </button>
                <button 
                  onClick={() => handleDownload(viewingFile.file, `${viewingFile.title.replace(/\s+/g, '_')}.pdf`)}
                  className="flex items-center gap-2 px-8 py-2.5 bg-primary hover:bg-accent text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-lg shadow-primary/20"
                >
                  <FaDownload /> Download PDF
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;