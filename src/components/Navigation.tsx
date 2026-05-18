import React from 'react';
import {Phone, Mail, MessageCircle, Menu, X, ChevronDown, ChevronRight, Facebook, Instagram, Linkedin, Send, Video, BadgeCheck, MapPin, Clock, ShieldCheck} from 'lucide-react';
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
    <div className="bg-brand-navy text-white h-auto py-2 md:h-10 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] font-bold tracking-wider relative z-[120] gap-2 md:gap-0">
      <div className="flex gap-4 md:gap-8 items-center">
        <div className="flex items-center gap-2 text-brand-gold">
          <BadgeCheck className="w-3 h-3 shrink-0" /> 
          <span className="whitespace-nowrap">LICENSED DUBAI TECHNICAL SERVICES</span>
        </div>
        <div className="hidden lg:flex items-center gap-2 opacity-80">
          <MapPin className="w-3 h-3 text-brand-gold shrink-0" />
          <span>SERVING ALL 7 EMIRATES</span>
        </div>
      </div>
      <div className="flex gap-4 md:gap-8 items-center">
        <a href="tel:+971524524295" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
          <Phone className="w-3 h-3 text-brand-gold shrink-0" /> +971 52 452 4295
        </a>
        <a href="mailto:info@homerescue.ae" className="hidden sm:flex items-center gap-2 hover:text-brand-gold transition-colors">
          <Mail className="w-3 h-3 text-brand-gold shrink-0" /> info@homerescue.ae
        </a>
        <div className="hidden md:flex gap-4 border-l border-white/10 pl-6 h-full items-center">
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
    {name: 'Blog', path: '/blog'},
    {name: t('nav_contact'), path: '/contact'},
  ];

  return (
    <nav className="bg-white px-4 md:px-8 flex justify-between items-center shadow-md sticky top-0 z-[100] h-16 md:h-20">
      <Link to="/" className="flex items-center gap-2 md:gap-3 shrink-0">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-navy rounded-lg flex items-center justify-center border-2 border-brand-gold">
          <span className="text-brand-gold font-bold text-lg md:text-xl">H</span>
        </div>
        <div>
          <h1 className="text-lg md:text-xl font-bold text-brand-navy tracking-tight leading-none uppercase">HOME RESCUE</h1>
          <p className="text-[8px] md:text-[10px] text-brand-gold tracking-[0.2em] font-bold mt-1 uppercase">TECHNICAL SERVICES</p>
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
      <button className="lg:hidden p-2 text-brand-navy" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{x: isRTL ? '-100%' : '100%'}}
            animate={{x: 0}}
            exit={{x: isRTL ? '-100%' : '100%'}}
            className="fixed inset-0 bg-white z-[110] flex flex-col p-6 md:p-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8 md:mb-12">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 md:gap-3">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-brand-navy rounded-lg flex items-center justify-center border-2 border-brand-gold">
                  <span className="text-brand-gold font-bold text-lg md:text-xl">H</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg md:text-xl font-bold text-brand-navy leading-none">HOME RESCUE</span>
                  <span className="text-[9px] md:text-[10px] text-brand-gold font-bold tracking-[0.2em]">TECHNICAL SERVICES</span>
                </div>
              </Link>
              <button onClick={() => setIsMenuOpen(false)} className="p-2"><X className="w-6 h-6" /></button>
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
  const { openLicense, openBooking } = useBooking();

  const socialLinks = [
    { Icon: Facebook, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Linkedin, href: '#' },
    { Icon: Mail, href: 'mailto:info@homerescue.ae' }
  ];

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-12 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Info */}
          <div className="space-y-8 lg:col-span-1">
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center border-2 border-white/20">
                   <span className="text-brand-navy font-black text-xl">H</span>
                 </div>
                 <span className="text-2xl font-serif font-black text-white leading-none">HOME RESCUE</span>
              </div>
              <span className="text-[9px] text-brand-gold font-black tracking-[0.3em] mt-2 ml-1">TECHNICAL SERVICES</span>
            </div>
            <p className="text-gray-400 text-[13px] leading-relaxed font-medium opacity-80">
              Dubai's premium home renovation and technical services. We specialize in maintaining the luxury and comfort of your home with certified professionals.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((item, i) => (
                <a key={i} href={item.href} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all text-white hover:text-brand-navy group">
                  <item.Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div className="lg:pl-8">
            <h4 className="text-md font-serif font-black mb-8 text-brand-gold uppercase tracking-widest leading-none">Our Services</h4>
            <ul className="space-y-3.5 text-[13px] text-gray-400">
              {[
                { name: 'Painting Services', id: 'paint-work' },
                { name: 'AC Maintenance', id: 'ac-maintenance' },
                { name: 'Plumbing Services', id: 'plumbing-services' },
                { name: 'Electrical Services', id: 'electrical-services' },
                { name: 'Ceiling Works', id: 'ceiling-work' },
                { name: 'Handyman Services', id: 'handyman-more' },
                { name: 'Lighting Work', id: 'lighting-work' },
                { name: 'Home Maintenance', id: 'home-general-maintenance' }
              ].map((s) => (
                <li key={s.id} className="group">
                  <Link to={`/services/${s.id}`} className="hover:text-white transition-all flex items-center gap-2.5 font-bold">
                    <ChevronRight className="w-3.5 h-3.5 text-brand-gold/50 group-hover:text-brand-gold group-hover:translate-x-1 transition-all" /> {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:pl-4">
            <h4 className="text-md font-serif font-black mb-8 text-brand-gold uppercase tracking-widest leading-none">Quick Links</h4>
            <ul className="space-y-3.5 text-[13px] text-gray-400">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Portfolio', path: '/portfolio' },
                { name: 'Credentials', path: '/credentials' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Our Blog', path: '/blog' },
                { name: 'Privacy Policy', path: '#' }
              ].map((link) => (
                <li key={link.name} className="group">
                  <Link to={link.path} className="hover:text-white transition-all flex items-center gap-2.5 font-bold">
                    <ChevronRight className="w-3.5 h-3.5 text-brand-gold/50 group-hover:text-brand-gold group-hover:translate-x-1 transition-all" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-6 lg:pl-4">
            <h4 className="text-md font-serif font-black mb-6 lg:mb-8 text-brand-gold uppercase tracking-widest leading-none">Contact Us</h4>
            <div className="space-y-4 md:space-y-5">
              <a href="tel:+971524524295" className="flex items-center gap-4 group">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Call Us</div>
                  <div className="font-bold text-white text-sm">+971 52 452 4295</div>
                </div>
              </a>
              <a href="mailto:info@homerescue.ae" className="flex items-center gap-4 group">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Email Address</div>
                  <div className="font-bold text-white text-sm">info@homerescue.ae</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-brand-gold">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Office Location</div>
                  <div className="font-bold text-white text-sm">Al Nahda 1, Dubai, UAE</div>
                </div>
              </div>
            </div>
            <button 
              onClick={openBooking}
              className="w-full bg-white text-brand-navy py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-brand-gold transition-all shadow-xl active:scale-95"
            >
              Book Free Inspection
            </button>
          </div>

          {/* Column 5: License */}
          <div className="space-y-8 lg:border-l lg:border-white/10 lg:pl-10">
            <h4 className="text-md font-serif font-black mb-8 text-brand-gold uppercase tracking-widest leading-none">Dubai Licensed</h4>
            <div className="space-y-6">
              <div className="space-y-2 opacity-80">
                <div className="text-gray-400 text-xs leading-relaxed">
                  License No: <span className="text-white font-bold">1191464</span>
                </div>
                <div className="text-gray-300 text-[11px] leading-relaxed font-bold uppercase tracking-wider">
                  Dubai Economy & Tourism (DET) <br /> Verified & Active
                </div>
              </div>
              <button 
                onClick={openLicense}
                className="w-full border border-white/20 text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-brand-navy transition-all active:scale-95"
              >
                View License
              </button>
              <div className="pt-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 shrink-0">
                   <ShieldCheck className="w-6 h-6 text-brand-gold" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-[9px] text-white font-black uppercase tracking-widest leading-none">Status</div>
                  <div className="text-[9px] text-brand-gold font-bold uppercase tracking-widest">Fully Compliant</div>
                  <div className="flex gap-1 pt-1">
                    <div className="w-10 h-1.5 bg-brand-gold/30 rounded-full" />
                    <div className="w-4 h-1.5 bg-brand-gold/30 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-bold text-gray-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Home Rescue Technical Services. All Rights Reserved.</p>
          <div className="flex gap-6">
             <Link to="#" className="hover:text-white transition-colors">Terms</Link>
             <Link to="#" className="hover:text-white transition-colors">Privacy</Link>
             <Link to="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );

};
