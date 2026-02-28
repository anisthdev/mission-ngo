import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { organizationInfo } from '../data/organizationData';
import { FaFilePdf, FaEye, FaDownload, FaCertificate, FaTimes } from 'react-icons/fa';

const Legal = () => {
  const [viewingFile, setViewingFile] = useState(null);

  const registrations = [
    {
      title: "Registered with IGR",
      number: organizationInfo.registrations.igrNumber,
      description: "Registration with the Inspector General of Registration (IGR), Odisha for legal identity.",
      file: "/reports/registration-igr.pdf"
    },
    {
      title: "District Registration",
      number: organizationInfo.registrations.districtNumber,
      description: "Primary registration as a society in Dhenkanal district of Odisha.",
      file: "/reports/registration-dkl.pdf"
    },
    {
      title: "Registered under 12A",
      number: organizationInfo.registrations.urn12A,
      description: "Income Tax exemption certificate under section 12A of the Income Tax Act.",
      file: "/reports/12a.pdf"
    },
    {
      title: "Registered under 80G",
      number: organizationInfo.registrations.urn80G,
      description: "Income Tax exemption certificate under section 80G, allowing tax benefits for donors.",
      file: "/reports/80g.pdf"
    },
    {
      title: "Registered with CSR-1",
      number: organizationInfo.registrations.csr1,
      description: "Ministry of Corporate Affairs (MCA) registration for undertaking Corporate Social Responsibility projects.",
      file: "/reports/csr-1.pdf"
    },
    {
      title: "PAN Card",
      number: organizationInfo.registrations.pan,
      description: "Permanent Account Number issued by the Income Tax Department of India.",
      file: "/reports/pan.pdf"
    },
    {
      title: "GST Registration",
      number: organizationInfo.registrations.gst,
      description: "Goods and Services Tax registration for statutory financial compliance.",
      file: "/reports/gst.pdf"
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
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl -mr-48 -mt-48"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
          >
            Legal & <span className="text-accent">Compliance</span>
          </motion.h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            MISSION maintains full compliance with statutory requirements to ensure transparency and accountability in all operations.
          </p>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="py-24">
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

          {/* Additional Info Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                <FaFilePdf size={32} />
              </div>
              <div>
                <h4 className="text-xl font-heading font-bold text-primary mb-1 text-center md:text-left">Statutory Compliance</h4>
                <p className="text-slate-500 text-sm text-center md:text-left">MISSION is dedicated to transparency in its financial and legal governance.</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">Registered Office</span>
              <p className="text-primary font-bold max-w-xs">{organizationInfo.contacts.registeredOffice.address}</p>
            </div>
          </motion.div>
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
              {/* Modal Header */}
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

              {/* Modal Body - PDF Iframe */}
              <div className="flex-grow bg-slate-200 relative">
                <iframe 
                  src={`${viewingFile.file}#toolbar=0&navpanes=0`}
                  title={viewingFile.title}
                  className="w-full h-full border-none"
                />
              </div>

              {/* Modal Footer */}
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

export default Legal;