import React from 'react';
import {motion} from 'motion/react';
import {TopBar, Navbar, Footer} from './components/Navigation';
import {useLanguage} from './context/LanguageContext';
import {useBooking} from './components/BookingModal';
import {
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  Award, 
  MapPin,
  Star,
  Quote,
  Phone,
  MessageCircle,
  ArrowRight,
  BadgeCheck,
  Building2,
  Users,
  CircleCheck,
} from 'lucide-react';
import {Link} from 'react-router-dom';
import {cn} from './lib/utils';
import VerifiedProjects from './components/VerifiedProjects';
import { serviceCategories } from './data/servicesData';


const Home = () => {
  const {t} = useLanguage();
  const { openBooking, callNow, askExpert, openConsultation } = useBooking();

  const stats = [
    {label: 'Projects Completed', value: '1000+', icon: <Building2 className="w-6 h-6" />},
    {label: 'Happy Customers', value: '500+', icon: <Users className="w-6 h-6" />},
    {label: 'Years Experience', value: '10+', icon: <Award className="w-6 h-6" />},
    {label: 'Emirates Covered', value: '7', icon: <MapPin className="w-6 h-6" />},
  ];

  // Homepage focused services (8 main ones)
  const homeServices = [
    { id: 'paint-work', title: 'Painting Services', subtitle: 'Interior & Exterior Painting Solutions', icon: 'fa-solid fa-paint-roller' },
    { id: 'ac-maintenance', title: 'AC Maintenance', subtitle: 'Repair, Installation & Maintenance', icon: 'fa-solid fa-snowflake' },
    { id: 'plumbing-services', title: 'Plumbing Services', subtitle: 'Installation, Repair & Maintenance', icon: 'fa-solid fa-droplet' },
    { id: 'electrical-services', title: 'Electrical Services', subtitle: 'Wiring, Installation & Electrical Solutions', icon: 'fa-solid fa-bolt' },
    { id: 'ceiling-work', title: 'Ceiling Works', subtitle: 'Gypsum, POP & False Ceiling Solutions', icon: 'fa-solid fa-layer-group' },
    { id: 'handyman-more', title: 'Handyman Services', subtitle: 'All Home Repair & Installation Work', icon: 'fa-solid fa-screwdriver-wrench' },
    { id: 'lighting-work', title: 'Lighting Work', subtitle: 'Indoor, Outdoor & Decorative Lighting', icon: 'fa-solid fa-lightbulb' },
    { id: 'home-general-maintenance', title: 'Home Maintenance', subtitle: 'Routine Maintenance & General Repairs', icon: 'fa-solid fa-house-circle-check' },
  ].map(s => ({
    ...s,
    image: serviceCategories.find(c => c.id === s.id)?.image || ''
  }));

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[780px] flex items-center overflow-hidden bg-[#08264B]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" 
            alt="Premium UAE Villa Night" 
            className="w-full h-full object-cover opacity-30 shadow-inner"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08264B] via-[#08264B]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-24 md:pt-32 pb-48 md:pb-44">
          
          {/* Left Content */}
          <motion.div 
            initial={{opacity: 0, x: -30}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
            className="flex-1 space-y-6 md:space-y-10 text-center lg:text-left"
          >
            <div className="space-y-3 md:space-y-4">
              <span className="text-brand-gold font-black tracking-[0.25em] uppercase text-[9px] md:text-[10px] block opacity-90">Premium Technical Services</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-black leading-[1.1] text-white tracking-tighter">
                Premium Technical <br className="hidden sm:block" />
                Solutions Across <span className="text-brand-gold">UAE</span>
              </h1>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 md:gap-x-5 gap-y-2 md:gap-y-3 text-[9px] md:text-[11px] font-black text-white uppercase tracking-widest opacity-80">
              <span className="hover:text-brand-gold transition-colors cursor-default">Painting</span> <span className="text-brand-gold opacity-30">|</span>
              <span className="hover:text-brand-gold transition-colors cursor-default">AC</span> <span className="text-brand-gold opacity-30">|</span>
              <span className="hover:text-brand-gold transition-colors cursor-default">Plumbing</span> <span className="text-brand-gold opacity-30">|</span>
              <span className="hover:text-brand-gold transition-colors cursor-default">Electrical</span> <span className="text-brand-gold opacity-30">|</span>
              <span className="hover:text-brand-gold transition-colors cursor-default">Ceiling</span> <span className="text-brand-gold opacity-30">|</span>
              <span className="hover:text-brand-gold transition-colors cursor-default">Handyman & More</span>
            </div>

            <p className="text-sm md:text-lg text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed font-bold opacity-70">
              Trusted by Villas, Homes, Hotels & Commercial Properties Across Dubai and All Emirates.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 md:gap-5 pt-2">
              <button 
                onClick={() => openBooking()}
                className="bg-brand-gold text-brand-navy hover:bg-[#c4941c] px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest flex items-center justify-center gap-4 shadow-[0_20px_40px_-10px_rgba(217,165,32,0.4)] transition-all active:scale-95"
              >
                <i className="fa-solid fa-calendar-check text-lg md:text-xl"></i>
                BOOK FREE INSPECTION
              </button>
              <button 
                onClick={askExpert}
                className="bg-[#08264B]/40 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-brand-navy px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest flex items-center justify-center gap-4 transition-all active:scale-95 group"
              >
                <MessageCircle className="w-5 h-5 text-brand-gold" /> CHAT ON WHATSAPP
              </button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 md:gap-x-10 gap-y-4 md:gap-y-6 pt-8 md:pt-10 border-t border-white/10">
              <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase text-white tracking-widest group">
                <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-gold" />
                Professionals
              </div>
              <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase text-white tracking-widest group">
                <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-gold" />
                On-Time
              </div>
              <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase text-white tracking-widest group">
                <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-gold" />
                Guaranteed
              </div>
              <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase text-white tracking-widest group">
                <Award className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-gold" />
                Affordable
              </div>
            </div>
          </motion.div>

          {/* Right Service Grid */}
          <motion.div 
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.8, delay: 0.2}}
            className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 w-full"
          >
            {[
              {title: 'Painting Services', icon: 'fa-solid fa-paint-roller', img: '/images/services/service-paint.jpg'},
              {title: 'AC Maintenance', icon: 'fa-solid fa-snowflake', img: '/images/services/service-ac.jpg'},
              {title: 'Plumbing Services', icon: 'fa-solid fa-droplet', img: '/images/services/service-plumbing.jpg'},
              {title: 'Electrical Services', icon: 'fa-solid fa-bolt', img: '/images/services/service-electrical.jpg'},
              {title: 'Ceiling Works', icon: 'fa-solid fa-layer-group', img: '/images/services/service-ceiling.jpg'},
              {title: 'Handyman Services', icon: 'fa-solid fa-screwdriver-wrench', img: '/images/services/service-handyman.jpg'},
            ].map((s, i) => (
              <div key={i} className="group relative aspect-square rounded-2xl md:rounded-[28px] overflow-hidden shadow-2xl border border-white/5 bg-brand-navy">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                <div className="absolute inset-0 bg-[#08264B]/40 group-hover:bg-transparent transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08264B] via-[#08264B]/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 flex items-center gap-2 md:gap-3">
                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-brand-gold flex items-center justify-center text-brand-navy text-[12px] md:text-[14px] shadow-lg shrink-0">
                     <i className={s.icon}></i>
                   </div>
                   <span className="text-white text-[9px] md:text-[11px] font-black uppercase tracking-widest leading-tight">{s.title}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Banner (Overlapping) */}
        <div className="absolute -bottom-32 lg:-bottom-16 left-4 right-4 md:left-8 md:right-8 z-30">
          <div className="max-w-7xl mx-auto bg-white rounded-[32px] md:rounded-[40px] p-6 md:p-10 lg:p-14 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100/50">
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:divide-x divide-gray-100">
               {[
                 {label: 'Projects Done', val: '1000+', icon: <Building2 />},
                 {label: 'Happy Clients', val: '500+', icon: <Users />},
                 {label: 'Years Exp', val: '10+', icon: <Award />},
                 {label: 'Emirates', val: '7', icon: <MapPin />},
               ].map((st, i) => (
                 <div key={i} className="flex flex-col sm:flex-row items-center gap-2 md:gap-6 group lg:px-4 xl:px-8 text-center sm:text-left">
                   <div className="w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl md:rounded-[28px] bg-brand-gold/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300 shrink-0 border border-brand-gold/5">
                      {React.cloneElement(st.icon as React.ReactElement, { className: "w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10" })}
                   </div>
                   <div className="space-y-0">
                     <div className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-brand-navy tracking-tighter leading-none">{st.val}</div>
                     <div className="text-[7px] md:text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em] leading-none pt-1">{st.label}</div>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>


      <section className="py-16 md:py-24 px-6 md:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 pt-44 md:pt-0">
          <div className="text-center space-y-3 md:space-y-4 mb-12 md:mb-16">
            <motion.div 
              initial={{opacity: 0, scale: 0.9}}
              whileInView={{opacity: 1, scale: 1}}
              className="inline-flex items-center gap-3"
            >
              <div className="w-8 md:w-10 h-px bg-brand-gold"></div>
              <span className="text-brand-gold font-black tracking-[0.4em] uppercase text-[8px] md:text-[9px]">Our Services</span>
              <div className="w-8 md:w-10 h-px bg-brand-gold"></div>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-navy font-serif tracking-tight leading-tight">Complete Solutions <br className="hidden sm:block" /> <span className="text-brand-gold italic">For Every Need</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {homeServices.map((service, i) => (
              <motion.div 
                key={i}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay: i * 0.1}}
                whileHover={{y: -10}}
                className="group bg-white rounded-2xl md:rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 flex flex-col h-full transition-all duration-500"
              >
                <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-3 left-3 md:top-5 md:left-5">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl flex items-center justify-center text-brand-navy shadow-lg group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300">
                      <i className={cn(service.icon, "text-sm md:text-xl")}></i>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-8 flex flex-col flex-1 gap-1 md:gap-3">
                  <h3 className="text-sm md:text-lg font-black text-brand-navy leading-tight">{service.title}</h3>
                  <p className="hidden md:block text-sm text-gray-500 leading-relaxed font-medium flex-1">
                    {service.subtitle}
                  </p>
                  <Link 
                    to={`/services/${service.id}`}
                    className="flex items-center gap-1.5 md:gap-2 text-brand-gold font-black text-[8px] md:text-[9px] uppercase tracking-widest group-hover:gap-3 md:group-hover:gap-4 transition-all pt-2 md:pt-4"
                  >
                    Details <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/services" className="bg-brand-navy text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-brand-navy transition-all shadow-xl shadow-brand-navy/10 flex items-center gap-4 mx-auto w-fit active:scale-95">
              VIEW ALL SERVICES <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE & PROOF SECTION (New Unified Layout) */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-28">
          
          {/* Why Choose Banner */}
          <div className="bg-[#08264B] rounded-[40px] md:rounded-[60px] p-8 md:p-16 lg:p-20 shadow-3xl relative overflow-hidden">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-serif font-black uppercase tracking-widest leading-tight">
                Why Choose <br className="sm:hidden" /> <span className="text-brand-gold">Home Rescue</span>?
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 items-start">
              {[
                { title: 'Dubai Licensed', desc: 'Legally Registered', icon: BadgeCheck },
                { title: 'Fully Insured', desc: 'Complete Coverage', icon: ShieldCheck },
                { title: 'Expert Team', desc: 'Skilled & Experience', icon: Users },
                { title: 'Quality Pro', desc: '100% Guaranteed', icon: Award },
                { title: 'Always Ready', desc: '24/7 Availability', icon: Clock },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-4 md:gap-6 group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-gold/10 border border-brand-gold/20 rounded-2xl md:rounded-3xl flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300">
                    <item.icon className="w-6 h-6 md:w-9 md:h-9" />
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <h4 className="text-white font-black text-sm md:text-lg tracking-tight leading-tight">{item.title}</h4>
                    <p className="text-[8px] md:text-[11px] text-gray-400 font-bold uppercase tracking-wider leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Double Column: Work & Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Before / After Our Work */}
            <div className="bg-white rounded-[60px] p-10 md:p-14 border border-gray-100 shadow-sm flex flex-col items-center h-full">
              <h3 className="text-brand-navy text-3xl md:text-4xl font-serif font-black mb-10 md:mb-12 uppercase tracking-tighter text-center">
                Before / After Our Work
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full mb-10 md:mb-12 flex-1">
                {[
                  { title: 'Wall Painting', img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=600&fit=crop' },
                  { title: 'AC Services', img: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=600&fit=crop' },
                  { title: 'Bath Repair', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&fit=crop' },
                  { title: 'Ceiling Fix', img: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=600&fit=crop' }
                ].map((work, i) => (
                  <div key={i} className="space-y-4">
                    <div className="aspect-[4/5.5] rounded-[24px] md:rounded-[32px] overflow-hidden relative shadow-lg group">
                      <img src={work.img} alt={work.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2 md:bottom-3 md:left-3 md:right-3 flex justify-between gap-1">
                        <span className="bg-white/90 backdrop-blur-sm text-brand-navy text-[7px] md:text-[9px] font-black uppercase px-2 py-0.5 md:py-1 rounded-lg">Before</span>
                        <span className="bg-brand-gold text-brand-navy text-[7px] md:text-[9px] font-black uppercase px-2 py-0.5 md:py-1 rounded-lg">After</span>
                      </div>
                    </div>
                    <p className="text-[9px] md:text-[11px] font-black text-brand-navy text-center uppercase tracking-[0.1em]">{work.title}</p>
                  </div>
                ))}
              </div>
              
              <Link to="/portfolio" className="bg-brand-navy text-white px-10 py-4 md:px-12 md:py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-gold hover:text-brand-navy transition-all flex items-center gap-4 shadow-xl shadow-brand-navy/10 mt-auto">
                VIEW TRANSFORMATIONS <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-brand-gold" />
              </Link>
            </div>

            {/* Verified Corporate Projects */}
            <div className="bg-white rounded-[60px] p-10 md:p-14 border border-gray-100 shadow-sm flex flex-col items-center h-full">
              <h3 className="text-brand-navy text-3xl md:text-4xl font-serif font-black mb-10 md:mb-12 uppercase tracking-tighter text-center">
                Corporate Portfolio
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full mb-10 md:mb-12 flex-1">
                {[
                  { title: 'Radisson Blu', sub: 'Dubai Deira', img: '/park-inn-po.jpg' },
                  { title: 'M Gallery', sub: 'Palm Jumeirah', img: '/m-gallery-po.jpg' },
                  { title: 'Emaar Villas', sub: 'Dubai Hills', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&fit=crop' },
                  { title: 'Nakheel Mall', sub: 'Palm Jumeirah', img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=600&fit=crop' }
                ].map((proj, i) => (
                  <div key={i} className="space-y-4">
                    <div className="aspect-[4/5.5] rounded-[24px] md:rounded-[32px] overflow-hidden relative shadow-lg group">
                      <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/400x550/08264B/D9A520?text=${encodeURIComponent(proj.title)}` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2 md:bottom-3 md:left-3 md:right-3 flex flex-col gap-0.5">
                        <span className="text-white text-[8px] md:text-[10px] font-black uppercase tracking-wider leading-none">{proj.title}</span>
                        <span className="text-brand-gold text-[7px] md:text-[8px] font-bold uppercase tracking-widest">{proj.sub}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link to="/portfolio" className="bg-brand-navy text-white px-10 py-4 md:px-12 md:py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-gold hover:text-brand-navy transition-all flex items-center gap-4 shadow-xl shadow-brand-navy/10 mt-auto">
                VIEW ALL PROJECTS <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-brand-gold" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24 bg-white px-6 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16 gap-4 md:gap-6">
            <div className="hidden md:flex flex-1"></div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl text-brand-navy font-serif font-black uppercase tracking-widest text-center flex-1">
              Client Testimonials
            </h2>
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-0.5 text-brand-gold">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 md:w-4 md:h-4 fill-current" />)}
                </div>
                <span className="font-black text-brand-navy text-[9px] md:text-[11px] uppercase tracking-wider">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {name: 'Sarah Johnson', loc: 'Palm Jumeirah, Dubai', text: 'Home Rescue completely transformed my villa. The wall painting was flawless and the technicians were extremely professional.'},
                {name: 'Ahmed Al Mansoori', loc: 'Khalifa City, Abu Dhabi', text: 'Had a major AC leakage in the middle of the night. Their emergency team arrived within 45 minutes. Superb service!'},
                {name: 'Michael Brown', loc: 'Al Majaz, Sharjah', text: 'High quality tile works for my bathroom. They were very clean and finished on time. Highly recommended.'}
              ].map((review, i) => (
                <motion.div 
                  key={i}
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{delay: i * 0.1}}
                  className="bg-white p-8 px-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col h-full gap-6"
                >
                  <div className="flex items-center gap-4">
                    <img src={`https://i.pravatar.cc/150?u=${review.name}`} alt={review.name} className="w-14 h-14 rounded-2xl object-cover border-2 border-brand-gold/10" />
                    <div className="flex gap-0.5 text-brand-gold">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 fill-current" />)}
                    </div>
                  </div>
                  <p className="text-gray-600 text-[14px] leading-relaxed font-medium flex-1 italic opacity-90">"{review.text}"</p>
                  <div className="pt-4 border-t border-gray-50">
                    <div className="font-black text-brand-navy text-sm uppercase tracking-tight">{review.name}</div>
                    <div className="text-[9px] text-gray-400 font-black uppercase tracking-[0.15em] pt-0.5">{review.loc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Carousel Controls */}
            <div className="absolute top-1/2 -left-12 -translate-y-1/2 hidden xl:block">
               <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all">
                 <i className="fa-solid fa-chevron-left"></i>
               </button>
            </div>
            <div className="absolute top-1/2 -right-12 -translate-y-1/2 hidden xl:block">
               <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all">
                 <i className="fa-solid fa-chevron-right"></i>
               </button>
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-12">
               <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
               <div className="w-2 h-2 rounded-full bg-gray-200"></div>
               <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified UAE & CTA Section */}
      <section className="px-6 md:px-8 pb-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row rounded-3xl md:rounded-[50px] overflow-hidden shadow-2xl border border-gray-100/10">
          {/* Left: UAE Coverage */}
          <div className="lg:w-1/2 bg-[#08264B] p-10 md:p-16 lg:p-20 text-center flex flex-col justify-center gap-8 md:gap-12">
            <h2 className="text-white text-2xl md:text-3xl font-serif font-black uppercase tracking-widest leading-tight">
              Proudly Serving <br className="hidden sm:block" /> All 7 Emirates
            </h2>
            <div className="grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-4 xl:grid-cols-7 gap-y-6 md:gap-y-10 gap-x-4 md:gap-x-6 justify-center">
              {[
                {name: 'Dubai', icon: 'fa-solid fa-hotel'},
                {name: 'Abu Dhabi', icon: 'fa-solid fa-mosque'},
                {name: 'Sharjah', icon: 'fa-solid fa-landmark'},
                {name: 'Ajman', icon: 'fa-solid fa-ship'},
                {name: 'RAK', icon: 'fa-solid fa-mountain-sun'},
                {name: 'Fujairah', icon: 'fa-solid fa-umbrella-beach'},
                {name: 'UAE', icon: 'fa-solid fa-globe'}
              ].map((emirate) => (
                <div key={emirate.name} className="flex flex-col items-center gap-3 md:gap-4 transition-transform hover:scale-110">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center text-white/30 border border-white/5 shrink-0">
                     <i className={cn(emirate.icon, "text-lg md:text-2xl")}></i>
                  </div>
                  <span className="text-[8px] md:text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">{emirate.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: GET FREE QUOTE */}
          <div className="lg:w-1/2 bg-brand-gold p-10 md:p-16 lg:p-20 text-center flex flex-col justify-center gap-8 md:gap-10">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black uppercase tracking-tighter leading-none">
                Get Your Free <br className="hidden sm:block" /> Quote Today!
              </h2>
              <p className="text-white font-bold text-sm md:text-lg max-w-md mx-auto opacity-90">
                Professional technical services at your doorstep across UAE.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 pt-2 md:pt-4 justify-center">
               <button 
                 onClick={callNow}
                 className="bg-white text-brand-navy px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-brand-navy hover:text-white transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95"
               >
                 <Phone className="w-5 h-5" /> CALL NOW
               </button>
               <button 
                 onClick={askExpert}
                 className="bg-brand-navy text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-white hover:text-brand-navy transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95"
               >
                 <MessageCircle className="w-5 h-5 text-brand-gold" /> WHATSAPP US
               </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
