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

  const whyChoose = [
    { title: 'Dubai Licensed', desc: 'Legally Registered & Approved', icon: <BadgeCheck className="w-8 h-8" /> },
    { title: 'Fully Insured', desc: 'Complete Insurance Coverage', icon: <ShieldCheck className="w-8 h-8" /> },
    { title: 'Expert Technicians', desc: 'Skilled, Trained & Experienced', icon: <Users className="w-8 h-8" /> },
    { title: 'Quality Guarantee', desc: '100% Satisfaction Guaranteed', icon: <Award className="w-8 h-8" /> },
    { title: '24/7 Support', desc: 'Always Here When You Need Us', icon: <Clock className="w-8 h-8" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" 
            alt="Premium UAE Home" 
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full flex flex-col md:flex-row items-center gap-12 pt-20">
          <motion.div 
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
            className="flex-[1.2] space-y-8"
          >
            <div className="inline-block px-4 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full">
              <span className="text-brand-gold font-bold text-xs tracking-[0.2em] uppercase">Premium Technical Services</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-serif leading-tight text-white tracking-tight">
              Premium Technical <br />
              <span className="text-brand-gold italic">Solutions Across UAE</span>
            </h1>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-bold text-gray-300 uppercase tracking-widest border-l-2 border-brand-gold pl-6">
              <span>Painting</span>
              <span className="text-brand-gold opacity-50">|</span>
              <span>AC</span>
              <span className="text-brand-gold opacity-50">|</span>
              <span>Plumbing</span>
              <span className="text-brand-gold opacity-50">|</span>
              <span>Electrical</span>
              <span className="text-brand-gold opacity-50">|</span>
              <span>Ceiling</span>
              <span className="text-brand-gold opacity-50">|</span>
              <span>Handyman & More</span>
            </div>
            <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
              Trusted by Villas, Homes, Hotels & Commercial Properties Across Dubai and All Emirates.
            </p>
            <div className="flex flex-wrap gap-4 pt-6">
              <button 
                onClick={() => openBooking()}
                className="bg-brand-red text-white hover:bg-white hover:text-brand-navy px-10 py-5 text-sm font-black rounded-xl transition-all flex items-center gap-3 shadow-2xl shadow-brand-red/20 group"
              >
                <i className="fa-solid fa-calendar-check text-lg"></i>
                BOOK FREE INSPECTION
              </button>
              <button 
                onClick={askExpert}
                className="bg-white/5 border-2 border-white/10 backdrop-blur-md text-white hover:bg-white hover:text-brand-navy px-10 py-5 text-sm font-black rounded-xl transition-all flex items-center gap-3 group"
              >
                <MessageCircle className="w-6 h-6 text-brand-gold group-hover:text-brand-navy" /> CHAT ON WHATSAPP
              </button>
            </div>
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-300">
                <CircleCheck className="w-5 h-5 text-brand-gold" /> Trained Professionals
              </div>
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-300">
                <Clock className="w-5 h-5 text-brand-gold" /> On-Time Service
              </div>
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-300">
                <Award className="w-5 h-5 text-brand-gold" /> Satisfaction Guaranteed
              </div>
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-300">
                <div className="w-5 h-5 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center text-[8px] font-bold">$</div> Affordable Pricing
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.8, delay: 0.2}}
            className="hidden xl:grid grid-cols-2 gap-4 flex-1 h-[500px]"
          >
            {[
              {id: 'paint-work', title: 'Painting Services', icon: 'fa-solid fa-paint-roller'},
              {id: 'ac-maintenance', title: 'AC Maintenance', icon: 'fa-solid fa-snowflake'},
              {id: 'plumbing-services', title: 'Plumbing Services', icon: 'fa-solid fa-droplet'},
              {id: 'electrical-services', title: 'Electrical Works', icon: 'fa-solid fa-bolt'},
              {id: 'ceiling-work', title: 'Ceiling Works', icon: 'fa-solid fa-layer-group'},
              {id: 'handyman-more', title: 'Handyman Services', icon: 'fa-solid fa-screwdriver-wrench'},
            ].map((s, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={serviceCategories.find(c => c.id === s.id)?.image} 
                  alt={s.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-brand-navy opacity-40 group-hover:opacity-20 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center shadow-lg shrink-0">
                    <i className={cn(s.icon, "text-brand-navy text-sm")}></i>
                  </div>
                  <h3 className="text-white font-bold text-[10px] uppercase tracking-[0.1em]">{s.title}</h3>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="relative z-20 -mt-16 px-8">
        <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow-2xl p-10 border border-gray-100 backdrop-blur-md">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 divide-x-0 lg:divide-x divide-gray-100">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center justify-center gap-5 text-center md:text-left px-4">
                <div className="w-16 h-16 bg-brand-gold/5 rounded-[22px] flex items-center justify-center text-brand-gold border border-brand-gold/10">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-4xl font-black text-brand-navy tracking-tight">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-32 px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6 mb-24">
            <motion.div 
              initial={{opacity: 0, scale: 0.9}}
              whileInView={{opacity: 1, scale: 1}}
              className="inline-flex items-center gap-3"
            >
              <div className="w-12 h-px bg-brand-gold"></div>
              <span className="text-brand-gold font-black tracking-[0.4em] uppercase text-[10px]">Our Services</span>
              <div className="w-12 h-px bg-brand-gold"></div>
            </motion.div>
            <h2 className="text-5xl md:text-6xl text-brand-navy font-serif tracking-tight">Complete Solutions <br /> <span className="text-brand-gold italic">For Every Need</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeServices.map((service, i) => (
              <motion.div 
                key={i}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay: i * 0.1}}
                whileHover={{y: -12}}
                className="group bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-6 left-6">
                    <div className="w-14 h-14 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center text-brand-navy shadow-xl group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                      <i className={cn(service.icon, "text-2xl")}></i>
                    </div>
                  </div>
                </div>
                <div className="p-10 space-y-4">
                  <h3 className="text-xl font-black text-brand-navy leading-tight">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    {service.subtitle}
                  </p>
                  <Link 
                    to={`/services/${service.id}`}
                    className="flex items-center gap-3 text-brand-gold font-black text-[10px] uppercase tracking-widest group-hover:gap-5 transition-all pt-4"
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link to="/services" className="bg-brand-navy text-white px-16 py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-brand-navy transition-all shadow-xl shadow-brand-navy/20 flex items-center gap-4 mx-auto w-fit">
              VIEW ALL SERVICES <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Home Rescue */}
      <section className="py-32 bg-brand-navy text-white px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 Q 50 0 100 100" fill="none" stroke="white" strokeWidth="0.1" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-24">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-brand-gold font-black tracking-[0.4em] uppercase text-[10px]">Why Choose Home Rescue?</span>
                <h2 className="text-5xl md:text-7xl font-serif leading-tight">Expert Technical <br />Solutions You <span className="text-brand-gold italic">Can Trust</span></h2>
              </div>
              <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-xl">
                At Home Rescue, we combine local expertise with international standards to provide premium technical services across all 7 emirates.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 pt-6">
                {whyChoose.map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{delay: i * 0.1}}
                    className="flex gap-6 group"
                  >
                    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300">
                      <div className="w-8 h-8">{item.icon}</div>
                    </div>
                    <div className="space-y-1 pt-1">
                      <h4 className="font-black text-lg tracking-tight">{item.title}</h4>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-[4/5] overflow-hidden rounded-[60px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop" 
                  alt="Expert Technician" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
              </div>
              <motion.div 
                animate={{y: [0, -20, 0]}}
                transition={{duration: 4, repeat: Infinity, ease: "easeInOut"}}
                className="absolute -bottom-12 -left-12 bg-white p-12 rounded-[40px] shadow-2xl z-20 hidden md:block border-8 border-brand-navy"
              >
                <div className="text-6xl font-black text-brand-navy mb-2 tracking-tighter">10+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold">Years Excellence</div>
              </motion.div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After Section */}
      <section className="py-32 px-8 bg-brand-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6 mb-24">
            <span className="text-brand-gold font-black tracking-[0.4em] uppercase text-[10px]">Our Work</span>
            <h2 className="text-5xl md:text-6xl text-brand-navy font-serif">Before / After Our Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {title: 'Wall Painting', image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1200&fit=crop'},
              {title: 'AC Installation', image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=1200&fit=crop'},
              {title: 'Bathroom Renovation', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&fit=crop'},
              {title: 'Ceiling Work', image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1200&fit=crop'}
            ].map((work, i) => (
              <div key={i} className="group relative aspect-[3/4] rounded-[40px] overflow-hidden bg-brand-navy shadow-xl border border-white/5">
                <img src={work.image} alt={work.title} className="w-full h-full object-cover opacity-70 transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-10 space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[9px] font-black text-white uppercase tracking-widest">Before</span>
                    <div className="w-10 h-px bg-white/20"></div>
                    <span className="px-4 py-1.5 bg-brand-gold rounded-full text-[9px] font-black text-brand-navy uppercase tracking-widest shadow-lg shadow-brand-gold/30">After</span>
                  </div>
                  <h4 className="text-white font-black text-xl tracking-tight">{work.title}</h4>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <Link to="/portfolio" className="btn-outline inline-flex px-14 py-6 uppercase tracking-[0.2em] text-xs font-black rounded-2xl border-2">
              VIEW MORE TRANSFORMATIONS <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Verified Corporate Projects */}
      <VerifiedProjects />

      {/* Reviews Section */}
      <section className="py-32 bg-white px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="space-y-6 max-w-xl text-center md:text-left">
              <span className="text-brand-gold font-black tracking-[0.4em] uppercase text-[10px]">What Our Clients Say</span>
              <h2 className="text-5xl md:text-6xl text-brand-navy font-serif tracking-tight">Real Stories From <span className="text-brand-gold italic">Real Customers</span></h2>
            </div>
            <div className="flex items-center gap-5 bg-brand-cream border border-brand-gold/20 px-8 py-5 rounded-[24px] shadow-sm">
              <div className="flex gap-1.5 text-brand-gold">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="font-black text-brand-navy tracking-tight">4.9/5 Average Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               {name: 'Sarah Johnson', loc: 'Palm Jumeirah, Dubai', text: 'Home Rescue completely transformed my villa. The wall painting was flawless and the technicians were extremely professional.'},
               {name: 'Ahmed Al Mansoori', loc: 'Khalifa City, Abu Dhabi', text: 'Had a major AC leakage in the middle of the night. Their emergency repair team arrived within 45 minutes. Superb service!'},
               {name: 'Michael Brown', loc: 'Al Majaz, Sharjah', text: 'High quality tile works for my bathroom. They were very clean and finished on time. Highly recommended.'}
             ].map((review, i) => (
                <motion.div 
                  key={i}
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{delay: i * 0.1}}
                  whileHover={{y: -12}}
                  className="bg-brand-cream p-12 rounded-[48px] border border-brand-gold/10 relative group transition-all duration-500 shadow-sm hover:shadow-xl"
                >
                  <Quote className="absolute top-10 right-10 w-16 h-16 text-brand-gold opacity-5 group-hover:opacity-10 transition-opacity" />
                  <div className="flex gap-1.5 mb-8 text-brand-gold">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <p className="text-gray-600 mb-10 text-[18px] leading-relaxed font-serif">"{review.text}"</p>
                  <div className="flex items-center gap-5 pt-4 border-t border-brand-gold/10">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center font-bold text-brand-navy shadow-lg overflow-hidden border-2 border-brand-gold/20">
                      <img src={`https://i.pravatar.cc/150?u=${review.name}`} alt={review.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-black text-brand-navy tracking-tight">{review.name}</div>
                      <div className="text-[9px] text-brand-gold uppercase font-black tracking-widest">{review.loc}</div>
                    </div>
                  </div>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* UAE Service Coverage Area Section */}
      <section className="py-32 bg-brand-navy text-white px-8 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" 
            alt="Dubai Skyline" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-24">
          <div className="space-y-6 max-w-3xl mx-auto">
             <div className="inline-flex items-center gap-3">
                <div className="w-12 h-px bg-brand-gold"></div>
                <span className="text-brand-gold font-black tracking-[0.4em] uppercase text-[10px]">UAE Wide Service</span>
                <div className="w-12 h-px bg-brand-gold"></div>
             </div>
             <h2 className="text-5xl md:text-6xl font-serif tracking-tight">Proudly Serving <span className="text-brand-gold italic">All 7 Emirates</span></h2>
             <p className="text-gray-400 text-lg font-medium">Professional technical services available across the entire United Arab Emirates.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {[
              {name: 'Dubai', icon: 'fa-solid fa-hotel'},
              {name: 'Abu Dhabi', icon: 'fa-solid fa-mosque'},
              {name: 'Sharjah', icon: 'fa-solid fa-landmark'},
              {name: 'Ajman', icon: 'fa-solid fa-ship'},
              {name: 'RAK', icon: 'fa-solid fa-mountain-sun'},
              {name: 'Fujairah', icon: 'fa-solid fa-umbrella-beach'},
              {name: 'UAE', icon: 'fa-solid fa-globe'}
            ].map((emirate, i) => (
              <motion.div 
                key={emirate.name}
                initial={{opacity: 0, scale: 0.8}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{delay: i * 0.05}}
                whileHover={{y: -12, backgroundColor: '#D9A520', color: '#08264B'}}
                className="flex flex-col items-center gap-6 p-10 bg-white/5 border border-white/10 rounded-[40px] transition-all duration-500 group"
              >
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-3xl group-hover:bg-brand-navy group-hover:text-white transition-all duration-500 shadow-xl">
                  <i className={emirate.icon}></i>
                </div>
                <span className="font-black text-xs uppercase tracking-[0.2em]">{emirate.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-white px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="bg-brand-gold rounded-[60px] p-16 md:p-28 overflow-hidden relative shadow-[0_50px_100px_-30px_rgba(217,165,32,0.4)] flex flex-col xl:flex-row items-center justify-between gap-16"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img 
                 src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" 
                 className="w-full h-full object-cover mix-blend-overlay" 
                 alt="Background" 
              />
            </div>
            <div className="relative z-10 space-y-8 text-brand-navy text-center xl:text-left flex-1">
              <div className="inline-block px-4 py-2 bg-brand-navy/10 rounded-full text-[10px] font-black uppercase tracking-widest">Limited Time Offer</div>
              <h2 className="text-5xl md:text-8xl font-serif font-black leading-[1.1] tracking-tighter shrink-0">Get Your Free <br /> <span className="italic opacity-80">Quote Today!</span></h2>
              <p className="text-xl font-bold opacity-80 flex items-center gap-3 justify-center xl:justify-start">
                <span className="w-8 h-px bg-brand-navy/30"></span> 
                Professional technical services at your doorstep across UAE.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-6 shrink-0 w-full xl:w-auto">
               <button 
                 onClick={callNow}
                 className="bg-brand-navy text-white hover:bg-white hover:text-brand-navy px-12 py-7 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-4 shadow-2xl active:scale-95 group"
               >
                 <Phone className="w-7 h-7 group-hover:animate-bounce" /> CALL NOW
               </button>
               <button 
                 onClick={askExpert}
                 className="bg-white text-brand-navy hover:bg-brand-navy hover:text-white px-12 py-7 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-4 shadow-2xl active:scale-95 group"
               >
                 <MessageCircle className="w-7 h-7 text-brand-green group-hover:text-white" /> WHATSAPP US
               </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
