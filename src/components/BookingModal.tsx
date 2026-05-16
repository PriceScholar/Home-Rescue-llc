import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { serviceCategories } from '../data/servicesData';

import ConsultationModal from './ConsultationModal';
import LicenseModal from './LicenseModal';
import Chatbot from './Chatbot';

const WHATSAPP_NUMBER = '971524524295';

interface BookingContextType {
  isOpen: boolean;
  isConsultationOpen: boolean;
  isLicenseOpen: boolean;
  openBooking: (serviceName?: string) => void;
  closeBooking: () => void;
  openConsultation: () => void;
  closeConsultation: () => void;
  openLicense: () => void;
  closeLicense: () => void;
  askExpert: (serviceName?: string) => void;
  callNow: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) throw new Error('useBooking must be used within a BookingProvider');
  return context;
};

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isLicenseOpen, setIsLicenseOpen] = useState(false);
  const [preSelectedService, setPreSelectedService] = useState<string | undefined>(undefined);

  const openBooking = (serviceName?: string) => {
    setPreSelectedService(serviceName);
    setIsOpen(true);
  };

  const closeBooking = () => setIsOpen(false);

  const openConsultation = () => setIsConsultationOpen(true);
  const closeConsultation = () => setIsConsultationOpen(false);

  const openLicense = () => setIsLicenseOpen(true);
  const closeLicense = () => setIsLicenseOpen(false);

  const askExpert = (serviceName?: string) => {
    const message = serviceName 
      ? `Hi Home Rescue! 👋\n\nI have a question about *${serviceName}* service.\n\nPlease contact me with more details.\n\nThank you!`
      : `Hi Home Rescue! 👋\n\nI'm interested in your services. Please contact me to discuss my needs.\n\nThank you!`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const callNow = () => {
    window.location.href = 'tel:+971524524295';
  };

  return (
    <BookingContext.Provider value={{ 
      isOpen, 
      isConsultationOpen,
      isLicenseOpen,
      openBooking, 
      closeBooking, 
      openConsultation,
      closeConsultation,
      openLicense,
      closeLicense,
      askExpert, 
      callNow 
    }}>
      {children}
      <BookingModal 
        isOpen={isOpen} 
        onClose={closeBooking} 
        preSelectedService={preSelectedService} 
      />
      <ConsultationModal 
        isOpen={isConsultationOpen}
        onClose={closeConsultation}
      />
      <LicenseModal 
        isOpen={isLicenseOpen}
        onClose={closeLicense}
      />
      <Chatbot />
    </BookingContext.Provider>
  );
};

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, preSelectedService }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: '',
    service: '',
    urgency: 'Normal',
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    emirate: '',
    address: '',
    date: '',
    time: '',
    notes: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsSuccess(false);
      
      if (preSelectedService) {
        const foundCat = serviceCategories.find(cat => 
          cat.subs.some(sub => sub.name === preSelectedService)
        );
        if (foundCat) {
          setFormData(prev => ({ 
            ...prev, 
            category: foundCat.name, 
            service: preSelectedService 
          }));
        }
      } else {
        setFormData(prev => ({ ...prev, category: '', service: '' }));
      }

      // Set min date to today
      const today = new Date().toISOString().split('T')[0];
      const dateInput = document.getElementById('preferredDate') as HTMLInputElement;
      if (dateInput) dateInput.setAttribute('min', today);
    }
  }, [isOpen, preSelectedService]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    if (id === 'serviceCategory') {
      setFormData(prev => ({ ...prev, category: value, service: '' }));
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, urgency: e.target.value }));
  };

  const nextStep = () => {
    if (validateStep()) setStep(s => s + 1);
  };

  const prevStep = () => setStep(s => s - 1);

  const validateStep = () => {
    if (step === 1) {
      if (!formData.category || !formData.service || !formData.urgency) {
        alert('Please fill all required fields');
        return false;
      }
    } else if (step === 2) {
      if (!formData.name || !formData.phone || !formData.emirate || !formData.address) {
        alert('Please fill all required fields');
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.date || !formData.time) {
      alert('Please select a date and time');
      return;
    }

    const message = `*🏠 NEW BOOKING - HOME RESCUE*

━━━━━━━━━━━━━━━━━━━━━
*📋 SERVICE DETAILS*
━━━━━━━━━━━━━━━━━━━━━
*Category:* ${formData.category}
*Service:* ${formData.service}
*Urgency:* ${formData.urgency}

━━━━━━━━━━━━━━━━━━━━━
*👤 CUSTOMER INFO*
━━━━━━━━━━━━━━━━━━━━━
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*WhatsApp:* ${formData.whatsapp || formData.phone}
${formData.email ? `*Email:* ${formData.email}` : ''}

━━━━━━━━━━━━━━━━━━━━━
*📍 LOCATION*
━━━━━━━━━━━━━━━━━━━━━
*Emirate:* ${formData.emirate}
*Address:* ${formData.address}

━━━━━━━━━━━━━━━━━━━━━
*📅 SCHEDULE*
━━━━━━━━━━━━━━━━━━━━━
*Date:* ${formData.date}
*Time:* ${formData.time}

${formData.notes ? `━━━━━━━━━━━━━━━━━━━━━\n*📝 NOTES*\n━━━━━━━━━━━━━━━━━━━━━\n${formData.notes}\n` : ''}

━━━━━━━━━━━━━━━━━━━━━
Please contact me to confirm.
Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
    setIsSuccess(true);
  };

  const subServices = formData.category 
    ? serviceCategories.find(c => c.name === formData.category)?.subs || []
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-[600px] rounded-[30px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all z-10"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="flex-1 overflow-y-auto p-8 md:p-12">
              {!isSuccess ? (
                <>
                  <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-2 text-brand-navy font-bold text-lg mb-4">
                      <i className="fa-solid fa-house-chimney text-brand-gold text-2xl"></i>
                      <span>HOME RESCUE</span>
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-2">Book Your Service</h2>
                    <p className="text-gray-500 text-sm">Fill the form below and we'll contact you within 30 minutes</p>
                  </div>

                  {/* Progress Bar */}
                  <div className="flex items-center justify-center mb-10 px-4">
                    {[1, 2, 3].map((s) => (
                      <React.Fragment key={s}>
                        <div className="flex flex-col items-center gap-2">
                          <div className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all",
                            step === s ? "bg-brand-red text-white" : step > s ? "bg-green-500 text-white" : "bg-gray-100 text-gray-400"
                          )}>
                            {step > s ? <i className="fa-solid fa-check"></i> : s}
                          </div>
                          <span className={cn(
                            "text-[10px] font-bold uppercase tracking-wider",
                            step === s ? "text-brand-navy" : "text-gray-400"
                          )}>
                            {s === 1 ? 'Service' : s === 2 ? 'Details' : 'Confirm'}
                          </span>
                        </div>
                        {s < 3 && (
                          <div className={cn(
                            "flex-1 h-[2px] mx-4 max-w-[60px]",
                            step > s ? "bg-green-500" : "bg-gray-100"
                          )}></div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {step === 1 && (
                      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-brand-navy uppercase tracking-wider block">Service Category *</label>
                          <select 
                            id="serviceCategory" 
                            className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-brand-red outline-none transition-all"
                            value={formData.category}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">-- Choose Category --</option>
                            {serviceCategories.map(cat => (
                              <option key={cat.name} value={cat.name}>{cat.name}</option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-bold text-brand-navy uppercase tracking-wider block">Specific Service *</label>
                          <select 
                            id="service" 
                            className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-brand-red outline-none transition-all"
                            value={formData.service}
                            onChange={handleInputChange}
                            required
                            disabled={!formData.category}
                          >
                            <option value="">-- Select Service --</option>
                            {subServices.map(sub => (
                              <option key={sub.name} value={sub.name}>{sub.name}</option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-4">
                          <label className="text-sm font-bold text-brand-navy uppercase tracking-wider block">Urgency *</label>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {['Normal', 'Urgent', 'Emergency'].map(u => (
                              <label key={u} className={cn(
                                "relative p-4 rounded-xl border-2 flex items-center gap-3 cursor-pointer transition-all",
                                formData.urgency === u ? "bg-brand-red border-brand-red text-white" : "border-gray-100 hover:border-gray-200"
                              )}>
                                <input 
                                  type="radio" 
                                  name="urgency" 
                                  value={u} 
                                  checked={formData.urgency === u} 
                                  onChange={handleRadioChange}
                                  className="sr-only"
                                />
                                <span className="font-bold text-sm underline-none">{u}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="pt-6">
                          <button 
                            type="button" 
                            onClick={nextStep}
                            className="w-full bg-brand-navy text-white font-bold py-4 rounded-xl hover:bg-brand-red transition-all flex items-center justify-center gap-2 group"
                          >
                            Continue <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-brand-navy uppercase tracking-wider block">Full Name *</label>
                          <input 
                            type="text" id="name" value={formData.name} onChange={handleInputChange}
                            className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-brand-red outline-none transition-all"
                            placeholder="Your Name" required 
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-brand-navy uppercase tracking-wider block">Phone *</label>
                            <input 
                              type="tel" id="phone" value={formData.phone} onChange={handleInputChange}
                              className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-brand-red outline-none transition-all"
                              placeholder="+971 50 XXXXXXX" required 
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-brand-navy uppercase tracking-wider block">Emirate *</label>
                            <select 
                              id="emirate" value={formData.emirate} onChange={handleInputChange}
                              className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-brand-red outline-none transition-all"
                              required
                            >
                              <option value="">-- Choose --</option>
                              {['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'RAK', 'Fujairah', 'UAQ'].map(e => (
                                <option key={e} value={e}>{e}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-bold text-brand-navy uppercase tracking-wider block">Address *</label>
                          <textarea 
                            id="address" value={formData.address} onChange={handleInputChange}
                            className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-brand-red outline-none transition-all"
                            placeholder="Building, Street, Area" rows={2} required 
                          />
                        </div>

                        <div className="flex gap-4 pt-6">
                          <button 
                            type="button" onClick={prevStep}
                            className="flex-1 bg-gray-100 text-gray-600 font-bold py-4 rounded-xl hover:bg-gray-200 transition-all"
                          >
                            Back
                          </button>
                          <button 
                            type="button" onClick={nextStep}
                            className="flex-[2] bg-brand-navy text-white font-bold py-4 rounded-xl hover:bg-brand-red transition-all"
                          >
                            Next Step
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-brand-navy uppercase tracking-wider block">Preferred Date *</label>
                            <input 
                              type="date" id="date" value={formData.date} onChange={handleInputChange}
                              className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-brand-red outline-none transition-all"
                              required 
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-brand-navy uppercase tracking-wider block">Preferred Time *</label>
                            <select 
                              id="time" value={formData.time} onChange={handleInputChange}
                              className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-brand-red outline-none transition-all"
                              required
                            >
                              <option value="">-- Choose Time --</option>
                              {['9:00 AM - 12:00 PM', '12:00 PM - 3:00 PM', '3:00 PM - 6:00 PM'].map(t => (
                                <option key={t} value={t}>{t}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-bold text-brand-navy uppercase tracking-wider block">Additional Notes</label>
                          <textarea 
                            id="notes" value={formData.notes} onChange={handleInputChange}
                            className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-brand-red outline-none transition-all"
                            placeholder="Any special requests?" rows={3}
                          />
                        </div>

                        <div className="bg-brand-cream/50 p-6 rounded-2xl border border-brand-gold/20">
                          <h4 className="font-bold text-brand-navy text-xs uppercase tracking-widest mb-3">Booking Summary</h4>
                          <div className="text-sm space-y-1 text-gray-700">
                            <p><strong>Service:</strong> {formData.service}</p>
                            <p><strong>Urgency:</strong> {formData.urgency}</p>
                            <p><strong>Phone:</strong> {formData.phone}</p>
                            <p><strong>Schedule:</strong> {formData.date} at {formData.time}</p>
                          </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                          <button 
                            type="button" onClick={prevStep}
                            className="flex-1 bg-gray-100 text-gray-600 font-bold py-4 rounded-xl hover:bg-gray-200 transition-all"
                          >
                            Back
                          </button>
                          <button 
                            type="submit"
                            className="flex-[2] bg-brand-green text-white font-bold py-4 rounded-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
                          >
                            <i className="fa-brands fa-whatsapp text-xl"></i>
                            Confirm via WhatsApp
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </form>
                </>
              ) : (
                <div className="text-center py-10">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-24 h-24 bg-brand-green text-white rounded-full flex items-center justify-center text-4xl mx-auto mb-8 shadow-xl shadow-green-500/20"
                  >
                    <i className="fa-solid fa-check"></i>
                  </motion.div>
                  <h2 className="text-4xl font-serif font-bold text-brand-navy mb-4">Booking Confirmed!</h2>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Your request has been sent! We will contact you on WhatsApp within 30 minutes to confirm your scheduled visit.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="tel:+971524524295"
                      className="bg-brand-red text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-navy transition-all flex items-center justify-center gap-2"
                    >
                      <i className="fa-solid fa-phone"></i> Call Us Now
                    </a>
                    <button 
                      onClick={onClose}
                      className="bg-gray-100 text-gray-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
