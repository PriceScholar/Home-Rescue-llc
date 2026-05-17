import React from 'react';
import {motion} from 'motion/react';
import {TopBar, Navbar, Footer} from './components/Navigation';
import {useLanguage} from './context/LanguageContext';
import {useBooking} from './components/BookingModal';
import {
  Paintbrush, 
  Wind, 
  Droplets, 
  Zap, 
  Grid2X2, 
  Hammer, 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  Award, 
  MapPin,
  Star,
  Quote,
  CheckCircle2,
  Phone,
  MessageCircle,
  PlusCircle
} from 'lucide-react';
import {Link} from 'react-router-dom';
import {cn} from './lib/utils';
import { serviceCategories } from './data/servicesData';
import TrustSection from './components/TrustSection';
import ServiceLocations from './components/ServiceLocations';
import VerifiedProjects from './components/VerifiedProjects';

const Home = () => {
  const {t, isRTL} = useLanguage();
  const { openBooking, callNow, askExpert, openConsultation } = useBooking();

  const stats = [
    {label: 'Projects Completed', value: '1000+'},
    {label: 'Happy Customers', value: '500+'},
    {label: 'Years Experience', value: '10+'},
    {label: 'Emirates Covered', value: '7'},
  ];

  const pricingPackages = [
    {
      title: 'Diagnosis',
      price: 'AED 99',
      features: ['On-site Inspection', 'Material Advice', 'Expert Consultation'],
      color: 'text-brand-red bg-white'
    },
    {
      title: 'Standard Repair',
      price: 'From AED 250',
      features: ['Minor Spares Fix', 'Deep Maintenance', '1-Year Warranty'],
      highlight: true,
      color: 'text-white bg-brand-red'
    },
    {
      title: 'Major Repair',
      price: 'From AED 500',
      features: ['Full Restoration', 'Major Refurbishment', 'Priority Support'],
      color: 'text-brand-red bg-white'
    }
  ];

  const emirates = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'RAK', 'Fujairah', 'UAQ'];

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Dubai Interior" 
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = 'https://placehold.co/1920x1080/1a3a6b/ffffff?text=Home+Rescue+UAE';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full text-white">
          <motion.div 
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="max-w-3xl space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-serif leading-tight">
              Premium Home Solutions Across UAE
            </h1>
            <p className="text-2xl font-light text-gray-200">
              Rescue Your Home. Restore Your Comfort.
            </p>
            <div className="flex flex-wrap gap-4 pt-8">
              <button 
                onClick={() => openBooking()}
                className="btn-primary px-10 py-5 text-lg"
              >
                GET FREE QUOTE
              </button>
              <button 
                onClick={openConsultation}
                className="bg-brand-red text-white hover:bg-white hover:text-brand-navy px-10 py-5 text-lg font-bold rounded-lg transition-all flex items-center gap-2 shadow-xl shadow-brand-red/20"
              >
                <i className="fa-solid fa-video"></i> VIRTUAL CONSULTATION
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Virtual Consultation Banner */}
      <section className="bg-brand-gold py-4 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-brand-navy">
          <span className="bg-brand-red text-white text-[10px] font-bold px-3 py-1 rounded-full animate-pulse whitespace-nowrap">🎁 LIMITED TIME</span>
          <h3 className="font-bold text-lg md:text-xl text-center">VIRTUAL CONSULTATION Available!</h3>
          <p className="text-sm opacity-80 text-center">Get expert advice via video call - 15 minutes - 100% Free</p>
          <button 
            onClick={openConsultation}
            className="bg-brand-navy text-white px-6 py-2 rounded-full font-bold text-sm hover:translate-x-1 transition-all flex items-center gap-2"
          >
            Book Now <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white px-8 py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="text-4xl font-bold text-brand-navy">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest text-brand-gold font-bold mt-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section className="services-grid px-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="services-row">
            {serviceCategories.map((cat, i) => (
              <div key={i} className="service-category">
                <div className="category-header">
                  <div className={cn("category-icon", cat.color.replace('bg-', 'style-bg-'))} style={{backgroundColor: cat.color === 'bg-brand-red' ? '#c41e3a' : cat.color === 'bg-blue-600' ? '#2563eb' : cat.color === 'bg-yellow-500' ? '#eab308' : cat.color === 'bg-brand-navy' ? '#1a3a6b' : cat.color === 'bg-brand-green' ? '#25d366' : '#666'}}>
                    <i className={cat.icon}></i>
                  </div>
                  <h3 className="category-title">{cat.name}</h3>
                </div>
                <div className="category-divider"></div>
                <ul className="sub-services-list">
                  {cat.subs.map((sub: any, j) => (
                    <li key={j}>
                      <Link to={`/services/${sub.id}`}>
                        <i className={cn(sub.icon, "sub-icon")}></i>
                        <span>{sub.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Locations Showcase */}
      <ServiceLocations />

      {/* Verified Corporate Projects */}
      <VerifiedProjects />

      {/* Pricing Packages - EXACT Layout from Image 3 */}
      <section className="py-24 bg-brand-cream px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-brand-red font-bold text-sm uppercase tracking-widest mb-2 block">PRICING</span>
          <h2 className="text-4xl md:text-5xl text-brand-navy font-serif font-bold">Service Packages</h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPackages.map((pkg, i) => (
            <motion.div 
              key={i}
              whileHover={{y: -10}}
              className={cn(
                "rounded-[30px] p-12 shadow-xl border border-gray-100 flex flex-col items-center text-center transition-all",
                pkg.color
              )}
            >
              <h3 className="text-2xl font-bold mb-2 uppercase tracking-wide">{pkg.title}</h3>
              <div className="text-4xl font-black mb-8">{pkg.price}</div>
              <div className="space-y-4 mb-12 flex-1 w-full border-t border-current/10 pt-8">
                {pkg.features.map((f, j) => (
                  <div key={j} className="flex items-center justify-center gap-2 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 shrink-0" /> {f}
                  </div>
                ))}
              </div>
              <button 
                onClick={() => openBooking(pkg.title)}
                className={cn(
                  "px-8 py-3 rounded-full font-bold text-sm tracking-widest transition-all w-full",
                  pkg.highlight ? "bg-white text-brand-red hover:bg-gray-100" : "bg-brand-red text-white hover:bg-brand-navy"
                )}
              >
                BOOK NOW
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust & Credentials Section */}
      <TrustSection />

      {/* Service Areas */}
      <section className="py-20 bg-brand-navy text-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="space-y-4">
             <MapPin className="w-12 h-12 text-brand-gold mx-auto mb-4" />
             <h2 className="text-3xl md:text-4xl font-serif">Serving All 7 Emirates</h2>
             <p className="text-gray-400">Wherever you are in the UAE, Home Rescue is just a call away.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {emirates.map(emirate => (
              <span key={emirate} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg font-medium hover:bg-brand-gold hover:text-brand-navy transition-all cursor-default">
                {emirate}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-brand-cream px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4 max-w-xl">
              <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-sm">Testimonials</span>
              <h2 className="text-4xl md:text-5xl text-brand-navy font-serif">What Our Clients Say</h2>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />)}
              </div>
              <span className="font-bold text-brand-navy">4.9/5 Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               {name: 'Sarah Johnson', loc: 'Palm Jumeirah, Dubai', text: 'Home Rescue completely transformed my villa. The wall painting was flawless and the technicians were extremely professional.', service: 'Full Renovation'},
               {name: 'Ahmed Al Mansoori', loc: 'Khalifa City, Abu Dhabi', text: 'Had a major AC leakage in the middle of the night. Their emergency repair team arrived within 45 minutes. Superb service!', service: 'AC Repair'},
               {name: 'Michael Brown', loc: 'Al Majaz, Sharjah', text: 'High quality tile works for my bathroom. They were very clean and finished on time. Highly recommended for premium technical works.', service: 'Tile Fixing'}
             ].map((review, i) => (
               <motion.div 
                key={i}
                whileHover={{y: -10}}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative"
               >
                 <Quote className="absolute top-6 right-8 w-12 h-12 text-brand-navy/5" />
                 <div className="flex gap-1 mb-4">
                   {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 fill-brand-gold text-brand-gold" />)}
                 </div>
                 <p className="text-gray-600 mb-8 italic leading-relaxed">"{review.text}"</p>
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-brand-navy/10 rounded-full flex items-center justify-center font-bold text-brand-navy">
                     {review.name[0]}
                   </div>
                   <div>
                     <div className="font-bold text-brand-navy">{review.name}</div>
                     <div className="text-[10px] text-brand-gold uppercase font-bold tracking-wider">{review.loc}</div>
                   </div>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Not Sure What You Need Section */}
      <section className="py-20 bg-brand-cream px-8 border-y border-brand-gold/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-3xl font-serif text-brand-navy">Not Sure What You Need?</h3>
          <p className="text-gray-600 italic">Get a 15-minute virtual consultation with our technical expert to discuss your home maintenance issues.</p>
          <button 
            onClick={openConsultation}
            className="inline-flex items-center gap-3 bg-brand-red text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-navy hover:scale-105 transition-all shadow-xl shadow-brand-red/20"
          >
            🎥 Book Virtual Consultation
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-navy text-white px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl font-serif">Get Your Free Quote Today!</h2>
            <p className="text-gray-400">Professional technical services at your doorstep across UAE.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={callNow}
              className="btn-primary bg-brand-red px-8 py-4 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" /> CALL NOW
            </button>
            <button 
              onClick={() => askExpert()}
              className="btn-primary bg-brand-green px-8 py-4 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> WHATSAPP
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
