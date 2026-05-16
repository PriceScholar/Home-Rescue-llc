import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ChevronLeft, 
  Clock, 
  ShieldCheck, 
  UserCheck, 
  Box, 
  MessageCircle, 
  Phone,
  CheckCircle2,
  ChevronRight,
  PlusCircle,
  HelpCircle,
  Star,
  Quote
} from 'lucide-react';
import { TopBar, Navbar, Footer } from './components/Navigation';
import { servicesData } from './data/servicesData';
import { cn } from './lib/utils';
import { useLanguage } from './context/LanguageContext';
import { useBooking } from './components/BookingModal';

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { isRTL } = useLanguage();
  const { openBooking, askExpert, callNow } = useBooking();
  const data = serviceId ? servicesData[serviceId] : null;

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar />
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-brand-cream">
          <h1 className="text-4xl font-serif text-brand-navy mb-4">Service Details Coming Soon</h1>
          <p className="text-gray-500 mb-8 max-w-md">We are currently updating our portfolio. Please contact us directly for inquiries about this service.</p>
          <Link to="/services" className="btn-primary">BACK TO SERVICES</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-brand-cream">
      <TopBar />
      <Navbar />

      {/* Breadcrumb & Navigation */}
      <section className="bg-white py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/services" className="hover:text-brand-red transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-navy font-bold">{data.title}</span>
          </div>
          
          <Link to="/services" className="inline-flex items-center gap-2 text-brand-red font-bold text-sm hover:gap-3 transition-all mb-8">
            <ChevronLeft className={cn("w-4 h-4", isRTL && "rotate-180")} /> BACK TO CATEGORY
          </Link>
        </div>
      </section>

      {/* Hero Section - 50/50 Split */}
      <section className="pb-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column: Image with exact requested structure */}
            <div className="service-image-wrapper">
              <img 
                src={data.image} 
                alt={data.title}
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; 
                  target.src = 'https://placehold.co/800x600/1a3a6b/d4af37?text=Service+Image';
                  target.classList.add('fallback-image');
                }}
              />
              <div className="duration-badge">
                <span className="label">ESTIMATE DURATION</span>
                <span className="time">{data.estimateDuration}</span>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 bg-brand-red text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded">
                  TECHNICAL SERVICE DETAIL
                </span>
                <h1 className="text-5xl md:text-6xl font-serif text-brand-navy leading-tight">{data.title}</h1>
                <p className="text-brand-gray leading-relaxed text-lg">{data.description}</p>
              </div>

              <div className="space-y-0 border-y border-gray-100 py-4">
                {[
                  {label: 'STANDARD MATERIAL', value: data.material},
                  {label: 'TECHNICIANS', value: data.technician},
                  {label: 'WARRANTY', value: data.warranty},
                ].map((row, i) => (
                  <div key={i} className={cn(
                    "flex flex-col sm:flex-row sm:items-center justify-between py-4",
                    i !== 2 && "border-b border-gray-50"
                  )}>
                    <span className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-1 sm:mb-0">{row.label}</span>
                    <span className="text-sm font-bold text-brand-navy uppercase">{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <button 
                  onClick={() => openBooking(data.title)}
                  className="flex-1 bg-brand-red text-white px-8 py-5 rounded-full font-bold shadow-xl hover:bg-brand-navy transition-all flex items-center justify-center gap-3"
                >
                  <PlusCircle className="w-5 h-5" /> ADD TO MY BOOKING
                </button>
                <button 
                  onClick={() => askExpert(data.title)}
                  className="flex-1 bg-brand-green text-white px-8 py-5 rounded-full font-bold shadow-xl hover:opacity-90 transition-all flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" /> ASK EXPERT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub Services Grid */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-serif text-brand-navy mb-4">What's Included</h2>
            <div className="w-20 h-1 bg-brand-gold rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.subServices.map((sub, i) => (
              <motion.div 
                key={i} 
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:border-brand-gold/30 hover:bg-brand-cream transition-all group"
              >
                <div className="p-3 bg-brand-navy/5 rounded-xl text-brand-gold group-hover:bg-brand-navy group-hover:text-white transition-all w-12 h-12 flex items-center justify-center shrink-0">
                  <i className={cn(sub.icon, "text-xl")}></i>
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">{sub.name}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{sub.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 px-4 md:px-8 bg-brand-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] -z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-serif">How We Do It</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Our systematic approach ensures quality and reliability in every technical task.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.process.map((p, i) => (
              <div key={i} className="relative group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-brand-gold transition-all duration-500">
                <span className="absolute top-6 right-8 text-6xl font-serif font-black text-white/5 group-hover:text-brand-navy/10 transition-colors">{p.step}</span>
                <PlusCircle className="w-8 h-8 text-brand-gold mb-6 group-hover:text-brand-navy transition-colors" />
                <h4 className="text-xl font-bold mb-3 group-hover:text-brand-navy transition-colors">{p.title}</h4>
                <p className="text-sm text-gray-400 group-hover:text-brand-navy/80 transition-colors leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages - Service Specific */}
      <section className="py-24 px-4 md:px-8 bg-brand-cream border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-red font-bold text-sm uppercase tracking-widest mb-2 block">PRICING</span>
            <h2 className="text-4xl md:text-5xl text-brand-navy font-serif font-bold">Service Packages</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.packages.map((pkg, i) => (
              <motion.div 
                key={i}
                whileHover={{y: -10}}
                className={cn(
                  "rounded-[30px] p-12 shadow-xl border border-gray-100 flex flex-col items-center text-center transition-all",
                  pkg.recommended ? "text-white bg-brand-red" : "text-brand-red bg-white"
                )}
              >
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-wide">{pkg.name}</h3>
                <div className="text-4xl font-black mb-8">{pkg.price}</div>
                <div className="space-y-4 mb-12 flex-1 w-full border-t border-current/10 pt-8">
                  {pkg.features.map((f, j) => (
                    <div key={j} className="flex items-center justify-center gap-2 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 shrink-0" /> {f}
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => openBooking(`${data.title} - ${pkg.name}`)}
                  className={cn(
                    "px-8 py-3 rounded-full font-bold text-sm tracking-widest transition-all w-full",
                    pkg.recommended ? "bg-white text-brand-red hover:bg-gray-100" : "bg-brand-red text-white hover:bg-brand-navy"
                  )}
                >
                  BOOK NOW
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <HelpCircle className="w-12 h-12 text-brand-gold mx-auto" />
            <h2 className="text-4xl font-serif text-brand-navy">Service FAQs</h2>
          </div>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <details key={i} className="group bg-brand-cream rounded-2xl p-6 cursor-pointer border border-transparent hover:border-brand-gold/20 transition-all">
                <summary className="flex items-center justify-between list-none font-bold text-brand-navy">
                  {faq.question}
                  <ChevronRight className="w-5 h-5 text-brand-gold transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed border-t border-gray-200/50 pt-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Specific to Service */}
      <section className="py-24 bg-brand-navy/5 px-4 md:px-8">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-serif text-brand-navy text-center mb-16 italic">What our clients say about this service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.reviews.map((rev, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-brand-gold text-brand-gold" />)}
                  </div>
                  <Quote className="w-8 h-8 text-brand-gold opacity-20 mb-4" />
                  <p className="text-gray-600 mb-8 italic">"{rev.text}"</p>
                  <div>
                    <div className="font-bold text-brand-navy">{rev.name}</div>
                    <div className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">{rev.location}</div>
                  </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto bg-brand-red rounded-[50px] p-12 text-center text-white space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif">Ready to book this service?</h2>
            <p className="text-lg opacity-90">Talk to our experts today for a free on-site consultation and instant personalized quote.</p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button 
                onClick={callNow}
                className="bg-white text-brand-red px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-navy hover:text-white transition-all shadow-xl flex items-center gap-3"
              >
                <Phone className="w-6 h-6" /> CALL NOW
              </button>
              <button 
                onClick={() => askExpert(data.title)}
                className="bg-brand-green text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl flex items-center gap-3"
              >
                <MessageCircle className="w-6 h-6" /> WHATSAPP
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
