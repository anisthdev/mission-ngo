import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { organizationInfo } from '../data/organizationData';
import { FaHeart, FaHandsHelping, FaBriefcase, FaCopy, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

const AccountCard = ({ title, details, id, onCopy, copiedId }) => (
  <div className="bg-white rounded-3xl p-8 border border-primary/5 shadow-xl shadow-primary/5 relative overflow-hidden group">
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors duration-500"></div>
    <h4 className="text-xl font-heading font-bold text-primary mb-6 pr-12">{title}</h4>
    
    <div className="space-y-4">
      {[
        { label: "Account Holder", value: details.accountHolder },
        { label: "Bank Name", value: details.bankName },
        { label: "Branch", value: details.branch },
        { label: "IFSC", value: details.ifsc },
        { label: "Account Number", value: details.accountNumber }
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.label}</span>
          <div className="flex items-center justify-between group/item">
            <span className="text-gray-800 font-bold break-all">{item.value}</span>
            <button 
              onClick={() => onCopy(item.value, `${id}-${idx}`)}
              className="text-primary hover:text-accent p-2 transition-colors"
              title="Copy to clipboard"
            >
              {copiedId === `${id}-${idx}` ? <FaCheckCircle className="text-accent" /> : <FaCopy size={12} />}
            </button>
          </div>
        </div>
      ))}
    </div>
    
    {details.note && (
      <div className="mt-8 pt-6 border-t border-gray-100">
        <p className="text-xs text-gray-500 italic font-medium">{details.note}</p>
      </div>
    )}
  </div>
);

const GetInvolved = () => {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="bg-warm-sand min-h-screen">
      {/* Page Hero */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600" 
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
      <section id="donation-details" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4">Financial Support</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Donation & Grant Accounts</h2>
            <div className="h-1 w-24 bg-accent mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed italic">
              "We ensure complete transparency and accountability for every contribution. Funds are utilized directly for community empowerment initiatives."
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <AccountCard 
              id="govt"
              title="Account for Govt. Grants" 
              details={organizationInfo.bankDetails.govtGrants} 
              onCopy={copyToClipboard}
              copiedId={copied}
            />
            <AccountCard 
              id="indiv"
              title="Individual & Institutional" 
              details={organizationInfo.bankDetails.individualDonations} 
              onCopy={copyToClipboard}
              copiedId={copied}
            />
            <AccountCard 
              id="csr"
              title="CSR Grant/Donation" 
              details={organizationInfo.bankDetails.csrGrants} 
              onCopy={copyToClipboard}
              copiedId={copied}
            />
          </div>

          {/* Tax Benefits Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 bg-primary text-white p-10 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-primary/20 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-primary-light)_0%,_transparent_70%)] opacity-30"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-heading font-bold mb-2">Tax Benefits (80G)</h3>
              <p className="text-secondary-light font-medium">All donations to MISSION are tax-exempt under Section 80G of the Income Tax Act.</p>
            </div>
            <div className="relative z-10 flex flex-wrap gap-4">
              <div className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 text-xs font-bold uppercase tracking-widest">80G Certified</div>
              <div className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 text-xs font-bold uppercase tracking-widest">12A Registered</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
