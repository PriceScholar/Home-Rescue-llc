import React from 'react';
import {Helmet} from 'react-helmet-async';
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
  CircleCheck,
  ChevronRight,
  PlusCircle,
  CircleHelp,
  Star,
  Quote
} from 'lucide-react';
import { TopBar, Navbar, Footer } from './components/Navigation';
import VerifiedProjects from './components/VerifiedProjects';
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
      <div className="min-h-screen flex flex-col bg-white">
        <TopBar />
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-20 text-center">
          <h1 className="text-5xl font-serif text-brand-navy mb-6">Service Excellence</h1>
          <p className="text-gray-500 mb-10 max-w-md leading-relaxed">We are currently refining the details for this technical specialty to ensure a premium experience. Please contact us directly for an immediate expert consultation.</p>
          <Link to="/" className="bg-brand-navy text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-gold transition-all">
            Return Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Helmet>
        <title>{`${data.title} in Dubai & UAE | Resqhome`}</title>
        <meta name="description" content={`${data.description} Licensed Dubai technicians, fast response, transparent pricing. Book online or via WhatsApp.`} />
        <link rel="canonical" href={`https://resqhome.ae/services/${serviceId}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": data.title,
            "description": data.description,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Resqhome UAE",
              "image": "https://resqhome.ae/favicon-192.png",
              "telephone": "+971524524295",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Al Nahda",
                "addressLocality": "Dubai",
                "addressCountry": "AE"
              }
            },
            "areaServed": [
              { "@type": "AdministrativeArea", "name": "Dubai" },
              { "@type": "AdministrativeArea", "name": "Abu Dhabi" },
              { "@type": "AdministrativeArea", "name": "Sharjah" },
              { "@type": "AdministrativeArea", "name": "Ajman" },
              { "@type": "AdministrativeArea", "name": "Ras Al Khaimah" },
              { "@type": "AdministrativeArea", "name": "Fujairah" },
              { "@type": "AdministrativeArea", "name": "Umm Al Quwain" }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": `${data.title} Packages`,
              "itemListElement": data.packages.map((pkg, idx) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": pkg.name
                },
                "price": pkg.price.replace(/[^\d]/g, ""),
                "priceCurrency": "AED"
              }))
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://resqhome.ae"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://resqhome.ae/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": data.title,
                "item": `https://resqhome.ae/services/${serviceId}`
              }
            ]
          })}
        </script>
      </Helmet>
      <TopBar />
      <Navbar />

      {/* Breadcrumb - Minimalist Luxury Style */}
      <section className="bg-brand-cream/30 py-4 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 opacity-30" />
          <Link to="/services" className="hover:text-brand-gold transition-colors">Services</Link>
          <ChevronRight className="w-3 h-3 opacity-30" />
          <span className="text-brand-navy">{data.title}</span>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 md:py-24 px-6 md:px-8 border-b border-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Image */}
            <motion.div 
              initial={{opacity: 0, x: -30}} 
              animate={{opacity: 1, x: 0}}
              className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-100 aspect-video sm:aspect-square lg:aspect-auto lg:h-[600px]"
            >
              <img 
                src={`/images/services/subs/${serviceId}.jpg`} 
                alt={data.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src.includes('/images/services/subs/')) {
                    target.src = data.image || "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=1200";
                  } else {
                    target.onerror = null; 
                    target.src = 'https://placehold.co/800x600/1a3a6b/ffffff?text=Premium+Service';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>

            {/* Right Column: Content */}
            <div className="space-y-8 md:space-y-10">
              <div className="space-y-4 md:space-y-6">
                <motion.div 
                  initial={{opacity: 0, y: 10}}
                  animate={{opacity: 1, y: 0}}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-[1px] bg-brand-red"></div>
                  <span className="text-brand-red font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] rounded">
                    Bespoke Technical Solution
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.1}}
                  className="text-4xl sm:text-5xl md:text-7xl font-serif text-brand-navy leading-tight font-bold"
                >
                  {data.title}
                </motion.h1>
                <motion.p 
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.2}}
                  className="text-gray-500 leading-relaxed text-lg md:text-xl font-light"
                >
                  {data.description}
                </motion.p>
              </div>

              {/* Technical Specs - Clean Luxury Table */}
              <motion.div 
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.3}}
                className="grid grid-cols-1 gap-4 md:gap-6 pt-6 border-t border-gray-100"
              >
                {[
                  {label: 'Materials', value: data.material, icon: <Box className="w-4 h-4" />},
                  {label: 'Expertise', value: data.technician, icon: <UserCheck className="w-4 h-4" />},
                  {label: 'Warranty', value: data.warranty, icon: <ShieldCheck className="w-4 h-4" />},
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-cream/50 flex items-center justify-center text-brand-gold group-hover:bg-brand-navy group-hover:text-white transition-all">
                        {row.icon}
                      </div>
                      <span className="text-[9px] md:text-[11px] font-bold text-gray-400 tracking-[0.2em] uppercase">{row.label}</span>
                    </div>
                    <span className="text-xs md:text-sm font-bold text-brand-navy uppercase tracking-wider">{row.value}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div 
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.4}}
                className="flex flex-col sm:flex-row gap-4 pt-8"
              >
                <button 
                  onClick={() => openBooking(data.title)}
                  className="flex-1 bg-brand-navy text-white px-10 py-5 rounded-full font-bold shadow-2xl hover:bg-brand-red transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest"
                >
                   Book Free Inspection
                </button>
                <button 
                  onClick={() => askExpert(data.title)}
                  className="flex-1 bg-brand-green text-white px-10 py-5 rounded-full font-bold shadow-2xl hover:shadow-brand-green/20 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest"
                >
                  <i className="fa-brands fa-whatsapp text-2xl"></i> WhatsApp Expert
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-brand-cream/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24 space-y-3 md:space-y-4">
            <span className="text-brand-gold font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px]">What is Included</span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-navy font-bold">Scope of Excellence</h2>
            <div className="w-24 h-[1px] bg-brand-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
            {data.subServices.map((sub, i) => (
              <motion.div 
                key={i} 
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: i * 0.1}}
                className="bg-white p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-cream flex items-center justify-center rounded-xl md:rounded-2xl text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all mb-6 md:mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                  <i className={cn(sub.icon, "text-xl md:text-2xl text-brand-gold group-hover:text-white transition-colors")}></i>
                </div>
                <h4 className="text-lg md:text-2xl font-serif font-bold text-brand-navy mb-3 md:mb-4">{sub.name}</h4>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{sub.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24 space-y-3 md:space-y-4">
            <span className="text-brand-gold font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px] opacity-60">The Workflow</span>
            <h2 className="text-3xl md:text-6xl font-serif font-bold">Our Technical Process</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {data.process.map((p, i) => (
              <motion.div 
                key={i} 
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: i * 0.1}}
                className="relative space-y-4 md:space-y-6 pt-6 md:pt-10"
              >
                <div className="text-6xl md:text-8xl font-serif font-bold text-white/5 absolute -top-4 md:-top-8 -left-2 z-0">{p.step}</div>
                <div className="relative z-10 space-y-4 md:space-y-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-navy font-bold shadow-xl">
                    <CircleCheck className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h4 className="text-lg md:text-2xl font-serif font-bold leading-tight">{p.title}</h4>
                  <p className="text-white/50 text-[11px] md:text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-32 px-4 md:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-24 space-y-4">
          <span className="text-brand-red font-black tracking-[0.3em] uppercase text-xs">Clear Investment</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-navy font-bold">Standardized Pricing</h2>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
          {data.packages.map((pkg, i) => (
            <motion.div 
              key={i}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: i * 0.1}}
              className={cn(
                "rounded-[3rem] p-12 relative flex flex-col items-center transition-all duration-700",
                pkg.recommended 
                  ? "bg-brand-navy text-white shadow-2xl scale-105 z-10 overflow-hidden" 
                  : "bg-white text-brand-navy shadow-xl border border-gray-100"
              )}
            >
              {pkg.recommended && (
                <div className="absolute top-0 right-0 bg-brand-gold text-brand-navy px-8 py-3 rounded-bl-[2rem] font-bold text-[10px] uppercase tracking-widest">
                  Premier Choice
                </div>
              )}
              <h3 className="text-2xl font-serif font-bold mb-6 text-brand-gold uppercase tracking-widest">{pkg.name}</h3>
              <div className="flex items-end gap-2 mb-10">
                <span className="text-5xl font-serif font-black">{pkg.price}</span>
              </div>
              <div className="space-y-5 mb-12 flex-1 w-full border-t border-brand-gold/10 pt-10">
                {pkg.features.map((f, j) => (
                  <div key={j} className="flex items-center justify-center gap-3 text-sm font-medium opacity-80">
                    <CircleCheck className="w-4 h-4 text-brand-gold shrink-0" /> {f}
                  </div>
                ))}
              </div>
              <button 
                onClick={() => openBooking(`${data.title} - ${pkg.name}`)}
                className={cn(
                  "px-10 py-5 rounded-full font-bold text-[11px] uppercase tracking-[0.3em] transition-all w-full shadow-xl",
                  pkg.recommended ? "bg-white text-brand-navy hover:bg-brand-gold" : "bg-brand-navy text-white hover:bg-brand-red"
                )}
              >
                Request Proposal
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-brand-cream/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-24 space-y-4">
            <CircleHelp className="w-12 h-12 md:w-16 md:h-16 text-brand-gold mx-auto opacity-30" />
            <h2 className="text-3xl md:text-5xl font-serif text-brand-navy font-bold">Frequently Asked</h2>
          </div>
          <div className="space-y-4 md:space-y-6">
            {data.faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl md:rounded-[2rem] p-6 md:p-8 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100">
                <summary className="flex items-center justify-between list-none font-bold text-brand-navy text-base md:text-lg pr-2 md:pr-4">
                  {faq.question}
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-gray-200 flex items-center justify-center transition-transform group-open:rotate-180 group-open:bg-brand-navy group-open:text-white">
                    <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 rotate-90" />
                  </div>
                </summary>
                <div className="mt-6 md:mt-8 text-gray-500 text-xs md:text-sm leading-relaxed border-t border-gray-100 pt-6 md:pt-8 animate-in transition-all">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <VerifiedProjects />

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto bg-brand-navy rounded-3xl md:rounded-[4rem] p-10 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-brand-gold/5 blur-3xl rounded-full scale-150"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-8 md:space-y-10">
            <h2 className="text-3xl md:text-7xl font-serif font-bold leading-tight">Elite Support for Premier Properties</h2>
            <p className="text-lg md:text-xl text-white/60">Professional technical rescue at your doorstep. We service all major areas in Dubai.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-4 md:pt-6">
              <button 
                onClick={callNow}
                className="w-full sm:w-auto bg-brand-red text-white px-10 md:px-12 py-4 md:py-5 rounded-full font-bold text-sm md:text-lg hover:bg-white hover:text-brand-navy transition-all shadow-2xl flex items-center justify-center gap-4 uppercase tracking-widest"
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6" /> Call Direct
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
