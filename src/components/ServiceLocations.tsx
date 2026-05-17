import React from 'react';
import { motion } from 'motion/react';
import { useBooking } from './BookingModal';
import { Hotel, Umbrella, Car, Building, Building2, ShieldCheck, CalendarCheck, MapPin, ChevronRight, CircleCheck } from 'lucide-react';

const ServiceLocations: React.FC = () => {
  const { openBooking, askExpert } = useBooking();

  const locations = [
    {
      id: 1,
      name: 'Radisson Blu Hotel',
      type: '5-STAR HOTEL',
      area: 'Dubai',
      icon: <Hotel className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop',
      delay: 0.1
    },
    {
      id: 2,
      name: 'Internet City',
      type: 'BUSINESS DISTRICT',
      area: 'Dubai',
      icon: <Building2 className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1582553081945-c20a7b85fee5?w=800&h=600&fit=crop',
      delay: 0.2
    },
    {
      id: 3,
      name: 'M Gallery Hotel',
      type: 'LUXURY HOTEL',
      area: 'Palm Jumeirah',
      icon: <Hotel className="w-6 h-6" />,
      image: '/work-site.jpg',
      delay: 0.3
    },
    {
      id: 4,
      name: 'Palm Jumeirah',
      type: 'PREMIUM LOCATION',
      area: 'Dubai',
      icon: <Umbrella className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&h=600&fit=crop',
      featured: '⭐ ICONIC',
      delay: 0.4
    },
    {
      id: 5,
      name: 'Park Inn Hotel',
      type: 'INTERNATIONAL HOTEL',
      area: 'Dubai',
      icon: <Hotel className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      delay: 0.5
    },
    {
      id: 6,
      name: 'Motor City',
      type: 'RESIDENTIAL COMMUNITY',
      area: 'Dubai',
      icon: <Car className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&h=400&fit=crop',
      delay: 0.1
    },
    {
      id: 7,
      name: 'Ramada Hotel',
      type: 'INTERNATIONAL HOTEL',
      area: 'Dubai',
      icon: <Hotel className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop',
      delay: 0.2
    },
    {
      id: 8,
      name: 'Downtown Dubai',
      type: 'PRIME LOCATION',
      area: 'Burj Khalifa Area',
      icon: <Building className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop',
      featured: '⭐ PRIME',
      delay: 0.3
    },
    {
      id: 9,
      name: 'Emaar Properties',
      type: 'PREMIUM DEVELOPER',
      area: 'Dubai',
      icon: <Building2 className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&h=400&fit=crop',
      featured: '⭐ PREMIUM',
      delay: 0.4
    }
  ];

  const counters = [
    { number: '9+', label: 'Premium Locations' },
    { number: '500+', label: 'Projects Completed' },
    { number: '7', label: 'Emirates Covered' },
    { number: '10+', label: 'Years Experience' }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-white to-brand-cream/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-to-r from-brand-gold to-yellow-600 text-brand-navy px-6 py-2 rounded-full text-xs font-bold tracking-[0.2em] shadow-lg shadow-brand-gold/20"
          >
            📍 OUR COVERAGE
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-brand-navy"
          >
            Premium Locations We Serve
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg"
          >
            Trusted across Dubai's most prestigious addresses
          </motion.p>
        </div>

        {/* Animated Counter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-navy p-8 rounded-[30px] shadow-2xl shadow-brand-navy/20 flex flex-wrap items-center justify-around gap-8 mb-20 border border-brand-gold/10"
        >
          {counters.map((counter, i) => (
            <React.Fragment key={i}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-brand-gold leading-none mb-2">{counter.number}</div>
                <div className="text-[10px] text-white/70 uppercase tracking-widest">{counter.label}</div>
              </div>
              {i < counters.length - 1 && <div className="hidden lg:block w-px h-12 bg-brand-gold/20"></div>}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {locations.map((loc) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: loc.delay }}
              whileHover={{ y: -10 }}
              className={`group bg-white rounded-3xl overflow-hidden shadow-xl border-2 transition-all relative ${loc.featured ? 'border-brand-gold/30' : 'border-transparent hover:border-brand-gold'}`}
            >
              {/* Image Area */}
              <div className="relative h-[220px] overflow-hidden">
                <img 
                  src={loc.image} 
                  alt={loc.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    if (loc.name === 'Internet City') {
                      target.src = 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop';
                    } else if (loc.name === 'Palm Jumeirah') {
                      target.src = 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&h=600&fit=crop';
                    } else {
                      target.src = `https://placehold.co/800x600/1a3a6b/d4af37?text=${encodeURIComponent(loc.name)}`;
                    }
                  }}
                />
                <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-brand-navy/90 backdrop-blur-md border border-brand-gold text-brand-gold flex items-center justify-center font-serif text-lg font-bold">
                  {String(loc.id).padStart(2, '0')}
                </div>
                {loc.featured && (
                  <div className="absolute top-4 right-4 bg-brand-gold text-brand-navy px-3 py-1 rounded-full text-[10px] font-bold tracking-wider shadow-lg shadow-brand-gold/30">
                    {loc.featured}
                  </div>
                )}
                <div className="absolute -bottom-5 right-6 w-12 h-12 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center shadow-lg transition-all group-hover:rotate-[360deg] duration-500 z-10 border-2 border-white">
                  {loc.icon}
                </div>
              </div>

              {/* Info Area */}
              <div className="p-8 pt-10">
                <span className="inline-block bg-brand-red/10 text-brand-red px-3 py-1 rounded-full text-[10px] font-bold tracking-widest mb-3 uppercase">
                  {loc.type}
                </span>
                <h3 className="text-2xl font-serif font-bold text-brand-navy mb-2 group-hover:text-brand-red transition-colors">
                  {loc.name}
                </h3>
                <p className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <MapPin className="w-4 h-4 text-brand-red" />
                  {loc.area}
                </p>
                <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-brand-green font-bold text-xs uppercase tracking-wider">
                  <CircleCheck className="w-4 h-4" />
                  Service Completed
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Statement */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-8 bg-brand-cream/30 p-8 md:p-10 rounded-[30px] border-l-8 border-brand-gold shadow-lg mb-16 max-w-4xl mx-auto"
        >
          <div className="w-20 h-20 rounded-full bg-brand-navy flex items-center justify-center text-brand-gold text-4xl shrink-0 shadow-xl shadow-brand-navy/20">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-2xl font-serif font-bold text-brand-navy">Quality You Can Trust</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              The same premium service we provide to Dubai's most prestigious hotels and developments — now available for your home or business. Every project gets our 5-star treatment.
            </p>
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-navy rounded-[30px] p-8 md:p-14 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-navy/30"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10 space-y-6">
            <h3 className="text-3xl md:text-4xl font-serif font-bold">Ready to Experience Premium Service?</h3>
            <p className="text-white/80 max-w-2xl mx-auto">Join hundreds of satisfied clients across Dubai's top communities and landmarks.</p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button 
                onClick={() => openBooking()}
                className="bg-brand-red text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl shadow-brand-red/30 flex items-center gap-2"
              >
                <CalendarCheck className="w-5 h-5" /> Book Free Consultation
              </button>
              <button 
                onClick={() => askExpert()}
                className="bg-brand-green text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl shadow-brand-green/30 flex items-center gap-2"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i> Chat on WhatsApp
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceLocations;
