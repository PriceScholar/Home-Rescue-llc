import React from 'react';
import {Phone, Mail, MessageCircle, Menu, X, ChevronDown, ChevronRight, Facebook, Instagram, Linkedin, Send} from 'lucide-react';
import {useLanguage} from '../context/LanguageContext';
import {Link} from 'react-router-dom';
import {motion, AnimatePresence} from 'motion/react';
import {cn} from '../lib/utils';
import { serviceCategories } from '../data/servicesData';
import { useBooking } from './BookingModal';
import CoverageBanner from './CoverageBanner';

export const TopBar = () => {
  const {language, setLanguage} = useLanguage();
  
  return (
    <>
      <CoverageBanner />
      <div className="bg-brand-navy text-white py-2 px-8 flex justify-between items-center text-xs border-b border-brand-gold/30">
      <div className="flex gap-6">
        <a href="tel:+971524524295" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
          <Phone className="w-3 h-3" /> +971 52 452 4295
        </a>
        <a href="mailto:info@homerescue.ae" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
          <Mail className="w-3 h-3" /> info@homerescue.ae
        </a>
      </div>
      <div className="flex items-center gap-6">
        <span className="opacity-80 hidden md:block">Mon-Sat | 9:00 AM – 6:00 PM</span>
        <div className="flex gap-4 border-l border-white/20 pl-4">
          <button 
            onClick={() => setLanguage('EN')}
            className={cn("hover:text-brand-gold transition-colors font-bold", language === 'EN' ? "text-brand-gold" : "opacity-50")}
          >
            EN
          </button>
          <button 
            onClick={() => setLanguage('AR')}
            className={cn("hover:text-brand-gold transition-colors font-bold", language === 'AR' ? "text-brand-gold" : "opacity-50")}
          >
            العربية
          </button>
        </div>
      </div>
    </div>
  </>
);
};

export const Navbar = () => {
  const {t, isRTL} = useLanguage();
  const { callNow, askExpert, openConsultation } = useBooking();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);

  const navLinks = [
    {name: t('nav_home'), path: '/', active: true},
    {name: t('nav_services'), path: '/services', dropdown: true},
    {name: t('nav_about'), path: '/about'},
    {name: 'Credentials', path: '/credentials'},
    {name: t('nav_portfolio'), path: '/portfolio'},
    {name: t('nav_contact'), path: '/contact'},
  ];

  return (
    <nav className="bg-white px-8 py-4 flex justify-between items-center shadow-md sticky top-0 z-50 relative">
      <Link to="/" className="flex items-center gap-3">
        <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center border-2 border-brand-gold">
          <span className="text-brand-gold font-bold text-xl">H</span>
        </div>
        <div>
          <h1 className="text-xl font-bold text-brand-navy tracking-tight leading-none">HOME RESCUE</h1>
          <p className="text-[10px] text-brand-gold tracking-[0.2em] font-medium mt-1 uppercase">TECHNICAL SERVICES</p>
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-brand-navy">
        {navLinks.map((link) => (
          <div 
            key={link.name} 
            className="flex items-center"
            onMouseEnter={() => link.dropdown && setIsServicesOpen(true)}
            onMouseLeave={() => link.dropdown && setIsServicesOpen(false)}
          >
            {link.dropdown ? (
              <div 
                className="flex items-center gap-1 cursor-pointer hover:text-brand-gold transition-colors uppercase tracking-wider py-4"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                {link.name} <ChevronDown className={cn("w-3 h-3 transition-transform", isServicesOpen && "rotate-180")} />
              </div>
            ) : (
              <Link to={link.path} className={cn("hover:text-brand-gold transition-colors uppercase tracking-wider py-4", link.active && "text-brand-gold")}>
                {link.name}
              </Link>
            )}
          </div>
        ))}
        <div className="flex items-center gap-3 ml-4">
          <button 
            onClick={openConsultation}
            className="border-2 border-brand-red text-brand-red px-5 py-2.5 rounded-full hover:bg-brand-red hover:text-white transition-all text-xs font-bold flex items-center gap-2"
          >
            <i className="fa-solid fa-video"></i> {t('free_consultation') || 'VIRTUAL CONSULTATION'}
          </button>
          <button 
            onClick={callNow}
            className="bg-brand-red text-white px-6 py-3 rounded-full hover:bg-opacity-90 flex items-center gap-2 shadow-lg text-xs font-bold"
          >
            CALL NOW <span className="text-[8px]">●</span>
          </button>
        </div>
      </div>

      {/* Mega Menu Overlay */}
      <AnimatePresence>
        {isServicesOpen && (
          <motion.div 
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 10}}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 py-16 px-8 z-50 overflow-hidden hidden lg:block"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-6 gap-8">
              {serviceCategories.map((cat, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex items-start gap-3 mb-2">
                    <div className={cn("w-[32px] h-[32px] rounded-lg shrink-0 flex items-center justify-center text-white text-sm", cat.color === 'bg-brand-red' ? 'bg-[#c41e3a]' : cat.color === 'bg-blue-600' ? 'bg-[#2563eb]' : cat.color === 'bg-yellow-500' ? 'bg-[#eab308]' : cat.color === 'bg-brand-navy' ? 'bg-[#1a3a6b]' : cat.color === 'bg-brand-green' ? 'bg-[#25d366]' : 'bg-[#666]')}>
                      <i className={cat.icon}></i>
                    </div>
                    <h3 className="font-bold text-brand-navy text-[10px] leading-tight uppercase tracking-tight">
                      {cat.name}
                    </h3>
                  </div>
                  <div className="w-8 h-[1.5px] bg-brand-red"></div>
                  <ul className="space-y-1.5 mt-4">
                    {cat.subs.map((sub: any, j: number) => (
                      <li key={j}>
                        <Link 
                          to={`/services/${sub.id}`} 
                          className="flex items-center gap-1.5 text-[11px] text-gray-500 hover:text-brand-red transition-colors group"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <i className={cn(sub.icon, "text-[10px] text-gray-300 group-hover:text-brand-red w-[14px] text-center")}></i>
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-50 flex justify-between items-center">
              <p className="text-gray-400 text-[10px] uppercase tracking-widest font-medium">Professional Technical Services Across UAE</p>
              <Link 
                to="/services" 
                className="text-brand-red font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
                onClick={() => setIsServicesOpen(false)}
              >
                View all categories <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-brand-navy" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{x: isRTL ? '-100%' : '100%'}}
            animate={{x: 0}}
            exit={{x: isRTL ? '-100%' : '100%'}}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-brand-navy leading-none">HOME RESCUE</span>
                <span className="text-[10px] text-brand-gold font-medium tracking-[0.2em]">TECHNICAL SERVICES</span>
              </Link>
              <button onClick={() => setIsMenuOpen(false)}><X /></button>
            </div>
            <div className="flex flex-col gap-6 text-xl font-medium">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} onClick={() => setIsMenuOpen(false)} className="hover:text-brand-gold border-b border-gray-100 pb-2">
                  {link.name}
                </Link>
              ))}
              <div className="mt-auto flex flex-col gap-4">
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    openConsultation();
                  }}
                  className="bg-brand-gold text-brand-navy py-4 rounded-lg flex items-center justify-center gap-2 font-bold transition-all active:scale-95"
                >
                  <i className="fa-solid fa-video text-xl"></i> {t('free_consultation') || 'VIRTUAL CONSULTATION'}
                </button>
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    callNow();
                  }}
                  className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" /> {t('call_now')}
                </button>
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    askExpert();
                  }}
                  className="bg-brand-green text-white py-4 rounded-lg flex items-center justify-center gap-2 font-bold transition-all active:scale-95"
                >
                  <MessageCircle className="w-6 h-6" /> WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  const {t} = useLanguage();
  const { openLicense } = useBooking();

  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="flex flex-col">
            <span className="text-3xl font-serif font-bold text-white leading-none">HOME RESCUE</span>
            <span className="text-[10px] text-brand-gold font-medium tracking-[0.2em]">TECHNICAL SERVICES</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Dubai's premium home renovation and technical services. We specialize in maintaining the luxury and comfort of your home with certified professionals.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-serif mb-6 text-brand-gold">Our Services</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            {[
              { name: 'Painting Services', id: 'painting' },
              { name: 'AC Maintenance', id: 'ac-maintenance' },
              { name: 'Plumbing Works', id: 'plumbing' },
              { name: 'Electrical Works', id: 'electrical' },
              { name: 'Tile & Marble', id: 'tile-marble' },
              { name: 'Carpentry', id: 'carpentry' },
              { name: 'False Ceiling', id: 'false-ceiling' },
              { name: 'Handyman Services', id: 'handyman' }
            ].map((service) => (
              <li key={service.id}>
                <Link to={`/services/${service.id}`} className="hover:text-white transition-colors cursor-pointer">
                  • {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-serif mb-6 text-brand-gold">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            {['Home', 'About Us', 'Services', 'Credentials', 'Our Portfolio', 'Contact Us', 'FAQs', 'Privacy Policy'].map((link) => (
              <li key={link}>
                <Link 
                  to={link === 'Home' ? '/' : link === 'About Us' ? '/about' : link === 'Services' ? '/services' : link === 'Credentials' ? '/credentials' : link === 'Our Portfolio' ? '/portfolio' : link === 'Contact Us' ? '/contact' : '#'} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  • {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-serif mb-6 text-brand-gold">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">Subscribe to get latest tips and offers.</p>
          <div className="flex bg-white/5 p-1 rounded-lg border border-white/10 group focus-within:border-brand-gold transition-colors">
            <input type="email" placeholder="Email Address" className="bg-transparent border-none focus:ring-0 text-sm px-3 py-2 w-full outline-none" />
            <button className="bg-brand-gold text-brand-navy p-2 rounded-md hover:bg-white transition-colors group-hover:scale-105">
              <Send className="w-4 h-4" />
            </button>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-brand-gold" /> <span>+971 52 452 4295</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-brand-gold" /> <span>info@homerescue.ae</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Coverage List */}
      <div className="max-w-7xl mx-auto mb-12 p-8 bg-brand-gold/5 rounded-[24px] border border-brand-gold/10">
        <h4 className="text-brand-gold font-bold text-sm mb-6 flex items-center gap-2 uppercase tracking-widest">
          <i className="fa-solid fa-map-location-dot"></i> Our Service Locations
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            'Radisson Blu Hotel', 'Internet City', 'M Gallery Hotel', 
            'Palm Jumeirah', 'Park Inn Hotel', 'Motor City', 
            'Ramada Hotel', 'Downtown Dubai', 'Emaar Properties'
          ].map((loc, i) => (
            <div key={i} className="flex items-center gap-2 text-white/80 text-sm hover:text-brand-gold transition-colors">
              <span className="text-brand-gold font-bold">✓</span> {loc}
            </div>
          ))}
        </div>
      </div>

      {/* License Info Display */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="bg-[#0f2545] p-6 md:p-8 rounded-[24px] border border-brand-gold/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy text-3xl shrink-0 shadow-lg shadow-brand-gold/20">
              <i className="fa-solid fa-certificate"></i>
            </div>
            <div className="space-y-1 text-left">
              <span className="block text-brand-gold text-[10px] font-bold uppercase tracking-[0.2em]">DUBAI LICENSED COMPANY</span>
              <h4 className="text-lg font-serif text-white">Commercial License No: <span className="text-brand-gold font-mono">1191464</span></h4>
              <p className="text-gray-400 text-xs">Registered with Dubai Economy & Tourism (DET) | Valid & Active</p>
            </div>
          </div>
          <button 
            onClick={openLicense}
            className="bg-brand-gold text-brand-navy px-10 py-4 rounded-full font-bold hover:bg-white transition-all text-sm uppercase tracking-widest whitespace-nowrap active:scale-95"
          >
            View License
          </button>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} HOME RESCUE Technical Services. All Rights Reserved.</p>
        <p>Managed by Home Rescue Dubai | Al Nahda 1, Dubai, UAE</p>
      </div>
    </footer>
  );
};
