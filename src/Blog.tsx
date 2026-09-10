import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  Wind, 
  Wrench, 
  Paintbrush, 
  Sparkles, 
  MessageCircle, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Clock 
} from 'lucide-react';
import { useBooking } from './components/BookingModal';
import { trackWhatsAppConversion } from './utils/trackConversion';

const Blog: React.FC = () => {
  const { openBooking } = useBooking();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppConversion();
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col">
      <Helmet>
        <title>Home Maintenance Blog — Dubai Tips & Guides | Resqhome</title>
        <meta 
          name="description" 
          content="Expert home maintenance tips, guides and advice for Dubai and UAE homeowners. AC care, plumbing tips, painting guides and more — coming soon from Resqhome." 
        />
        <link rel="canonical" href="https://resqhome.ae/blog" />
      </Helmet>

      {/* Hero Section (Navy background) */}
      <section className="relative bg-[#08264B] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D9A520]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-5">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-[#D9A520]/40 text-[#D9A520] text-xs font-bold uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMING SOON</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white leading-tight"
          >
            Home Maintenance Tips & Guides
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans"
          >
            We're putting together expert guides on AC care, plumbing, painting and everything home maintenance in Dubai and the UAE. Subscribe to be notified when we launch.
          </motion.p>
        </div>
      </section>

      {/* Email Subscription Box (Centered on cream background) */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-gray-200/60 border border-gray-100 p-6 sm:p-10 text-center">
            {subscribed ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-4 space-y-2"
              >
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#08264B]">You're on the list!</h3>
                <p className="text-sm text-gray-600">
                  Thank you! We'll notify you as soon as our expert guides go live.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="space-y-1 mb-4">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#08264B]">
                    Get notified when the first guide drops
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    No spam. Just actionable UAE home maintenance advice.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input 
                      type="email" 
                      required
                      placeholder="Enter your email address" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D9A520] bg-gray-50/50"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="bg-[#D9A520] hover:bg-[#c49419] text-[#08264B] px-6 py-3 rounded-xl font-bold text-sm tracking-wider uppercase transition-all shadow-md active:scale-95 cursor-pointer shrink-0"
                  >
                    Notify Me
                  </button>
                </div>

                <div className="pt-2">
                  <a 
                    href="https://wa.me/971524524295?text=Hello%20Resqhome!%20I%20have%20a%20home%20maintenance%20question."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppClick}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#08264B] hover:text-[#D9A520] font-bold transition-colors"
                  >
                    <span>Or WhatsApp us your question directly</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Preview Cards Section (3 cards showing upcoming topics) */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-[#08264B] tracking-tight">
              Upcoming Guides & Articles
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-xl mx-auto">
              Topics our technical specialists are currently preparing for UAE homeowners and tenants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: AC Maintenance */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#08264B]"></div>
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#08264B] bg-blue-50 px-2.5 py-1 rounded-md">
                    AC Maintenance
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#D9A520] bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                    <Clock className="w-3 h-3" /> Coming Soon
                  </span>
                </div>

                <div className="w-12 h-12 rounded-xl bg-brand-cream/60 flex items-center justify-center text-[#08264B] mb-4 border border-brand-gold/20">
                  <Wind className="w-6 h-6" />
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#08264B] mb-2 leading-snug">
                  How to maintain your AC in Dubai summer
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Essential filter cleaning, coil care, and thermostat settings to prevent breakdowns during 45°C+ summer heat.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-semibold">
                <span>By Certified HVAC Engineers</span>
                <span className="text-gray-300 select-none">• Preview</span>
              </div>
            </div>

            {/* Card 2: Plumbing */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#D9A520]"></div>
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#08264B] bg-blue-50 px-2.5 py-1 rounded-md">
                    Plumbing
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#D9A520] bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                    <Clock className="w-3 h-3" /> Coming Soon
                  </span>
                </div>

                <div className="w-12 h-12 rounded-xl bg-brand-cream/60 flex items-center justify-center text-[#08264B] mb-4 border border-brand-gold/20">
                  <Wrench className="w-6 h-6" />
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#08264B] mb-2 leading-snug">
                  When to call a plumber vs DIY fix in UAE
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Recognize warning signs of concealed pipe leaks, low water pressure, and drainage backups before water damage occurs.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-semibold">
                <span>By Master Plumbers</span>
                <span className="text-gray-300 select-none">• Preview</span>
              </div>
            </div>

            {/* Card 3: Painting */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#08264B]"></div>
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#08264B] bg-blue-50 px-2.5 py-1 rounded-md">
                    Painting
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#D9A520] bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                    <Clock className="w-3 h-3" /> Coming Soon
                  </span>
                </div>

                <div className="w-12 h-12 rounded-xl bg-brand-cream/60 flex items-center justify-center text-[#08264B] mb-4 border border-brand-gold/20">
                  <Paintbrush className="w-6 h-6" />
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#08264B] mb-2 leading-snug">
                  Best paint brands for Dubai weather
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  A comprehensive comparison of moisture-resistant, UV-reflective exterior and interior paints suited for UAE climate.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-semibold">
                <span>By Professional Decorators</span>
                <span className="text-gray-300 select-none">• Preview</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Card (Navy) */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 mt-auto pb-24 md:pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#08264B] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D9A520]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black tracking-tight text-white">
                Have a home maintenance question?
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                WhatsApp our experts — free advice, no obligation.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
                <a 
                  href="https://wa.me/971524524295?text=Hello%20Resqhome!%20I%20have%20a%20home%20maintenance%20question%20and%20would%20like%20expert%20advice."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp Our Experts</span>
                </a>

                <button 
                  onClick={() => openBooking('Free Inspection Inquiry')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#D9A520] hover:bg-[#c49419] text-[#08264B] px-7 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Free Inspection</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
