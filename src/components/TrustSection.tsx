import React from 'react';
import { motion } from 'motion/react';
import { useBooking } from './BookingModal';

const TrustSection: React.FC = () => {
  const { openLicense } = useBooking();

  const credentials = [
    {
      id: 'license',
      icon: 'fa-certificate',
      label: 'DUBAI LICENSED',
      title: 'Commercial License',
      desc: 'Officially registered with Dubai Economy & Tourism (DET)',
      highlighted: true,
      badge: 'VERIFIED',
      link: 'View License →'
    },
    {
      id: 'insurance',
      icon: 'fa-shield-halved',
      label: 'FULLY INSURED',
      title: 'Liability Coverage',
      desc: 'Comprehensive insurance for all residential & commercial services'
    },
    {
      id: 'experience',
      icon: 'fa-award',
      label: '10+ YEARS',
      title: 'Industry Experts',
      desc: 'Deep technical knowledge trusted by 1000+ customers in UAE'
    },
    {
      id: 'quality',
      icon: 'fa-medal',
      label: 'CERTIFIED',
      title: 'Quality Standards',
      desc: 'ISO certified processes ensuring premium results every time'
    }
  ];

  return (
    <section id="trust-credentials" className="py-24 bg-gradient-to-br from-brand-cream/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-brand-gold text-brand-navy px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]"
          >
            VERIFIED & TRUSTED
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-brand-navy"
          >
            Why Trust Home Rescue?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            We are more than just a maintenance company. We are a legally registered, fully insured, and highly experienced technical services partner.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred, i) => (
            <motion.div
              key={cred.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={cred.id === 'license' ? openLicense : undefined}
              className={`
                relative p-8 rounded-[30px] border-2 transition-all cursor-pointer overflow-hidden
                ${cred.highlighted 
                  ? 'bg-brand-navy text-white border-brand-gold shadow-xl shadow-brand-navy/20' 
                  : 'bg-white text-brand-navy border-gray-100 hover:border-brand-gold'}
              `}
            >
              {cred.badge && (
                <div className="absolute top-6 right-6 bg-brand-green text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider z-10 shadow-lg">
                  {cred.badge}
                </div>
              )}

              <div className={`
                w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6 shadow-lg
                ${cred.highlighted ? 'bg-white text-brand-navy shadow-brand-gold/20' : 'bg-brand-cream/50 text-brand-gold'}
              `}>
                <i className={`fa-solid ${cred.icon}`}></i>
              </div>

              <div className="space-y-3 relative z-10">
                <span className={`
                  inline-block px-3 py-1 rounded-lg text-[10px] font-bold tracking-widest
                  ${cred.highlighted ? 'bg-white/10 text-brand-gold' : 'bg-brand-cream text-brand-gold'}
                `}>
                  {cred.label}
                </span>
                <h3 className={`text-xl font-serif font-bold ${cred.highlighted ? 'text-white' : 'text-brand-navy'}`}>
                  {cred.title}
                </h3>
                <p className={`text-sm leading-relaxed ${cred.highlighted ? 'text-white/70' : 'text-gray-500'}`}>
                  {cred.desc}
                </p>
                {cred.link && (
                  <span className="block mt-4 text-brand-gold font-bold text-sm group-hover:translate-x-1 transition-transform">
                    {cred.link}
                  </span>
                )}
              </div>

              {cred.highlighted && (
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
