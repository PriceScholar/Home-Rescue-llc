import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { serviceCategories } from '../data/servicesData';
import { trackWhatsAppConversion } from '../utils/trackConversion';

import ConsultationModal from './ConsultationModal';
import LicenseModal from './LicenseModal';
import Chatbot from './Chatbot';

const WHATSAPP_NUMBER = '971524524295';

interface BookingContextType {
  isOpen: boolean;
  isConsultationOpen: boolean;
  isLicenseOpen: boolean;
  openBooking: (serviceName?: string, isBookNow?: boolean) => void;
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
  const [isBookNowMode, setIsBookNowMode] = useState(false);

  const openBooking = (serviceName?: string, isBookNow?: boolean) => {
    setPreSelectedService(serviceName);
    setIsBookNowMode(!!isBookNow);
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
    trackWhatsAppConversion();
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
        isBookNowMode={isBookNowMode}
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
  isBookNowMode?: boolean;
}

const BookingModal: React.FC<BookingModalProps> = ({ 
  isOpen, 
  onClose, 
  preSelectedService,
  isBookNowMode = false
}) => {
  const isAcOrPlumbingQuery = 
    isBookNowMode ||
    (preSelectedService ? (
      preSelectedService.toLowerCase().includes('ac') || 
      preSelectedService.toLowerCase().includes('plumb') ||
      preSelectedService.toLowerCase().includes('pipe')
    ) : false) ||
    (typeof window !== 'undefined' && (
      window.location.pathname.includes('ac-') ||
      window.location.pathname.includes('-ac') ||
      window.location.pathname.includes('plumb') ||
      window.location.pathname.includes('drain') ||
      window.location.pathname.includes('leak') ||
      window.location.pathname.includes('pipe')
    ));

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
  const [errors, setErrors] = useState<string[]>([]);

  const selectedServices = formData.service
    ? formData.service.split(', ').map(s => s.trim()).filter(Boolean)
    : [];

  const toggleService = (serviceName: string) => {
    let newSelected: string[];
    if (selectedServices.includes(serviceName)) {
      newSelected = selectedServices.filter(s => s !== serviceName);
    } else {
      newSelected = [...selectedServices, serviceName];
    }
    setFormData(prev => ({
      ...prev,
      service: newSelected.join(', ')
    }));
  };

  const clearAllServices = () => {
    setFormData(prev => ({
      ...prev,
      service: ''
    }));
  };

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsSuccess(false);
      setErrors([]);
      
      if (preSelectedService) {
        let foundCategory: string | undefined;
        let foundService: string | undefined;

        // Normalize preSelectedService for easier matching (e.g. handle "Wall Painting - Package Name")
        const cleanName = preSelectedService.split(' - ')[0].trim().toLowerCase();

        // 1. Try to find a sub-service match first (highest priority)
        for (const cat of serviceCategories) {
          const matchingSub = cat.subs.find(sub => 
            sub.name.toLowerCase() === cleanName || 
            sub.id.toLowerCase() === cleanName
          );
          if (matchingSub) {
            foundCategory = cat.name;
            foundService = matchingSub.name;
            break;
          }
        }

        // 2. If not found, try to find a category match (checking name, id, and common titles)
        if (!foundCategory) {
          const cat = serviceCategories.find(c => 
            c.name.toLowerCase() === cleanName || 
            c.id.toLowerCase() === cleanName || 
            (c.id === 'paint-work' && cleanName === 'painting services') ||
            (c.id === 'electrical-services' && cleanName === 'electrical works') ||
            (c.id === 'ceiling-work' && cleanName === 'ceiling works') ||
            (c.id === 'handyman-more' && cleanName === 'handyman services') ||
            (c.id === 'home-general-maintenance' && cleanName === 'home maintenance')
          );
          if (cat) {
            foundCategory = cat.name;
            // Pre-select the first sub-service if none found, to make "Continue" work easier
            if (cat.subs && cat.subs.length > 0) {
              foundService = cat.subs[0].name;
            }
          }
        }

        if (foundCategory) {
          setFormData(prev => ({ 
            ...prev, 
            category: foundCategory || '', 
            service: foundService || '' 
          }));
        }
      } else {
        setFormData(prev => ({ ...prev, category: '', service: '' }));
      }

      // Set min date to today
      setTimeout(() => {
        const today = new Date().toISOString().split('T')[0];
        const dateInput = document.getElementById('date') as HTMLInputElement;
        if (dateInput) dateInput.setAttribute('min', today);
      }, 0);
    }
  }, [isOpen, preSelectedService]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    
    setFormData(prev => {
      const next = { ...prev, [id]: value };
      
      // If we change category from the dropdown, sync the category field and reset service
      if (id === 'serviceCategory') {
        next.category = value;
        next.service = '';
      }
      
      return next;
    });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, urgency: e.target.value }));
  };

  const nextStep = () => {
    const stepErrors = validateStep();
    if (stepErrors.length === 0) {
      setErrors([]);
      setStep(s => s + 1);
    } else {
      setErrors(stepErrors);
    }
  };

  const prevStep = () => {
    setErrors([]);
    setStep(s => s - 1);
  };

  const validateStep = () => {
    const newErrors: string[] = [];
    if (step === 1) {
      if (!formData.category) newErrors.push('Please select a service category');
      if (!formData.service) newErrors.push('Please select a specific service');
      if (!formData.urgency) newErrors.push('Please select urgency level');
    } else if (step === 2) {
      if (!formData.name) newErrors.push('Name is required');
      if (!formData.phone) newErrors.push('Phone number is required');
      if (!formData.emirate) newErrors.push('Please select your emirate');
      if (!formData.address) newErrors.push('Address is required');
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.date || !formData.time) {
      setErrors(['Please select both a preferred date and time']);
      return;
    }

    setErrors([]);
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
    trackWhatsAppConversion();
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
                    {errors.length > 0 && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }} 
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl mb-6"
                      >
                        <div className="flex gap-2">
                          <i className="fa-solid fa-triangle-exclamation text-red-500 mt-1"></i>
                          <div className="space-y-1">
                            {errors.map((err, i) => (
                              <p key={i} className="text-red-700 text-xs font-bold uppercase tracking-wider">{err}</p>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

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
                            {serviceCategories
                              .filter(cat => {
                                if (!isAcOrPlumbingQuery) {
                                  const isAcOrPlumb = 
                                    cat.id === 'ac-maintenance' || 
                                    cat.id === 'plumbing-services' || 
                                    cat.name.toLowerCase().includes('ac') || 
                                    cat.name.toLowerCase().includes('plumb');
                                  return !isAcOrPlumb;
                                }
                                return true;
                              })
                              .map(cat => (
                                <option key={cat.name} value={cat.name}>{cat.name}</option>
                              ))}
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-bold text-brand-navy uppercase tracking-wider block">Specific Service *</label>
                          {!formData.category ? (
                            <div className="w-full p-4 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl text-center text-gray-400 text-sm font-medium">
                              -- Please select a service category first --
                            </div>
                          ) : (
                            <>
                              <div className="space-y-2 max-h-[220px] overflow-y-auto p-2 bg-gray-50 border-2 border-gray-100 rounded-xl">
                                {subServices.map(sub => {
                                  const isChecked = selectedServices.includes(sub.name);
                                  return (
                                    <label 
                                      key={sub.name} 
                                      className={cn(
                                        "flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all hover:bg-white",
                                        isChecked 
                                          ? "bg-white border-brand-gold text-brand-navy shadow-sm" 
                                          : "border-transparent text-gray-600 hover:border-gray-200"
                                      )}
                                    >
                                      <div className={cn(
                                        "w-5 h-5 rounded border-2 flex items-center justify-center transition-all shrink-0",
                                        isChecked 
                                          ? "bg-brand-gold border-brand-gold text-white" 
                                          : "border-gray-300 bg-white"
                                      )}>
                                        {isChecked && <i className="fa-solid fa-check text-[10px]"></i>}
                                      </div>
                                      <span className="text-sm font-bold select-none">{sub.name}</span>
                                      <input 
                                        type="checkbox"
                                        className="sr-only"
                                        checked={isChecked}
                                        onChange={() => toggleService(sub.name)}
                                      />
                                    </label>
                                  );
                                })}
                              </div>
                              <div className="flex items-center justify-between px-2 pt-1 text-xs">
                                <span className="font-bold text-brand-navy">
                                  {selectedServices.length} {selectedServices.length === 1 ? 'Service' : 'Services'} Selected
                                </span>
                                {selectedServices.length > 0 && (
                                  <button
                                    type="button"
                                    onClick={clearAllServices}
                                    className="text-brand-red hover:text-brand-navy font-black uppercase tracking-wider cursor-pointer transition-colors"
                                  >
                                    Clear All
                                  </button>
                                )}
                              </div>
                            </>
                          )}
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
                    Tap send in WhatsApp to confirm — we'll reply within 30 minutes.
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
