import { motion, AnimatePresence } from 'framer-motion';
import { organizationInfo } from '../data/organizationData';
import { FaUniversity, FaQrcode, FaCopy, FaCheckCircle, FaShieldAlt, FaSyncAlt } from 'react-icons/fa';
import { useState } from 'react';

const DonationSection = () => {
  const [copied, setCopied] = useState(null);
  const [qrGenerated, setQrGenerated] = useState(false);
  const [panError, setPanError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    amount: '',
    pan: ''
  });

  const upiId = organizationInfo.bankDetails.upiId;

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const validatePan = (pan) => {
    if (!pan) return true;
    return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan.toUpperCase());
  };
  
  // Generate UPI URL dynamically
  const generateUpiUrl = () => {
    const { name, mobile, amount, pan } = formData;
    let url = `upi://pay?pa=${upiId}&pn=MISSION&cu=INR`;
    
    if (amount) url += `&am=${amount}`;
    
    const isMobileValid = /^\d{10}$/.test(mobile);
    
    if (name || isMobileValid || (pan && validatePan(pan))) {
      const mobilePart = isMobileValid ? `_${mobile}` : '';
      const namePart = name ? name.replace(/\s+/g, '_') : 'Donor';
      const panPart = (pan && validatePan(pan)) ? `_PAN_${pan.toUpperCase()}` : '';
      const note = `Donation_${namePart}${mobilePart}${panPart}`.substring(0, 80);
      url += `&tn=${encodeURIComponent(note)}`;
    } else {
      url += `&tn=${encodeURIComponent("General Donation to MISSION")}`;
    }
    
    return url;
  };

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(generateUpiUrl())}`;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Prevent + or - in amount
    if (name === 'amount' && (value.includes('+') || value.includes('-'))) {
      return;
    }

    const newVal = name === 'pan' ? value.toUpperCase() : value;
    setFormData(prev => ({ ...prev, [name]: newVal }));
    
    if (name === 'pan') {
      setPanError(!validatePan(value));
    }

    if (qrGenerated) setQrGenerated(false);
  };

  const handleGenerate = () => {
    const isMobileValid = /^\d{10}$/.test(formData.mobile);
    if (formData.name.trim() && isMobileValid && !panError) {
      setQrGenerated(true);
    }
  };

  const isFormValid = formData.name.trim() && /^\d{10}$/.test(formData.mobile) && !panError;

  const accounts = [
    {
      id: 'individual',
      label: "Individual & Institutional",
      description: "For personal donations and non-government support.",
      details: organizationInfo.bankDetails.individualDonations,
      accent: "border-primary/20"
    },
    {
      id: 'govt',
      label: "Govt. Grants",
      description: "Grants from Ministries, Departments, and Agencies.",
      details: organizationInfo.bankDetails.govtGrants,
      accent: "border-accent/20"
    },
    {
      id: 'csr',
      label: "CSR Grants",
      description: "Dedicated account for Corporate Social Responsibility.",
      details: organizationInfo.bankDetails.csrGrants,
      accent: "border-primary/20"
    }
  ];

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

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
          <div className="h-1 w-24 bg-accent mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Your contributions directly fund our grassroots initiatives. Choose the appropriate account for your support.
          </p>
        </div>

        {/* Bank Account Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {accounts.map((acc, index) => (
            <motion.div 
              key={acc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-[2.5rem] p-8 border ${acc.accent} shadow-xl shadow-primary/5 flex flex-col group hover:shadow-2xl transition-all duration-500`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <FaUniversity />
                </div>
                <h3 className="text-lg font-heading font-bold text-primary tracking-tight leading-tight">{acc.label}</h3>
              </div>
              
              <p className="text-xs text-slate-500 mb-8 font-medium leading-relaxed italic border-l-2 border-accent/20 pl-4">
                {acc.description}
              </p>

              <div className="space-y-4 flex-grow">
                {[
                  { label: "Account Holder", value: acc.details.accountHolder },
                  { label: "Bank Name", value: acc.details.bankName },
                  { label: "IFSC Code", value: acc.details.ifsc },
                  { label: "Account Number", value: acc.details.accountNumber }
                ].map((item, idx) => (
                  <div key={idx} className="group/item">
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 block mb-0.5">{item.label}</span>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 group-hover/item:border-accent transition-colors">
                      <span className="text-sm font-bold text-slate-700">{item.value}</span>
                      <button 
                        onClick={() => copyToClipboard(item.value, `${acc.id}-${idx}`)}
                        className="text-primary hover:text-accent p-1 transition-colors"
                      >
                        {copied === `${acc.id}-${idx}` ? <FaCheckCircle size={12} className="text-accent" /> : <FaCopy size={12} />}
                      </button>
                    </div>
                  </div>
                ))}
                <div className="pt-4 mt-auto">
                  <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 block mb-1">Accepted Via</span>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <p className="text-[10px] font-bold text-accent leading-normal uppercase tracking-wider">{acc.details.note}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instant UPI Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[3rem] text-white overflow-hidden shadow-2xl relative"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              
              {/* Form Part */}
              <div className="flex-grow w-full max-w-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white text-xl">
                    <FaQrcode />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold tracking-tight leading-none">Instant UPI Pay</h3>
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-2">Generate a personalized QR for individual donations</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Donor Name *</label>
                    <input 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      type="text" 
                      className="w-full px-6 py-3.5 bg-white/10 rounded-xl border border-white/10 focus:border-accent focus:outline-none transition-all font-medium text-sm placeholder:text-white/20" 
                      placeholder="Full Name" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Mobile No. *</label>
                    <input 
                      name="mobile" 
                      value={formData.mobile} 
                      onChange={handleInputChange} 
                      type="tel" 
                      className="w-full px-6 py-3.5 bg-white/10 rounded-xl border border-white/10 focus:border-accent focus:outline-none transition-all font-medium text-sm placeholder:text-white/20" 
                      placeholder="10 Digits" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Amount</label>
                    <input 
                      name="amount" 
                      value={formData.amount} 
                      onChange={handleInputChange} 
                      type="number" 
                      className="w-full px-6 py-3.5 bg-white/10 rounded-xl border border-white/10 focus:border-accent focus:outline-none transition-all font-medium text-sm placeholder:text-white/20" 
                      placeholder="INR" 
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center ml-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40">PAN (Optional)</label>
                      {panError && <span className="text-[8px] font-bold text-accent-light uppercase tracking-wider">Invalid</span>}
                    </div>
                    <input 
                      name="pan" 
                      value={formData.pan} 
                      onChange={handleInputChange} 
                      type="text" 
                      className="w-full px-6 py-3.5 bg-white/10 rounded-xl border border-white/10 focus:border-accent focus:outline-none transition-all font-medium text-sm placeholder:text-white/20" 
                      placeholder="ABCDE1234F" 
                      maxLength={10}
                    />
                  </div>
                </div>

                <button 
                  onClick={handleGenerate}
                  disabled={!isFormValid}
                  className={`w-full mt-8 py-4 ${!isFormValid ? 'bg-slate-600 opacity-50' : 'bg-accent hover:bg-accent-light shadow-xl shadow-black/20'} text-white rounded-xl font-bold uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-3`}
                >
                  <FaSyncAlt className={qrGenerated ? 'rotate-180' : ''} />
                  <span>{qrGenerated ? 'Update QR Code' : 'Generate QR Code'}</span>
                </button>
              </div>

              {/* QR Part */}
              <div className="flex-shrink-0 w-full lg:w-auto text-center">
                <div className="bg-white p-6 rounded-[3rem] shadow-2xl inline-block group mb-6">
                  <div className="w-56 h-56 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      {!qrGenerated ? (
                        <motion.div 
                          key="empty"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="w-full h-full border-4 border-dashed border-slate-100 rounded-2xl flex flex-col items-center justify-center p-6 text-slate-200"
                        >
                          <FaQrcode size={48} className="mb-4 opacity-20" />
                          <p className="text-[9px] font-black uppercase tracking-tighter leading-tight">Fill form to<br />generate QR</p>
                        </motion.div>
                      ) : (
                        <motion.img 
                          key="code"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          src={qrCodeUrl} 
                          alt="UPI QR Code" 
                          className="w-full h-full rounded-2xl" 
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <div className={`transition-opacity ${qrGenerated ? 'opacity-100' : 'opacity-20'}`}>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 mb-2">Scan with any UPI App</p>
                  <div className="bg-white/5 py-2 px-4 rounded-xl border border-white/10 inline-flex items-center gap-2">
                    <span className="text-xs font-bold">{upiId}</span>
                    <button onClick={() => copyToClipboard(upiId, 'upi')} className="hover:text-accent">
                      <FaCopy size={12} />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        <div className="mt-16 flex items-center justify-center gap-4 text-slate-400">
          <FaShieldAlt size={20} />
          <p className="text-xs font-bold uppercase tracking-widest leading-none">Statutory Compliant • Secure Transfer • Tax Exempted</p>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;