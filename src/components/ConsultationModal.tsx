import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    platform: 'WhatsApp Video',
    language: 'English',
    notes: ''
  });

  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      // Set min date to today
      const today = new Date().toISOString().split('T')[0];
      const dateInput = document.getElementById('consultDate') as HTMLInputElement;
      if (dateInput) dateInput.setAttribute('min', today);
    }
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handlePlatformChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, platform: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format date
    const formattedDate = new Date(formData.date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    // Create WhatsApp message
    const message = `*🎥 VIRTUAL CONSULTATION BOOKING*

━━━━━━━━━━━━━━━━━━━━━
*👤 CUSTOMER DETAILS*
━━━━━━━━━━━━━━━━━━━━━
*Name:* ${formData.name}
*Phone:* ${formData.phone}

━━━━━━━━━━━━━━━━━━━━━
*🛠️ SERVICE NEEDED*
━━━━━━━━━━━━━━━━━━━━━
${formData.service}

━━━━━━━━━━━━━━━━━━━━━
*📅 CONSULTATION SCHEDULE*
━━━━━━━━━━━━━━━━━━━━━
*Date:* ${formattedDate}
*Time:* ${formData.time}
*Platform:* ${formData.platform}
*Language:* ${formData.language}

${formData.notes ? `━━━━━━━━━━━━━━━━━━━━━\n*📝 ISSUE DETAILS*\n━━━━━━━━━━━━━━━━━━━━━\n${formData.notes}\n` : ''}

━━━━━━━━━━━━━━━━━━━━━
Please confirm my consultation and share the video call link 15 minutes before the meeting.

Thank you! 🙏`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/971524524295?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    setIsSuccess(true);
  };

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
            className="relative bg-white w-full max-w-[700px] rounded-[30px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
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
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-red to-brand-navy flex items-center justify-center text-white text-4xl mx-auto mb-6 shadow-xl shadow-brand-red/20">
                      <i className="fa-solid fa-video"></i>
                    </div>
                    <span className="inline-block bg-brand-gold text-brand-navy px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">VIRTUAL CONSULTATION</span>
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-2">Virtual Consultation</h2>
                    <p className="text-gray-500 text-sm">
                      Get expert advice from the comfort of your home via video call.<br />
                      <strong className="text-brand-red">100% FREE • 15 Minutes • Expert Guidance</strong>
                    </p>
                  </div>

                  {/* Benefits Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
                    {[
                      { icon: 'fa-video', title: 'Video Call', desc: 'Show us the problem' },
                      { icon: 'fa-bolt', title: 'Instant Quote', desc: 'Get pricing immediately' },
                      { icon: 'fa-shield-halved', title: '100% Free', desc: 'No hidden charges' },
                      { icon: 'fa-language', title: 'Multi-Language', desc: 'EN/AR/HI/UR' }
                    ].map((item, i) => (
                      <div key={i} className="text-center p-4 bg-brand-cream/30 rounded-2xl border border-brand-gold/10">
                        <i className={`fa-solid ${item.icon} text-brand-red text-xl mb-2`}></i>
                        <h4 className="text-[11px] font-bold text-brand-navy uppercase tracking-tight">{item.title}</h4>
                        <p className="text-[9px] text-gray-500">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">Your Name *</label>
                        <input 
                          type="text" id="name" value={formData.name} onChange={handleInputChange}
                          className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-brand-red outline-none transition-all placeholder:text-gray-300"
                          placeholder="John Doe" required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">Phone / WhatsApp *</label>
                        <input 
                          type="tel" id="phone" value={formData.phone} onChange={handleInputChange}
                          className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-brand-red outline-none transition-all placeholder:text-gray-300"
                          placeholder="+971 XX XXX XXXX" required 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">Service You Need Help With *</label>
                      <select 
                        id="service" value={formData.service} onChange={handleInputChange}
                        className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-brand-red outline-none transition-all"
                        required
                      >
                        <option value="">-- Select Service --</option>
                        <option value="Paint Work">🎨 Paint Work</option>
                        <option value="AC Maintenance">❄️ AC Service / Repair</option>
                        <option value="Plumbing">💧 Plumbing Issue</option>
                        <option value="Electrical">⚡ Electrical Problem</option>
                        <option value="Tile Work">🪨 Tile / Marble Work</option>
                        <option value="Wooden Work">🪵 Wooden Work / Pergola</option>
                        <option value="General Maintenance">🛠️ General Maintenance</option>
                        <option value="Other">📋 Other (specify in notes)</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">Preferred Date *</label>
                        <input 
                          type="date" id="date" value={formData.date} onChange={handleInputChange}
                          className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-brand-red outline-none transition-all"
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">Preferred Time *</label>
                        <select 
                          id="time" value={formData.time} onChange={handleInputChange}
                          className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-brand-red outline-none transition-all"
                          required
                        >
                          <option value="">-- Select Time --</option>
                          {['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'].map(t => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">Video Call Platform *</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { val: 'WhatsApp Video', icon: 'fa-whatsapp', label: 'WhatsApp' },
                          { val: 'Zoom', icon: 'fa-video', label: 'Zoom' },
                          { val: 'Google Meet', icon: 'fa-google', label: 'Meet' }
                        ].map(p => (
                          <label key={p.val} className={cn(
                            "relative p-3 rounded-xl border-2 flex flex-col items-center gap-2 cursor-pointer transition-all text-center",
                            formData.platform === p.val ? "bg-brand-red border-brand-red text-white" : "border-gray-100 hover:border-gray-200"
                          )}>
                            <input 
                              type="radio" 
                              name="platform" 
                              value={p.val} 
                              checked={formData.platform === p.val} 
                              onChange={handlePlatformChange}
                              className="sr-only"
                            />
                            <i className={`fa-brands ${p.icon} text-xl`}></i>
                            <span className="text-[9px] font-bold uppercase tracking-tight">{p.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">Preferred Language</label>
                      <select 
                        id="language" value={formData.language} onChange={handleInputChange}
                        className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-brand-red outline-none transition-all"
                      >
                        <option value="English">English</option>
                        <option value="Arabic">العربية (Arabic)</option>
                        <option value="Hindi">हिंदी (Hindi)</option>
                        <option value="Urdu">اردو (Urdu)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-brand-navy uppercase tracking-wider block">Describe Your Issue (Optional)</label>
                      <textarea 
                        id="notes" value={formData.notes} onChange={handleInputChange}
                        className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-brand-red outline-none transition-all placeholder:text-gray-300"
                        placeholder="Tell us about your problem..." rows={3}
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-brand-navy text-white font-bold py-5 rounded-xl hover:bg-brand-red transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-navy/20 hover:shadow-brand-red/20"
                    >
                      <i className="fa-solid fa-calendar-check text-xl"></i>
                      Book Virtual Consultation
                    </button>

                    <p className="text-center text-[10px] text-gray-400">
                      <i className="fa-solid fa-circle-info mr-1"></i>
                      Confirmation will be sent via WhatsApp within 15 minutes
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center text-5xl mx-auto mb-8 shadow-xl shadow-green-500/20"
                  >
                    <i className="fa-solid fa-circle-check"></i>
                  </motion.div>
                  <h2 className="text-4xl font-serif font-bold text-brand-navy mb-4">Consultation Booked!</h2>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Your free virtual consultation has been scheduled. We'll send you a video call link via WhatsApp 15 minutes before the meeting.
                  </p>
                  
                  <div className="bg-brand-cream/40 p-6 rounded-2xl border border-brand-gold/20 text-left mb-8 max-w-md mx-auto">
                    <p className="text-sm"><strong>Name:</strong> {formData.name}</p>
                    <p className="text-sm"><strong>Service:</strong> {formData.service}</p>
                    <p className="text-sm"><strong>Platform:</strong> {formData.platform}</p>
                    <p className="text-sm"><strong>Schedule:</strong> {formData.date} at {formData.time}</p>
                  </div>

                  <button 
                    onClick={onClose}
                    className="bg-brand-navy text-white px-10 py-4 rounded-xl font-bold hover:bg-brand-red transition-all shadow-lg"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationModal;
