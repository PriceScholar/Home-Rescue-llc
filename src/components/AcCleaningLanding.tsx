import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  Star, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  Wind, 
  Building, 
  Home, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  Award, 
  AlertTriangle, 
  FileText, 
  Layers, 
  Zap, 
  CheckCheck,
  Send,
  Building2,
  Store,
  Utensils,
  Hotel,
  Warehouse
} from 'lucide-react';
import { TopBar, Navbar, Footer } from './Navigation';
import { useBooking } from './BookingModal';
import { trackWhatsAppConversion } from '../utils/trackConversion';
import { cn } from '../lib/utils';
import AcBrandsSection from './AcBrandsSection';

interface AcCleaningLandingProps {
  isAdMode?: boolean;
}

const MinimalAdHeader = () => {
  return (
    <nav className="bg-white px-4 md:px-8 flex justify-between items-center shadow-md sticky top-0 z-[100] h-14 md:h-16 w-full">
      <div className="flex items-center gap-2 md:gap-3 shrink-0 select-none">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-navy rounded-lg flex items-center justify-center border-2 border-brand-gold">
          <span className="text-brand-gold font-bold text-lg md:text-xl font-sans">H</span>
        </div>
        <div>
          <span className="text-base sm:text-lg md:text-xl font-bold text-brand-navy tracking-tight leading-none uppercase">HOME RESCUE</span>
          <p className="text-[7px] sm:text-[8px] md:text-[10px] text-brand-gold tracking-[0.2em] font-bold mt-0.5 sm:mt-1 uppercase">TECHNICAL SERVICES</p>
        </div>
      </div>

      <div className="flex items-center">
        <a 
          href="tel:+971524524295" 
          className="bg-[#C9153B] text-white px-6 py-2.5 sm:py-3 rounded-full hover:bg-opacity-90 flex items-center gap-2 shadow-lg text-[11px] sm:text-xs font-bold transition-transform active:scale-95 uppercase tracking-wider"
        >
          <Phone className="w-4 h-4" /> CALL NOW
        </a>
      </div>
    </nav>
  );
};

const MinimalAdFooter = () => {
  return (
    <footer className="bg-brand-navy text-white/60 py-8 px-6 text-center text-xs border-t border-white/5 relative overflow-hidden w-full">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-medium text-gray-400">
          © {new Date().getFullYear()} <span className="text-white font-bold">Home Rescue Technical Services</span>. All Rights Reserved.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-[10px] font-bold uppercase tracking-widest text-brand-gold">
          <a href="tel:+971524524295" className="hover:text-white transition-colors">
            +971 52 452 4295
          </a>
          <span className="hidden sm:inline text-white/20">•</span>
          <span>Licensed & Insured</span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span>Serving All 7 Emirates</span>
        </div>
      </div>
    </footer>
  );
};

export const AcCleaningLanding: React.FC<AcCleaningLandingProps> = ({ isAdMode = false }) => {
  const navigate = useNavigate();
  const { openBooking, callNow, askExpert } = useBooking();

  // Quote form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    propertyType: 'Villa',
    units: '2-3 Units',
    date: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Track WhatsApp conversion & open WhatsApp with pre-filled message
    trackWhatsAppConversion();
    setFormSubmitted(true);

    const message = encodeURIComponent(
      `Hello Resqhome! I would like to request an AC Cleaning Quote:\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Property Type: ${formData.propertyType}\n` +
      `• AC Units: ${formData.units}\n` +
      `• Preferred Date: ${formData.date || 'Earliest available'}`
    );

    try {
      window.open(`https://wa.me/971524524295?text=${message}`, '_blank');
    } catch {
      // ignore popup issues
    }

    const redirectPath = isAdMode ? '/thank-you?ad=1' : '/thank-you';
    navigate(redirectPath);
  };

  const scrollToQuote = () => {
    const el = document.getElementById('ac-quote-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      openBooking('AC Cleaning Dubai');
    }
  };

  const faqs = [
    {
      q: 'How much does AC cleaning cost in Dubai?',
      a: 'The cost depends on the AC type, number of units, cleaning depth and property requirements. Split AC cleaning starts from AED 150 per unit, while comprehensive deep cleaning starts from AED 250. Villa and commercial multi-unit packages receive special tiered discounts. Contact us with your AC details for an accurate quote.'
    },
    {
      q: 'How often should AC units be cleaned in Dubai?',
      a: 'Due to Dubai’s dusty desert climate and high humidity, AC units should receive filter and coil cleaning every 3 to 6 months for residential villas and apartments. For commercial spaces (offices, restaurants, retail), monthly or bi-monthly maintenance is recommended to maintain peak cooling and low electricity bills.'
    },
    {
      q: 'Do you clean ACs in villas?',
      a: 'Yes. Professional AC cleaning is provided for all villa types across Dubai, including split units, ducted systems, cassette units, and central FCUs. We serve individual villas, luxury estates, and villa compounds in Arabian Ranches, Dubai Hills, Palm Jumeirah, Emirates Hills, and JVC.'
    },
    {
      q: 'Do you provide commercial AC cleaning?',
      a: 'Yes. Commercial AC cleaning can be arranged for offices, shops, restaurants, cafes, warehouses, hotels, clinics, and commercial facilities. We offer scheduled maintenance contracts (AMC) and after-hours servicing to prevent business disruption.'
    },
    {
      q: 'Does AC cleaning improve cooling?',
      a: 'Absolutely. Over time, dust and grime clog the evaporator coil and blower fan, restricting airflow by up to 50%. Professional deep cleaning removes this thermal blanket, restoring airflow, allowing the refrigerant to cool effectively, and dropping room temperatures much faster.'
    },
    {
      q: 'Can AC cleaning remove bad smells?',
      a: 'Yes. Stale, vinegar-like, or moldy smells are caused by bacteria, mold, and algae accumulating in the moist drain tray and cooling coils. Our antibacterial coil wash and drain flushing eliminate the microbial colonies at the source.'
    },
    {
      q: 'Does AC cleaning reduce electricity consumption?',
      a: 'Yes. A clogged AC system forces the compressor to run longer and work harder to achieve the thermostat setpoint. Cleaning restores heat exchange efficiency, which can reduce AC electricity consumption by 15% to 25% on your DEWA bill.'
    },
    {
      q: 'How long does AC cleaning take?',
      a: 'A standard split unit cleaning typically takes 30 to 45 minutes per unit. A comprehensive whole-villa ducted deep cleaning takes 2 to 4 hours depending on the number of AC units and duct accessibility.'
    },
    {
      q: 'Do I need to be home during the service?',
      a: 'An adult over 18 or an authorized property representative (maid, property manager, or tenant) needs to provide initial access and sign off on completion. For commercial facilities, security or facility management personnel can escort our technicians.'
    }
  ];

  return (
    <div className="flex flex-col bg-white text-gray-800 font-sans selection:bg-brand-gold/30 selection:text-brand-navy">
      <Helmet>
        <title>Professional AC Cleaning Services in Dubai | Villas & Commercial | Resqhome</title>
        <meta 
          name="description" 
          content="Professional AC cleaning in Dubai for villas & commercial properties. Deep coil cleaning, mold removal, duct sanitization & filter wash. Fast same-day dispatch." 
        />
        <link rel="canonical" href="https://resqhome.ae/services/ac-cleaning-dubai" />
        {isAdMode && <meta name="robots" content="noindex" />}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AC Cleaning Services Dubai",
            "description": "Professional AC Cleaning for Villas, Apartments and Commercial properties in Dubai.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Resqhome Technical Services",
              "telephone": "+971524524295",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Al Nahda",
                "addressLocality": "Dubai",
                "addressCountry": "AE"
              }
            },
            "areaServed": "Dubai",
            "offers": {
              "@type": "Offer",
              "price": "150",
              "priceCurrency": "AED"
            }
          })}
        </script>
      </Helmet>

      {isAdMode ? (
        <MinimalAdHeader />
      ) : (
        <>
          <TopBar />
          <Navbar />
        </>
      )}

      {/* 1. HERO SECTION — Above the Fold */}
      <section className="relative bg-gradient-to-b from-brand-navy via-[#0A2E5C] to-brand-navy text-white pt-10 pb-16 md:py-20 px-4 md:px-8 overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 mb-6 text-brand-gold text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Dubai's Certified Villa & Commercial Cooling Specialists
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column (Content & CTAs) */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-black tracking-tight leading-tight text-white">
                Professional AC Cleaning Services in Dubai for <span className="text-brand-gold">Villas & Commercial Properties</span>
              </h1>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl">
                Improve cooling performance, indoor air quality and AC efficiency with professional AC cleaning by trained technicians. Serving Dubai villas, apartments, offices, shops, restaurants, warehouses and commercial properties.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <button aria-label="Book free inspection"
                  onClick={scrollToQuote}
                  className="bg-brand-gold hover:bg-[#c99518] text-brand-navy font-black text-sm uppercase tracking-wider py-4 px-8 rounded-xl transition-all duration-300 shadow-xl shadow-yellow-500/10 flex items-center justify-center gap-2.5 active:scale-95 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" /> Book AC Cleaning Now
                </button>

                <a
                  href="https://wa.me/971524524295?text=Hello%20Resqhome!%20I%20would%20like%20to%20book%20an%20AC%20Cleaning%20service%20in%20Dubai."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsAppConversion}
                  className="bg-green-600 hover:bg-green-700 text-white font-black text-sm uppercase tracking-wider py-4 px-8 rounded-xl transition-all duration-300 shadow-xl shadow-green-900/20 flex items-center justify-center gap-2.5 active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" /> WhatsApp Us
                </a>
              </div>

              {/* Trust Points Underneath */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-4 text-xs font-semibold text-gray-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Villa & Commercial Cleaning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Trained AC Technicians</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Deep Cleaning Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Flexible Same-Day Visits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Transparent Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Dubai-Wide Service</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Form (Conversion Element) */}
            <div id="ac-quote-form" className="lg:col-span-5">
              <div className="bg-white text-brand-navy rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 relative">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold block">
                      Fast 30-Min Dispatch
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-black text-brand-navy">
                      Get Your AC Cleaning Quote
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-gold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>

                {formSubmitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCheck className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-serif font-bold text-brand-navy">Quote Request Sent!</h4>
                    <p className="text-xs text-gray-500 max-w-sm mx-auto">
                      Thank you! Our technical coordinator is preparing your tailored quote and will reply via WhatsApp/call immediately.
                    </p>
                    <button aria-label="Request another quote"
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-brand-gold font-bold underline cursor-pointer"
                    >
                      Request another quote
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Mohammed Al-Salem"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-gold bg-gray-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1">
                        Mobile Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 123 4567"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-gold bg-gray-50/50"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1">
                          Property Type
                        </label>
                        <select
                          value={formData.propertyType}
                          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold focus:outline-none focus:border-brand-gold bg-gray-50/50"
                        >
                          <option value="Villa">Villa</option>
                          <option value="Apartment">Apartment</option>
                          <option value="Office">Office</option>
                          <option value="Commercial">Commercial / Retail</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1">
                          Number of AC Units
                        </label>
                        <select
                          value={formData.units}
                          onChange={(e) => setFormData({ ...formData, units: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold focus:outline-none focus:border-brand-gold bg-gray-50/50"
                        >
                          <option value="1 Unit">1 Unit</option>
                          <option value="2-3 Units">2–3 Units</option>
                          <option value="4-6 Units">4–6 Units</option>
                          <option value="Whole Villa (7+ Units)">Whole Villa (7+ Units)</option>
                          <option value="Commercial Multi-Split">Commercial Multi-Split</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-brand-gold bg-gray-50/50"
                      />
                    </div>

                    <button aria-label="Submit booking"
                      type="submit"
                      className="w-full bg-brand-navy hover:bg-brand-gold hover:text-brand-navy text-white font-black text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      <Send className="w-3.5 h-3.5" /> Get a Quote
                    </button>

                    <p className="text-[10px] text-center text-gray-400 font-medium">
                      🔒 No spam. Instant WhatsApp confirmation & transparent pricing.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="bg-brand-cream/40 border-b border-gray-200/70 py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-center">
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-brand-navy">
              Dubai's AC Cleaning Specialists
            </h4>
            <p className="text-[11px] text-gray-500 font-semibold tracking-wider uppercase mt-1">
              Villas • Offices • Shops • Restaurants • Commercial Buildings • Retail Spaces
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-2">
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div>
                <div className="text-amber-500 text-xs font-black flex items-center gap-1">
                  ★★★★★ <span className="text-brand-navy font-bold">4.9/5</span>
                </div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Customer Rated</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base font-black text-brand-navy">10,000+</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">AC Units Serviced</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base font-black text-brand-navy">Certified</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Professional Technicians</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base font-black text-brand-navy">30–60 Min</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Fast Response Across Dubai</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PROBLEM SECTION */}
      <section className="py-14 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs">
              Indoor Air Hygiene & Efficiency Alert
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-brand-navy">
              Is Your AC Not Cooling Like It Used To?
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              In Dubai's dusty desert conditions, AC systems run 24/7 and accumulate heavy layers of contaminants that trap heat and circulate allergens.
            </p>
          </div>

          {/* Contaminants badges */}
          <div className="mb-10 bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <div className="text-center mb-4">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Dirty AC systems accumulate harmful particles:
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-2.5">
              {['Dust & Sand', 'Deep Dirt', 'Toxic Mold', 'Bacteria', 'Pet Hair & Dander', 'Debris', 'Cooking Grease & Contaminants'].map((item, idx) => (
                <span
                  key={idx}
                  className="bg-white text-gray-700 px-3.5 py-1.5 rounded-full text-xs font-bold border border-gray-200 shadow-sm flex items-center gap-1.5"
                >
                  <AlertTriangle className="w-3 h-3 text-amber-500" />
                  {item}
                </span>
              ))}
            </div>
            <p className="text-center text-xs text-gray-500 mt-4 font-medium">
              This severe buildup suffocates internal coils, choking airflow, spiking DEWA bills, and harming your family's respiratory health.
            </p>
          </div>

          {/* 8 Warning Signs Card */}
          <div className="bg-gradient-to-br from-red-50/50 via-white to-amber-50/30 rounded-3xl p-6 sm:p-10 border border-red-100 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-red-600 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" /> Warning Signs Checklist
                </span>
                <h3 className="text-2xl font-serif font-black text-brand-navy mt-1">
                  AC Not Cooling Properly?
                </h3>
                <p className="text-xs text-gray-500 font-medium">
                  Your AC urgently requires professional deep cleaning if you notice any of these symptoms:
                </p>
              </div>
              <button aria-label="Book free inspection"
                onClick={() => openBooking('AC Inspection')}
                className="bg-[#C9153B] hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest px-6 py-3 rounded-xl transition-all shadow-md self-start md:self-auto cursor-pointer"
              >
                Book an AC Inspection
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Airflow feels weak', desc: 'Blower fan and coils are choked by dust blanket.' },
                { title: 'Room takes too long to cool', desc: 'Evaporator fins cannot exchange cold air efficiently.' },
                { title: 'AC smells bad', desc: 'Mildew, stagnant moisture, and bacteria inside drain tray.' },
                { title: 'Dust comes from the vents', desc: 'Duct lining and supply grilles blowing accumulated dirt.' },
                { title: 'Water is leaking from indoor unit', desc: 'Drain pipe blocked by thick sludge and algae buildup.' },
                { title: 'AC makes unusual noises', desc: 'Blower wheel unbalanced due to heavy grease/debris.' },
                { title: 'Electricity consumption seems higher', desc: 'Compressor strains and runs continuously without cutting off.' },
                { title: 'Filters become dirty quickly', desc: 'Deep internal chamber is circulating recycled dirt.' }
              ].map((sign, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-red-100/70 shadow-sm flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-brand-navy">{sign.title}</h5>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">{sign.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. VILLA AC CLEANING — Dedicated Section */}
      <section className="py-14 md:py-20 px-4 md:px-8 bg-brand-cream/30 border-t border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-gold/15 text-brand-navy px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                <Home className="w-3.5 h-3.5 text-brand-gold" /> Dedicated Villa Specialists
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-black text-brand-navy leading-tight">
                AC Cleaning Services for Villas in Dubai
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Keep your home's cooling system clean, efficient and comfortable with professional AC cleaning for villas. Our specialized residential technicians use drop cloths, shoe covers, and pressurized eco-friendly wash bags to protect your luxury flooring and furnishings.
              </p>

              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-brand-navy mb-3">
                  Our technicians can service all systems:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-bold text-gray-700">
                  {[
                    'Split AC units',
                    'Wall-mounted ACs',
                    'Cassette ACs',
                    'Ducted AC systems',
                    'Central AC systems',
                    'FCU units',
                    'Indoor & outdoor AC components'
                  ].map((sys, idx) => (
                    <div key={idx} className="bg-white px-3 py-2 rounded-xl border border-gray-100 flex items-center gap-2 shadow-xs">
                      <Check className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span>{sys}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-brand-navy mb-3">
                  Ideal for:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-semibold text-brand-navy">
                  {[
                    'Individual Villas',
                    'Large Villas',
                    'Luxury Villas',
                    'Rental Villas',
                    'Holiday Homes',
                    'Villa Compounds'
                  ].map((ideal, idx) => (
                    <div key={idx} className="bg-brand-navy text-white px-3 py-2 rounded-xl flex items-center gap-2 shadow-xs">
                      <span>🏠</span>
                      <span>{ideal}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button aria-label="Book free inspection"
                  onClick={() => openBooking('Villa AC Cleaning')}
                  className="bg-brand-navy hover:bg-brand-gold hover:text-brand-navy text-white font-black text-xs uppercase tracking-widest py-3.5 px-8 rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Book Villa AC Cleaning
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/services/subs/emergency-ac-repair.jpg"
                  alt="Villa AC Cleaning Dubai"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="bg-brand-gold text-brand-navy font-black text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-md">
                    White Glove Protocol
                  </span>
                  <h4 className="text-lg font-serif font-bold">Zero-Mess Protection Guarantee</h4>
                  <p className="text-xs text-gray-200">
                    Catchment funnels, floor shielding, and non-toxic citrus-based coil sanitizers safe for children and pets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMMERCIAL AC CLEANING */}
      <section className="py-14 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs">
              Commercial & Corporate Facilities
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-brand-navy">
              Commercial AC Cleaning Services in Dubai
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              A poorly maintained AC system can affect employee comfort, customers and daily operations. We deliver high-capacity industrial cooling maintenance across commercial sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: <Building2 className="w-6 h-6 text-blue-600" />,
                title: 'Offices',
                desc: 'Keep workspaces comfortable, improve airflow, and reduce sick-building syndrome.'
              },
              {
                icon: <Utensils className="w-6 h-6 text-amber-600" />,
                title: 'Restaurants & Cafés',
                desc: 'Help remove dust, grease, moisture, and unwanted food odors from customer dining zones.'
              },
              {
                icon: <Store className="w-6 h-6 text-emerald-600" />,
                title: 'Retail Stores',
                desc: 'Maintain crisp temperatures for shoppers and prevent condensation on merchandise.'
              },
              {
                icon: <Hotel className="w-6 h-6 text-purple-600" />,
                title: 'Hotels & Holiday Properties',
                desc: 'Support consistent cooling across guest suites with whisper-quiet, sanitized FCU operation.'
              },
              {
                icon: <Warehouse className="w-6 h-6 text-orange-600" />,
                title: 'Warehouses',
                desc: 'Clean heavy-duty ducted and package units operating in demanding dust and industrial environments.'
              },
              {
                icon: <Building className="w-6 h-6 text-indigo-600" />,
                title: 'Commercial Buildings',
                desc: 'Scheduled AC cleaning, chiller piping flushes, and scheduled preventative maintenance for multi-tenant facilities.'
              }
            ].map((comm, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-xs flex items-center justify-center mb-4">
                  {comm.icon}
                </div>
                <h4 className="text-lg font-serif font-bold text-brand-navy mb-2">{comm.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed flex-1">{comm.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button aria-label="Book free inspection"
              onClick={() => openBooking('Commercial AC Cleaning')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-widest py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-blue-500/10 cursor-pointer"
            >
              Request a Commercial AC Cleaning Quote
            </button>
          </div>
        </div>
      </section>

      {/* 6. SERVICES (Complete AC Cleaning Services - 10 specific services) */}
      <section className="py-14 md:py-20 px-4 md:px-8 bg-brand-cream/20 border-t border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs">
              Tailored Engineering Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-brand-navy">
              Complete AC Cleaning Services
            </h2>
            <p className="text-gray-600 text-sm">
              Instead of generic surface dusting, we deliver engineered micro-cleaning of every vital cooling component.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Split AC Cleaning',
                desc: 'Deep cleaning of indoor AC units, filters, blower and accessible components with protective water-containment funnels.'
              },
              {
                num: '02',
                title: 'AC Deep Cleaning',
                desc: 'A more comprehensive cleaning designed for heavily contaminated or poorly maintained units including chemical coil restoration.'
              },
              {
                num: '03',
                title: 'AC Filter Cleaning',
                desc: 'Removal of accumulated dust, pollen, and debris from high-density antibacterial and washable electrostatic filters.'
              },
              {
                num: '04',
                title: 'AC Coil Cleaning',
                desc: 'Pressure-clearing evaporator and condenser cooling fins to eliminate heat-insulating sludge and restore heat exchange.'
              },
              {
                num: '05',
                title: 'AC Blower Cleaning',
                desc: 'Removal of thick dust cakes and fungal spores from circular blower wheels to restore maximum CFM airflow velocity.'
              },
              {
                num: '06',
                title: 'AC Drain Cleaning',
                desc: 'Clearing blocked or dirty drainage lines, drain trays, and p-traps with nitrogen burst and antibacterial flushing to stop leaks.'
              },
              {
                num: '07',
                title: 'Duct AC Cleaning',
                desc: 'Professional motorized brush vacuuming and disinfectant fogging for ducted and central AC systems.'
              },
              {
                num: '08',
                title: 'Central AC Cleaning',
                desc: 'Suitable for villas, residential buildings, and large properties requiring valve checks, strainer cleans, and coil servicing.'
              },
              {
                num: '09',
                title: 'Cassette AC Cleaning',
                desc: 'Precision disassembly, motor shielding, and deep power washing for ceiling-mounted cassette units.'
              },
              {
                num: '10',
                title: 'Commercial AC Cleaning',
                desc: 'Custom scheduled AC cleaning and preventative maintenance programs for offices, shops, restaurants, and corporate facilities.'
              }
            ].map((srv, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative group"
              >
                <div className="text-brand-gold font-black text-sm tracking-widest mb-3 opacity-60 group-hover:opacity-100 transition-opacity">
                  SERVICE #{srv.num}
                </div>
                <h4 className="text-lg font-serif font-bold text-brand-navy mb-2 group-hover:text-brand-gold transition-colors">
                  {srv.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AcBrandsSection />

      {/* 7. "WHAT'S INCLUDED?" */}
      <section className="py-14 md:py-20 px-4 md:px-8 bg-brand-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs">
              Complete Scope of Work
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-white">
              What's Included in Our AC Cleaning Service?
            </h2>
            <p className="text-gray-300 text-sm">
              Depending on the AC type and service selected, our technicians inspect, clean, and sanitize:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {[
              { item: 'AC Filters', detail: 'Decontaminated & washed' },
              { item: 'Indoor Unit', detail: 'Casing & louvers cleaned' },
              { item: 'Evaporator Coil', detail: 'Fins straightened & sprayed' },
              { item: 'Blower / Fan', detail: 'High-speed wheel sanitized' },
              { item: 'Drain Tray', detail: 'Algae & slime removed' },
              { item: 'Drain Pipe', detail: 'Pressurized clearing' },
              { item: 'Air Vents', detail: 'Grilles wiped & disinfected' },
              { item: 'Duct Components', detail: 'Accessible plenum check' },
              { item: 'External Unit', detail: 'Condenser wash & debris check' },
              { item: 'General AC Condition', detail: 'Temp split & gas level test' }
            ].map((inc, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex flex-col items-start"
              >
                <div className="w-8 h-8 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center font-bold mb-3 shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <h5 className="text-sm font-bold text-white">{inc.item}</h5>
                <p className="text-[10px] text-gray-400 mt-1">{inc.detail}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 italic">
            * Service scope may vary depending on AC type, physical accessibility, and equipment condition.
          </p>
        </div>
      </section>

      {/* 8. HOW IT WORKS */}
      <section className="py-14 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs">
              Seamless 3-Step Process
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-brand-navy">
              Book Your AC Cleaning in 3 Simple Steps
            </h2>
            <p className="text-gray-600 text-sm">
              We make booking fast, transparent, and hassle-free across Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative">
            {[
              {
                step: '01',
                title: 'Contact Us',
                desc: 'Call or WhatsApp us with your property details and number of AC units.'
              },
              {
                step: '02',
                title: 'Get a Quote',
                desc: 'We confirm the service requirements and provide the applicable price upfront.'
              },
              {
                step: '03',
                title: 'We Clean Your AC',
                desc: 'Our certified technician arrives on time and performs the agreed AC cleaning service.'
              }
            ].map((st, idx) => (
              <div
                key={idx}
                className="bg-brand-cream/30 p-8 rounded-3xl border border-gray-100 text-center relative group hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-navy text-brand-gold font-serif font-black text-2xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                  {st.step}
                </div>
                <h4 className="text-xl font-serif font-bold text-brand-navy mb-3">{st.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button aria-label="Book free inspection"
              onClick={scrollToQuote}
              className="bg-brand-gold hover:bg-[#c99518] text-brand-navy font-black text-xs uppercase tracking-widest py-3.5 px-9 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
            >
              Schedule My AC Cleaning
            </button>
          </div>
        </div>
      </section>

      {/* 9. BEFORE / AFTER */}
      <section className="py-14 md:py-20 px-4 md:px-8 bg-gray-50 border-t border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs">
              Visible Quality You Can Breathe
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-brand-navy">
              See the Difference Professional AC Cleaning Can Make
            </h2>
            <p className="text-gray-600 text-sm">
              Authentic technician service comparisons of vital cooling parts before vs after our deep sanitization process.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                part: 'Dirty AC Filter → Cleaned Filter',
                before: 'Clogged with desert dust & dander',
                after: 'Pristine, 100% unrestricted airflow',
                icon: <Wind className="w-5 h-5 text-blue-500" />
              },
              {
                part: 'Dirty Blower → Cleaned Blower',
                before: 'Blades caked in thick black fungal mold',
                after: 'Spotless, balanced, whisper-quiet spin',
                icon: <Zap className="w-5 h-5 text-amber-500" />
              },
              {
                part: 'Dirty Coil → Cleaned Coil',
                before: 'Sludge trapped between aluminum fins',
                after: 'Pressure-flushed pure heat exchange',
                icon: <Sparkles className="w-5 h-5 text-emerald-500" />
              },
              {
                part: 'Dirty Drain Tray → Cleaned Drain Tray',
                before: 'Stagnant brown water & mold colonies',
                after: 'Antibacterial disinfected, free-flowing drain',
                icon: <ShieldCheck className="w-5 h-5 text-purple-500" />
              },
              {
                part: 'AC Unit Before → AC Unit After',
                before: 'Blowing weak 24°C air with vinegar odor',
                after: 'Blowing fresh, purified 18°C alpine-fresh air',
                icon: <Award className="w-5 h-5 text-brand-gold" />
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-200/70 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-lg bg-gray-50 border border-gray-100">
                      {card.icon}
                    </div>
                    <h4 className="text-sm font-bold text-brand-navy">{card.part}</h4>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="bg-red-50 text-red-700 p-2.5 rounded-xl flex items-center gap-2">
                      <span className="font-bold uppercase text-[10px] bg-red-200 px-1.5 py-0.5 rounded">Before</span>
                      <span>{card.before}</span>
                    </div>

                    <div className="bg-green-50 text-green-800 p-2.5 rounded-xl flex items-center gap-2">
                      <span className="font-bold uppercase text-[10px] bg-green-200 px-1.5 py-0.5 rounded">After</span>
                      <span className="font-semibold">{card.after}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. WHY CHOOSE US */}
      <section className="py-14 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs">
              The Resqhome Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-brand-navy">
              Why Dubai Customers Choose Us for AC Cleaning
            </h2>
            <p className="text-gray-600 text-sm">
              We combine German-engineered tools with seasoned UAE HVAC experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Professional Technicians',
                desc: 'Experienced technicians trained to handle all split, ducted, package, and central AC systems.'
              },
              {
                title: 'Villa & Commercial Expertise',
                desc: 'Specialized teams equipped for both luxury residences and large commercial establishments.'
              },
              {
                title: 'Transparent Pricing',
                desc: 'Know the full service scope and exact applicable charges upfront before any work begins.'
              },
              {
                title: 'Convenient Scheduling',
                desc: 'Book an appointment based on your preferred availability, including same-day emergency slots.'
              },
              {
                title: 'Proper Cleaning Process',
                desc: 'We target the critical internal components that collect dust rather than just surface wiping.'
              },
              {
                title: 'Dubai-Wide Service',
                desc: 'Rapid service availability across all major communities in Dubai and surrounding Emirates.'
              },
              {
                title: 'Customer-Focused Service',
                desc: 'Our goal is to provide reliable, polite, and spotless AC cleaning with minimal disruption to your home.'
              }
            ].map((feat, idx) => (
              <div
                key={idx}
                className="bg-brand-cream/10 p-6 rounded-2xl border border-gray-100 hover:border-brand-gold/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-brand-navy text-brand-gold flex items-center justify-center font-bold text-xs mb-3">
                  ✓
                </div>
                <h4 className="text-base font-serif font-bold text-brand-navy mb-2">{feat.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. PRICING SECTION */}
      <section className="py-14 md:py-20 px-4 md:px-8 bg-brand-cream/30 border-t border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs">
              Clear & Upfront Rates
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-brand-navy">
              AC Cleaning Prices in Dubai
            </h2>
            <p className="text-gray-600 text-sm">
              Competitive rates with no hidden fees. All prices include inspection and coil sanitation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {[
              { service: 'Split AC Cleaning', price: 'AED 150', tag: 'Per Unit' },
              { service: 'AC Deep Cleaning', price: 'AED 250', tag: 'Per Unit' },
              { service: 'Cassette AC Cleaning', price: 'AED 200', tag: 'Per Unit' },
              { service: 'Duct AC Cleaning', price: 'AED 350', tag: 'Per System' },
              { service: 'Central AC Cleaning', price: 'AED 450', tag: 'Per System' },
              { service: 'Commercial AC Cleaning', price: 'Get Quote', tag: 'Custom Plan' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-xs font-bold text-brand-navy mb-3 min-h-[32px] flex items-center justify-center">
                    {item.service}
                  </h4>
                  <div className="text-lg sm:text-xl font-serif font-black text-brand-gold mb-1">
                    {item.price.startsWith('AED') ? `Starting from ${item.price}` : item.price}
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider block">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Multiple units callout */}
          <div className="bg-brand-navy text-white rounded-3xl p-6 sm:p-8 max-w-3xl mx-auto text-center space-y-3 shadow-xl">
            <h4 className="text-xl font-serif font-bold text-white">Need Multiple AC Units Cleaned?</h4>
            <p className="text-xs text-gray-300 max-w-xl mx-auto">
              We offer exclusive discounted bundle rates for villas with 4+ units and scheduled commercial maintenance contracts.
            </p>
            <button aria-label="Book free inspection"
              onClick={scrollToQuote}
              className="bg-brand-gold hover:bg-[#c99518] text-brand-navy font-black text-xs uppercase tracking-widest py-3 px-6 rounded-xl transition-all inline-flex items-center gap-2 cursor-pointer mt-2"
            >
              Get My Quote <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 12. COMMERCIAL PACKAGE SECTION */}
      <section className="py-14 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs">
                Business & Corporate Plans
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-black text-brand-navy leading-tight">
                Need AC Cleaning for Multiple Units?
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                We provide scheduled AC cleaning for businesses with multiple AC units. Whether you operate a single boutique or a multi-storey office, we ensure uninterrupted operations and healthy air for your staff and guests.
              </p>

              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-brand-navy mb-2">
                  Suitable for:
                </h4>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-gray-700">
                  {[
                    'Offices',
                    'Restaurants',
                    'Cafés',
                    'Retail stores',
                    'Clinics',
                    'Hotels',
                    'Schools',
                    'Warehouses',
                    'Commercial buildings',
                    'Property management companies'
                  ].map((s, idx) => (
                    <span key={idx} className="bg-gray-100 px-3 py-1.5 rounded-lg">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-blue-50/60 rounded-3xl p-6 sm:p-8 border border-blue-100 space-y-4">
                <h4 className="text-lg font-serif font-bold text-brand-navy">
                  Commercial Services Can Include:
                </h4>

                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-xl border border-blue-100/80 shadow-xs">
                    <h5 className="text-sm font-bold text-brand-navy">One-Time Deep Cleaning</h5>
                    <p className="text-xs text-gray-500 mt-0.5">For businesses that need immediate cooling revival or annual tenancy handover.</p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-blue-100/80 shadow-xs">
                    <h5 className="text-sm font-bold text-brand-navy">Multiple-Unit Volume Cleaning</h5>
                    <p className="text-xs text-gray-500 mt-0.5">For properties with several AC systems carried out systematically without disruption.</p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-blue-100/80 shadow-xs">
                    <h5 className="text-sm font-bold text-brand-navy">Scheduled Recurring Maintenance (AMC)</h5>
                    <p className="text-xs text-gray-500 mt-0.5">Quarterly or bi-monthly recurring visits with priority breakdown support.</p>
                  </div>
                </div>

                <button aria-label="Book free inspection"
                  onClick={() => openBooking('Commercial AC Quote')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all shadow-md cursor-pointer mt-2"
                >
                  Get Commercial AC Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. WHY REGULAR AC CLEANING? */}
      <section className="py-14 md:py-20 px-4 md:px-8 bg-gray-50 border-t border-b border-gray-200/60">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs">
              Maintenance Guide
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-brand-navy">
              How Often Should You Clean Your AC in Dubai?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Dubai's dusty and hot environment can place significant demands on cooling systems.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <h4 className="text-sm font-bold text-brand-navy uppercase tracking-wider">
              The ideal cleaning frequency depends on:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-semibold text-gray-600">
              <div className="p-2.5 bg-gray-50 rounded-xl">✓ Property type</div>
              <div className="p-2.5 bg-gray-50 rounded-xl">✓ AC usage hours</div>
              <div className="p-2.5 bg-gray-50 rounded-xl">✓ Indoor dust levels</div>
              <div className="p-2.5 bg-gray-50 rounded-xl">✓ Number of occupants</div>
              <div className="p-2.5 bg-gray-50 rounded-xl">✓ Pets in the house</div>
              <div className="p-2.5 bg-gray-50 rounded-xl">✓ Commercial activity</div>
              <div className="p-2.5 bg-gray-50 rounded-xl">✓ AC system type</div>
              <div className="p-2.5 bg-gray-50 rounded-xl">✓ Previous maintenance</div>
            </div>

            <div className="border-t border-gray-100 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-brand-cream/30 p-4 rounded-2xl border border-gray-100">
                <span className="text-xs font-bold text-brand-navy uppercase block mb-1">Residential AC</span>
                <p className="text-xs text-gray-500">Periodic cleaning based on usage and condition, typically every 3 to 6 months.</p>
              </div>
              <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100">
                <span className="text-xs font-bold text-blue-900 uppercase block mb-1">Commercial AC</span>
                <p className="text-xs text-gray-500">Establish a scheduled cleaning and maintenance plan based on daily operating conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. LOCAL DUBAI SECTION */}
      <section className="py-14 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <div className="space-y-2">
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs">
              Fast Local Dispatch
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-brand-navy">
              AC Cleaning Services Across Dubai
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Our mobile technical vans are stationed throughout the city for fast, punctual arrival.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {[
              'Dubai Marina',
              'JVC',
              'Jumeirah',
              'Downtown Dubai',
              'Business Bay',
              'Arabian Ranches',
              'Dubai Hills',
              'Palm Jumeirah',
              'Al Barsha',
              'Mirdif',
              'Deira',
              'Bur Dubai',
              'Umm Suqeim',
              'Al Wasl',
              'Emirates Hills',
              'The Springs',
              'The Meadows'
            ].map((loc, idx) => (
              <span
                key={idx}
                className="bg-brand-cream/40 text-brand-navy hover:bg-brand-gold hover:text-brand-navy px-3.5 py-2 rounded-xl text-xs font-bold transition-colors border border-gray-200/60 shadow-2xs"
              >
                <MapPin className="w-3 h-3 inline mr-1 text-brand-gold" />
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 15. REVIEWS */}
      <section className="py-14 md:py-20 px-4 md:px-8 bg-brand-cream/20 border-t border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs">
              Verified Feedback
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-brand-navy">
              What Our Customers Say
            </h2>
            <div className="text-amber-500 text-sm font-bold flex items-center justify-center gap-1.5">
              <span>Google Reviews</span>
              <span>★★★★★</span>
              <span className="text-brand-navy">(4.9/5 Rating)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: 'The technician arrived on time and did a very thorough cleaning. Our AC airflow improved noticeably and the room cooled down in minutes.',
                name: 'Hamad Al Nuaimi',
                loc: 'Emirates Hills Villa'
              },
              {
                text: 'Outstanding service for our restaurant in Business Bay. Removed all cooking odor and deep dust from our cassette units with zero mess.',
                name: 'Marcus S.',
                loc: 'Business Bay, Dubai'
              },
              {
                text: 'Booked villa deep cleaning for 5 ducted AC units in Dubai Hills. The difference in air quality was immediate. Fair pricing and very polite crew.',
                name: 'Sarah Jenkins',
                loc: 'Dubai Hills Estate'
              }
            ].map((rev, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-amber-400 text-xs">★★★★★</div>
                  <p className="text-xs text-gray-600 leading-relaxed italic">"{rev.text}"</p>
                </div>
                <div className="pt-4 border-t border-gray-50 mt-4">
                  <h5 className="text-sm font-bold text-brand-navy">{rev.name}</h5>
                  <span className="text-[11px] text-gray-400">{rev.loc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. FAQ SECTION */}
      <section className="py-14 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs">
              Knowledge & Clarity
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-brand-navy">
              Frequently Asked Questions About AC Cleaning in Dubai
            </h2>
            <p className="text-gray-500 text-xs">
              Everything you need to know about our cleaning methods, prices, and warranties.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button aria-label="Show more"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-bold text-sm text-brand-navy hover:text-brand-gold bg-gray-50/50"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-brand-gold shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 py-4 bg-white text-xs text-gray-600 leading-relaxed border-t border-gray-100"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 17. STRONG FINAL CTA */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-b from-brand-navy to-[#061D3A] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-6">
          <span className="text-brand-gold font-bold tracking-[0.4em] uppercase text-xs block">
            Don't Suffer in Dubai Heat
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white leading-tight">
            Is Your AC Due for a Cleaning?
          </h2>

          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Get professional AC cleaning for your villa, home or commercial property in Dubai. Fast same-day arrival, transparent pricing, and 100% satisfaction guarantee.
          </p>

          <div className="pt-2">
            <h3 className="text-lg font-serif font-bold text-brand-gold mb-6 uppercase tracking-wider">
              Book Your AC Cleaning Today
            </h3>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="tel:+971524524295"
                onClick={callNow}
                className="w-full sm:w-auto bg-[#C9153B] hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest py-4 px-8 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-current" /> 📞 Call Now: +971 52 452 4295
              </a>

              <a
                href="https://wa.me/971524524295?text=Hello%20Resqhome!%20I%20would%20like%20to%20book%20an%20AC%20Cleaning%20service%20in%20Dubai."
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppConversion}
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-black text-xs uppercase tracking-widest py-4 px-8 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" /> 💬 WhatsApp Us
              </a>

              <button aria-label="Book free inspection"
                onClick={scrollToQuote}
                className="w-full sm:w-auto bg-brand-gold hover:bg-[#c99518] text-brand-navy font-black text-xs uppercase tracking-widest py-4 px-8 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" /> Request a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {isAdMode ? <MinimalAdFooter /> : <Footer />}
    </div>
  );
};
export default AcCleaningLanding;
