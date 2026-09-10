import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Home, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Check
} from 'lucide-react';
import { TopBar, Navbar, Footer } from './components/Navigation';

const MinimalAdHeader = () => {
  return (
    <nav className="bg-white px-4 sm:px-6 md:px-8 flex justify-between items-center shadow-md sticky top-0 z-[100] h-16 w-full border-b border-gray-100">
      <Link to="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 select-none">
        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-brand-navy rounded-lg flex items-center justify-center border-2 border-brand-gold shadow-sm">
          <span className="text-brand-gold font-bold text-lg sm:text-xl font-sans">H</span>
        </div>
        <div>
          <h1 className="text-sm sm:text-base md:text-xl font-bold text-brand-navy tracking-tight leading-none uppercase">HOME RESCUE</h1>
          <p className="text-[7px] sm:text-[8px] md:text-[10px] text-brand-gold tracking-[0.2em] font-bold mt-0.5 sm:mt-1 uppercase">TECHNICAL SERVICES</p>
        </div>
      </Link>

      <div className="flex items-center gap-2 sm:gap-3">
        <a 
          href="https://wa.me/971524524295?text=Hello%20Home%20Rescue!%20I%20just%20requested%20an%20AC%20cleaning%20quote%20and%20would%20like%20to%20follow%20up."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex bg-[#25D366] text-white px-4 py-2 sm:py-2.5 rounded-full hover:bg-opacity-95 items-center gap-2 shadow-sm text-xs font-bold transition-transform active:scale-95 uppercase tracking-wider"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current" /> WhatsApp
        </a>
        <a 
          href="tel:+971524524295" 
          className="bg-[#C9153B] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-opacity-90 flex items-center gap-1.5 sm:gap-2 shadow-md text-xs sm:text-xs font-bold transition-transform active:scale-95 uppercase tracking-wider"
        >
          <Phone className="w-3.5 h-3.5" /> <span>CALL NOW</span>
        </a>
      </div>
    </nav>
  );
};

const MinimalAdFooter = () => {
  return (
    <footer className="bg-brand-navy text-white/60 py-6 sm:py-8 px-4 sm:px-6 text-center text-xs border-t border-white/5 relative overflow-hidden w-full">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
        <p className="font-medium text-gray-400 text-[11px] sm:text-xs">
          © {new Date().getFullYear()} <span className="text-white font-bold">Home Rescue Technical Services</span>. All Rights Reserved.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-6 text-[10px] font-bold uppercase tracking-widest text-brand-gold">
          <a href="tel:+971524524295" className="hover:text-white transition-colors">
            +971 52 452 4295
          </a>
          <span className="hidden sm:inline text-white/20">•</span>
          <span>Licensed & Insured</span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span>Serving All Dubai & UAE</span>
        </div>
      </div>
    </footer>
  );
};

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const isAdMode = searchParams.get('ad') === '1';

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7]">
      <Helmet>
        <title>Thank You | Home Rescue Technical Services Dubai</title>
        <meta 
          name="description" 
          content="Thank you for contacting Home Rescue Technical Services. Our team will review your request and get in touch immediately." 
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://resqhome.ae/thank-you" />
      </Helmet>

      {isAdMode ? <MinimalAdHeader /> : (
        <>
          <TopBar />
          <Navbar />
        </>
      )}

      {/* Main Content with mobile bottom clearance for StickyMobileBar */}
      <main className="flex-1 flex items-center justify-center py-8 sm:py-14 md:py-20 px-3.5 sm:px-6 lg:px-8 pb-28 md:pb-16">
        <div className="max-w-4xl w-full mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-5 sm:p-8 md:p-12 lg:p-14 text-center relative overflow-hidden"
          >
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-navy via-brand-gold to-brand-navy"></div>

            {/* Success Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 ring-6 sm:ring-8 ring-green-50/60">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-brand-cream border border-brand-gold/30 text-brand-gold text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest mb-3 sm:mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Quote Request Received</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-black text-brand-navy tracking-tight mb-3 sm:mb-4 leading-tight">
              Thank You! We Have Received Your Quote Request.
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Our technical coordinator is reviewing your details right now. We will respond via <strong className="text-brand-navy font-bold">WhatsApp</strong> or <strong className="text-brand-navy font-bold">phone call</strong> within <span className="text-[#C9153B] font-bold">15–30 minutes</span> with an accurate, upfront quotation.
            </p>

            {/* Next Steps Strip — responsive on PC & mobile */}
            <div className="text-left my-6 sm:my-8 p-4 sm:p-6 bg-brand-cream/50 rounded-xl sm:rounded-2xl border border-gray-100">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-brand-gold">
                  What Happens Next
                </span>
                <span className="text-[10px] sm:text-xs text-gray-500 font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-brand-gold" /> Avg. response: &lt; 15 mins
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
                <div className="flex md:flex-col gap-3 items-start p-3 sm:p-3.5 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-7 h-7 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-brand-navy">Instant Review</h4>
                    <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 leading-snug">
                      We check your property type (Villa / Commercial) and AC units count.
                    </p>
                  </div>
                </div>

                <div className="flex md:flex-col gap-3 items-start p-3 sm:p-3.5 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-7 h-7 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-brand-navy">Fixed Price Quote</h4>
                    <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 leading-snug">
                      We send clear upfront pricing with zero hidden charges or surprise costs.
                    </p>
                  </div>
                </div>

                <div className="flex md:flex-col gap-3 items-start p-3 sm:p-3.5 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-7 h-7 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-brand-navy">Scheduled Service</h4>
                    <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 leading-snug">
                      Certified HVAC technicians arrive on time with specialized deep cleaning gear.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badges strip for PC & Mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 py-3 my-4 border-y border-gray-100 text-left">
              <div className="flex items-center gap-2 text-xs text-gray-600 font-semibold">
                <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="text-[11px] sm:text-xs">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600 font-semibold">
                <Check className="w-4 h-4 text-green-600 shrink-0" />
                <span className="text-[11px] sm:text-xs">100% Cooling Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600 font-semibold">
                <Clock className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="text-[11px] sm:text-xs">Same-Day Dispatch</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600 font-semibold">
                <Sparkles className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="text-[11px] sm:text-xs">500+ Villas Serviced</span>
              </div>
            </div>

            {/* Action Buttons — Touch friendly on mobile, spacious on PC */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-3">
              <a 
                href="https://wa.me/971524524295?text=Hello%20Home%20Rescue!%20I%20just%20submitted%20a%20quote%20request%20for%20AC%20Cleaning%20and%20would%20like%20to%20follow%20up."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp Now</span>
              </a>

              <a 
                href="tel:+971524524295"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0D1B2A] hover:bg-[#152e4a] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly (+971 52 452 4295)</span>
              </a>
            </div>

            {/* Navigation links */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-100 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-gray-400 font-semibold">
              <Link 
                to={isAdMode ? '/services/ac-cleaning-dubai?ad=1' : '/services/ac-cleaning-dubai'} 
                className="hover:text-brand-navy transition-colors inline-flex items-center gap-1.5 py-1"
              >
                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                <span>Back to AC Cleaning</span>
              </Link>
              <span className="hidden sm:inline">•</span>
              <Link 
                to="/" 
                className="hover:text-brand-navy transition-colors inline-flex items-center gap-1.5 py-1"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Back to Home</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      {isAdMode ? <MinimalAdFooter /> : <Footer />}
    </div>
  );
};

export default ThankYou;
