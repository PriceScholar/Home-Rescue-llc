import React from 'react';
import {Phone, Mail, MessageCircle, Menu, X, ChevronDown, ChevronRight, Facebook, Instagram, Linkedin, Send, Video, BadgeCheck, MapPin} from 'lucide-react';
import {useLanguage} from '../context/LanguageContext';
import {Link} from 'react-router-dom';
import {motion, AnimatePresence} from 'motion/react';
import {cn} from '../lib/utils';
import { useBooking } from './BookingModal';
import CoverageBanner from './CoverageBanner';
import {ServicesMegaMenu} from './ServicesMegaMenu';
import {serviceCategories} from '../data/servicesData';

export const TopBar = () => {
  return (
    <div className="bg-brand-navy text-white h-10 px-8 flex justify-between items-center text-[10px] font-bold tracking-wider relative z-[120]">
      <div className="flex gap-8 items-center h-full">
        <div className="flex items-center gap-2 text-brand-gold">
          <BadgeCheck className="w-3 h-3" /> 
          <span>LICENSED DUBAI TECHNICAL SERVICES COMPANY</span>
        </div>
        <div className="hidden lg:flex items-center gap-2 opacity-80">
          <MapPin className="w-3 h-3 text-brand-gold" />
          <span>SERVING ALL 7 EMIRATES ACROSS UAE</span>
        </div>
      </div>
      <div className="flex gap-8 items-center h-full">
        <a href="tel:+971524524295" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
          <Phone className="w-3 h-3 text-brand-gold" /> +971 52 452 4295
        </a>
        <a href="mailto:info@homerescue.ae" className="hidden sm:flex items-center gap-2 hover:text-brand-gold transition-colors">
          <Mail className="w-3 h-3 text-brand-gold" /> info@homerescue.ae
        </a>
        <div className="flex gap-4 border-l border-white/10 pl-6 h-full items-center">
          <a href="#" className="hover:text-brand-gold transition-colors"><Facebook className="w-3 h-3" /></a>
          <a href="#" className="hover:text-brand-gold transition-colors"><Instagram className="w-3 h-3" /></a>
          <a href="#" className="hover:text-brand-gold transition-colors"><Linkedin className="w-3 h-3" /></a>
        </div>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const {t, isRTL} = useLanguage();
  const { callNow, askExpert, openConsultation } = useBooking();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const [openMobileAccordion, setOpenMobileAccordion] = React.useState<string | null>(null);

  const navLinks = [
    {name: t('nav_home'), path: '/', active: true},
    {name: t('nav_services'), path: '/services', dropdown: true},
    {name: t('nav_about'), path: '/about'},
    {name: 'Credentials', path: '/credentials'},
    {name: t('nav_portfolio'), path: '/portfolio'},
    {name: 'Blog', path: '#'},
    {name: t('nav_contact'), path: '/contact'},
  ];

  return (
    <nav className="bg-white px-8 flex justify-between items-center shadow-md sticky top-0 z-[100] relative h-20">
      <Link to="/" className="flex items-center gap-3 shrink-0">
        <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center border-2 border-[#D9A520]">
          <span className="text-[#D9A520] font-bold text-xl">H</span>
        </div>
        <div>
          <h1 className="text-xl font-bold text-brand-navy tracking-tight leading-none uppercase">HOME RESCUE</h1>
          <p className="text-[10px] text-[#D9A520] tracking-[0.2em] font-bold mt-1 uppercase">TECHNICAL SERVICES</p>
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-6 text-[13px] font-bold text-brand-navy h-full antialiased">
        {navLinks.map((link) => (
          <div 
            key={link.name} 
            className="flex items-center h-full group"
            onMouseEnter={() => link.dropdown && setIsServicesOpen(true)}
            onMouseLeave={() => link.dropdown && setIsServicesOpen(false)}
          >
            {link.dropdown ? (
              <div 
                className="flex items-center gap-1 cursor-pointer transition-colors uppercase tracking-wider h-full relative outline-none"
                style={{ color: isServicesOpen ? '#D9A520' : 'inherit' }}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                {link.name} <ChevronDown className={cn("w-3 h-3 transition-transform duration-300", isServicesOpen && "rotate-180")} />
                {isServicesOpen && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#F3B51B]" />
                )}
              </div>
            ) : (
              <Link 
                to={link.path} 
                className={cn(
                  "hover:text-[#D9A520] transition-colors uppercase tracking-wider h-full flex items-center relative",
                  link.active && "text-[#D9A520]"
                )}
              >
                {link.name}
                {link.active && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#F3B51B]" />
                )}
              </Link>
            )}
          </div>
        ))}
        <div className="flex items-center gap-3 ml-4">
          <button 
            onClick={openConsultation}
            className="border-2 border-[#C9153B] text-[#C9153B] px-5 py-2.5 rounded-full hover:bg-[#C9153B] hover:text-white transition-all text-xs font-bold flex items-center gap-2"
          >
            <Video className="w-4 h-4" /> {t('free_consultation') || 'FREE CONSULTATION'}
          </button>
          <button 
            onClick={callNow}
            className="bg-[#C9153B] text-white px-6 py-3 rounded-full hover:bg-opacity-90 flex items-center gap-2 shadow-lg text-xs font-bold transition-transform active:scale-95"
          >
            <Phone className="w-4 h-4" /> CALL NOW
          </button>
        </div>
      </div>

      {/* Mega Menu Overlay */}
      <AnimatePresence>
        {isServicesOpen && (
          <div 
            className="absolute top-full left-0 right-0 z-[110]"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <ServicesMegaMenu 
              onClose={() => setIsServicesOpen(false)} 
              callNow={callNow}
              openConsultation={openConsultation}
            />
          </div>
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
            className="fixed inset-0 bg-white z-[110] flex flex-col p-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center border-2 border-[#D9A520]">
                  <span className="text-[#D9A520] font-bold text-xl">H</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-brand-navy leading-none">HOME RESCUE</span>
                  <span className="text-[10px] text-[#D9A520] font-bold tracking-[0.2em]">TECHNICAL SERVICES</span>
                </div>
              </Link>
              <button onClick={() => setIsMenuOpen(false)}><X /></button>
            </div>
            
            <div className="flex flex-col gap-2 text-lg font-bold">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-100 flex flex-col">
                  {link.dropdown ? (
                    <div className="flex flex-col">
                      <button 
                        onClick={() => setOpenMobileAccordion(openMobileAccordion ? null : 'services')}
                        className="flex justify-between items-center py-4 text-brand-navy uppercase tracking-wide"
                      >
                        {link.name} <ChevronDown className={cn("w-5 h-5 transition-transform", openMobileAccordion && "rotate-180")} />
                      </button>
                      <AnimatePresence>
                        {openMobileAccordion && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col pl-4 gap-2 pb-4">
                              {serviceCategories.map((cat) => (
                                <div key={cat.name} className="flex flex-col">
                                  <button 
                                    onClick={() => setOpenMobileAccordion(openMobileAccordion === cat.name ? 'services' : cat.name)}
                                    className="flex justify-between items-center py-2 text-[14px] text-gray-700 font-bold"
                                  >
                                    <div className="flex items-center gap-2">
                                      <div className="w-6 h-6 rounded flex items-center justify-center" style={{backgroundColor: cat.color}}>
                                        <i className={cn(cat.icon as string, "text-[10px] text-white")}></i>
                                      </div>
                                      {cat.name}
                                    </div>
                                    <ChevronRight className={cn("w-4 h-4", openMobileAccordion === cat.name && "rotate-90")} />
                                  </button>
                                  {openMobileAccordion === cat.name && (
                                    <div className="grid grid-cols-1 gap-1 pl-8 py-2">
                                      {cat.subs.map((sub) => (
                                        <Link 
                                          key={sub.id} 
                                          to={`/services/${sub.id}`}
                                          onClick={() => setIsMenuOpen(false)}
                                          className="text-[12px] py-1.5 text-gray-500 hover:text-brand-red font-medium flex items-center gap-2"
                                        >
                                          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold opacity-50" />
                                          {sub.name}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link to={link.path} onClick={() => setIsMenuOpen(false)} className="py-4 text-brand-navy uppercase tracking-wide">
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="mt-8 flex flex-col gap-4 pb-12">
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    openConsultation();
                  }}
                  className="bg-[#C9153B] text-white py-4 rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg"
                >
                  <Video className="w-5 h-5" /> {t('free_consultation') || 'FREE CONSULTATION'}
                </button>
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    callNow();
                  }}
                  className="border-2 border-[#D9A520] text-[#D9A520] py-4 rounded-xl flex items-center justify-center gap-2 font-bold"
                >
                  <Phone className="w-5 h-5" /> CALL NOW
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
