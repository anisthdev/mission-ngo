import { motion, AnimatePresence } from 'framer-motion';
import { organizationInfo } from '../data/organizationData';
import { FaUniversity, FaQrcode, FaCopy, FaCheckCircle, FaShieldAlt, FaInfoCircle, FaSyncAlt } from 'react-icons/fa';
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

  const details = organizationInfo.bankDetails.individualDonations;

  return (
    <section className="section-padding bg-white relative overflow-hidden">
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
            Your contributions directly fund our grassroots initiatives. Choose your preferred way to support us below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Bank Details (4 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-slate-50 rounded-[3rem] p-8 md:p-10 border border-slate-100 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary text-xl">
                <FaUniversity />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary tracking-tight">Bank Transfer</h3>
            </div>

            <div className="space-y-5 flex-grow">
              {[
                { label: "Account Holder", value: details.accountHolder },
                { label: "Bank Name", value: details.bankName },
                { label: "IFSC Code", value: details.ifsc },
                { label: "Account Number", value: details.accountNumber }
              ].map((item, idx) => (
                <div key={idx} className="group/item">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">{item.label}</span>
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2 group-hover/item:border-accent transition-colors">
                    <span className="text-sm font-bold text-slate-700">{item.value}</span>
                    <button 
                      onClick={() => copyToClipboard(item.value, idx)}
                      className="text-primary hover:text-accent p-1 transition-colors"
                    >
                      {copied === idx ? <FaCheckCircle size={12} className="text-accent" /> : <FaCopy size={12} />}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-white rounded-2xl flex items-start gap-3 border border-slate-200">
              <FaShieldAlt className="text-primary mt-1 flex-shrink-0 text-sm" />
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider leading-relaxed">
                Registered 12A & 80G <br />Tax Exempted
              </p>
            </div>
          </motion.div>

          {/* Right: Instant UPI Area (8 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-primary rounded-[3rem] text-white overflow-hidden shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            
            <div className="relative z-10 p-8 md:p-12 h-full">
              <div className="flex flex-col md:flex-row items-center gap-12">
                
                {/* Form Part */}
                <div className="flex-grow w-full">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white text-xl">
                      <FaQrcode />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold tracking-tight leading-none">Instant UPI Pay</h3>
                      <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-2">Personalized Donation</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Donor Name *</label>
                      <input 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        type="text" 
                        required
                        className="w-full px-6 py-3 bg-white/10 rounded-xl border border-white/10 focus:border-accent focus:outline-none transition-all font-medium text-sm placeholder:text-white/20" 
                        placeholder="Full Name" 
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Mobile No. *</label>
                        <input 
                          name="mobile" 
                          value={formData.mobile} 
                          onChange={handleInputChange} 
                          type="tel" 
                          required
                          className="w-full px-6 py-3 bg-white/10 rounded-xl border border-white/10 focus:border-accent focus:outline-none transition-all font-medium text-sm placeholder:text-white/20" 
                          placeholder="10 Digits" 
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Amount</label>
                        <input 
                          name="amount" 
                          value={formData.amount} 
                          onChange={handleInputChange} 
                          onKeyDown={(e) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()}
                          type="number" 
                          className="w-full px-6 py-3 bg-white/10 rounded-xl border border-white/10 focus:border-accent focus:outline-none transition-all font-medium text-sm placeholder:text-white/20" 
                          placeholder="INR" 
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center ml-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/40">PAN Card No. (Optional)</label>
                        {panError && <span className="text-[8px] font-bold text-accent-light uppercase tracking-wider animate-pulse">Invalid Format</span>}
                      </div>
                      <input 
                        name="pan" 
                        value={formData.pan} 
                        onChange={handleInputChange} 
                        type="text" 
                        className={`w-full px-6 py-3 bg-white/10 rounded-xl border ${panError ? 'border-accent-light' : 'border-white/10'} focus:border-accent focus:outline-none transition-all font-medium text-sm placeholder:text-white/20`} 
                        placeholder="ABCDE1234F" 
                        maxLength={10}
                      />
                    </div>
                  </div>

                  <button 
                    onClick={handleGenerate}
                    disabled={!isFormValid}
                    className={`w-full mt-8 py-4 ${!isFormValid ? 'bg-slate-600 cursor-not-allowed opacity-50' : 'bg-accent hover:bg-accent-light'} text-white rounded-xl font-bold uppercase tracking-[0.2em] text-xs shadow-xl transition-all flex items-center justify-center gap-3 group`}
                  >
                    <FaSyncAlt className={`${qrGenerated ? 'rotate-180' : ''} transition-transform duration-500`} />
                    <span>{qrGenerated ? 'Update QR Code' : 'Generate QR Code'}</span>
                  </button>
                </div>

                {/* QR Part */}
                <div className="flex-shrink-0 w-full md:w-auto text-center">
                  <div className="bg-white p-5 rounded-[2.5rem] shadow-2xl inline-block group mb-6 relative overflow-hidden">
                    <div className="w-48 h-48 md:w-56 md:h-56 flex items-center justify-center relative">
                      <AnimatePresence mode="wait">
                        {!qrGenerated ? (
                          <motion.div 
                            key="placeholder"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full h-full border-4 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 text-slate-300 relative"
                          >
                            {/* QR Aesthetic Squares */}
                            <div className="absolute top-2 left-2 w-8 h-8 border-4 border-slate-200 rounded-sm"></div>
                            <div className="absolute top-2 right-2 w-8 h-8 border-4 border-slate-200 rounded-sm"></div>
                            <div className="absolute bottom-2 left-2 w-8 h-8 border-4 border-slate-200 rounded-sm"></div>
                            
                            <p className="font-mono text-[10px] font-black uppercase tracking-tighter leading-tight text-center">
                              FILL THE FORM<br />TO GENERATE<br />UPI QR
                            </p>
                          </motion.div>
                        ) : (
                          <motion.img 
                            key="qr"
                            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            src={qrCodeUrl} 
                            alt="UPI QR Code" 
                            className="w-full h-full rounded-2xl" 
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  
                  <div className={`${qrGenerated ? 'opacity-100' : 'opacity-30'} transition-opacity duration-500`}>
                    <p className="text-secondary-light font-black uppercase tracking-[0.2em] text-[10px] mb-2">Scan with any UPI App</p>
                    <div className="flex items-center justify-center gap-3 bg-white/5 py-2 px-4 rounded-xl border border-white/10">
                      <span className="text-xs font-bold opacity-80">{upiId}</span>
                      <button 
                        onClick={() => copyToClipboard(upiId, 'upi')}
                        className="text-white hover:text-secondary-light transition-colors"
                      >
                        {copied === 'upi' ? <FaCheckCircle size={12} className="text-secondary-light" /> : <FaCopy size={12} />}
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DonationSection;