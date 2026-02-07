import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { organizationInfo } from '../data/organizationData';
import { FaUniversity, FaQrcode, FaCopy, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import { useState } from 'react';

const DonationSection = () => {
  const [copied, setCopied] = useState(null);
  const upiId = "demo@oksbi";
  const upiUrl = `upi://pay?pa=${upiId}&pn=MISSION&tn=Donation%20to%20MISSION&cu=INR`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(upiUrl)}`;

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const details = organizationInfo.bankDetails.individualDonations;

  return (
    <section className="section-padding bg-warm-sand relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top translate-x-1/2"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold mb-3 uppercase tracking-[0.3em] text-sm"
          >
            Support Our Cause
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6"
          >
            Make a <span className="text-accent">Difference</span>
          </motion.h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Your contributions directly fund our grassroots initiatives in livelihood, education, and community health.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* Bank Details Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-primary/5 border border-primary/5 flex flex-col"
          >
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-3xl">
                <FaUniversity />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">Bank Transfer</h3>
                <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mt-1">Direct Deposit Details</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 flex-grow">
              {[
                { label: "Account Holder", value: details.accountHolder },
                { label: "Bank Name", value: details.bankName },
                { label: "Branch", value: details.branch },
                { label: "IFSC Code", value: details.ifsc },
                { label: "Account Number", value: details.accountNumber }
              ].map((item, idx) => (
                <div key={idx} className="group/item">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-2">{item.label}</span>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2 group-hover/item:border-accent transition-colors">
                    <span className="text-lg font-bold text-gray-800 break-all">{item.value}</span>
                    <button 
                      onClick={() => copyToClipboard(item.value, idx)}
                      className="text-primary hover:text-accent p-2 transition-colors"
                    >
                      {copied === idx ? <FaCheckCircle className="text-accent" /> : <FaCopy size={14} />}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-primary/5 rounded-2xl flex items-start gap-4 border border-primary/10">
              <FaShieldAlt className="text-primary mt-1 flex-shrink-0" />
              <p className="text-sm text-gray-600 font-medium italic">
                MISSION is registered under 12A and 80G. All donations are tax-exempt as per Govt. regulations.
              </p>
            </div>
          </motion.div>

          {/* QR Code Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-primary rounded-[3rem] p-10 md:p-16 text-white text-center flex flex-col justify-center items-center shadow-2xl shadow-primary/20 relative overflow-hidden"
          >
            {/* Decorative background circle */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 w-full">
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest">
                <FaQrcode /> Scan to Pay via UPI
              </div>
              
              <div className="bg-white p-6 rounded-[2rem] shadow-2xl mx-auto max-w-[280px] group">
                <img 
                  src={qrCodeUrl} 
                  alt="UPI QR Code" 
                  className="w-full h-auto rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="mt-10">
                <p className="text-secondary-light font-black uppercase tracking-[0.2em] text-[10px] mb-2">UPI ID</p>
                <div className="flex items-center justify-center gap-3 bg-white/5 py-3 px-6 rounded-2xl border border-white/10">
                  <span className="text-xl font-heading font-bold tracking-tight">{upiId}</span>
                  <button 
                    onClick={() => copyToClipboard(upiId, 'upi')}
                    className="text-white hover:text-secondary-light transition-colors"
                  >
                    {copied === 'upi' ? <FaCheckCircle className="text-secondary-light" /> : <FaCopy size={16} />}
                  </button>
                </div>
              </div>
              
              <p className="mt-8 text-white/60 text-xs font-medium">
                Supports all major UPI apps: <br />
                Google Pay, PhonePe, Paytm, Amazon Pay
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
