import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, ChevronRight, Phone, Video, Calendar, ShieldCheck, 
  Star, Headphones, ArrowRight, UserCheck
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import {serviceCategories} from '../data/servicesData';

interface ServicesMegaMenuProps {
  onClose: () => void;
  callNow: () => void;
  openConsultation: () => void;
}

export const ServicesMegaMenu = ({ onClose, callNow, openConsultation }: ServicesMegaMenuProps) => {
  const [activeCategory, setActiveCategory] = React.useState(serviceCategories[0]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="fixed left-1/2 -translate-x-1/2 w-[1400px] max-w-[95vw] bg-white rounded-[24px] shadow-[0_30px_60px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden mt-4"
    >
      <div className="flex h-[620px] will-change-transform">
        {/* Left Sidebar Category Menu */}
        <div className="w-[360px] bg-white border-r border-gray-100 py-6 overflow-y-auto">
          {serviceCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "w-full flex items-center justify-between px-6 py-4 transition-colors relative group outline-none",
                activeCategory.name === category.name 
                  ? "bg-[#EEF6FF] text-brand-navy" 
                  : "text-gray-600 hover:bg-gray-50 hover:text-brand-navy"
              )}
            >
              <div className="flex items-center gap-4">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 shadow-sm transition-all text-white"
                  style={{ backgroundColor: category.color }}
                >
                  <i className={cn(category.icon, "text-sm")}></i>
                </div>
                <span className="font-bold text-[13px] uppercase tracking-wide text-left whitespace-nowrap">{category.name}</span>
              </div>
              <ChevronRight className={cn(
                "w-4 h-4 transition-all duration-300",
                activeCategory.name === category.name ? "text-brand-navy opacity-100 translate-x-0" : "opacity-0 -translate-x-1"
              )} />
              
              {activeCategory.name === category.name && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-navy" />
              )}
            </button>
          ))}
        </div>

        {/* Center Selected Service Detail */}
        <div className="flex-1 p-10 bg-white overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <div className="mb-10 selection:bg-brand-gold/30">
                <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] block mb-2">OUR SERVICES</span>
                <div className="flex flex-wrap items-baseline gap-4 mb-4">
                  <Link to={`/services/${activeCategory.id}`} onClick={onClose} className="hover:text-brand-gold transition-colors">
                    <h2 className="text-4xl font-serif font-bold text-brand-navy hover:text-brand-gold transition-colors">{activeCategory.name}</h2>
                  </Link>
                  <Link 
                    to={`/services/${activeCategory.id}`} 
                    onClick={onClose}
                    className="flex items-center gap-1.5 text-xs text-brand-gold hover:text-brand-red font-black uppercase tracking-wider transition-all hover:gap-2.5"
                  >
                    View Main Page <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="w-16 h-1 bg-[#D9A520] mb-6" />
                <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">{activeCategory.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                {activeCategory.subs.map((sub) => (
                  <Link 
                    key={sub.id} 
                    to={`/services/${sub.id}`}
                    onClick={onClose}
                    className="flex items-start gap-4 group transition-opacity hover:opacity-80"
                  >
                    <div className="shrink-0 p-1">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                        <i className={cn(sub.icon, "text-blue-600 text-sm flex items-center justify-center")}></i>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-brand-navy font-bold text-sm group-hover:text-[#C9153B] transition-colors">{sub.name}</h4>
                      <p className="text-gray-400 text-xs">{sub.desc}</p>
                      <div className="h-[1px] w-full bg-gray-50 group-hover:bg-[#C9153B]/20 transition-colors mt-2" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Promotional CTA Card */}
        <div className="w-[420px] p-8 bg-brand-navy relative overflow-hidden flex flex-col items-center justify-center text-center">
          {/* Subtle Dotted Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none" 
            style={{ 
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '12px 12px'
            }} 
          />
          
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <div className="w-full h-full rounded-2xl overflow-hidden border border-white/5 group shadow-2xl bg-white/2 relative">
              <img 
                src={activeCategory.image} 
                alt={activeCategory.name} 
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Trust Strip */}
      <div className="bg-[#f8fafc] border-t border-gray-100 py-6 px-10 flex justify-between items-center text-brand-navy">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-brand-navy"><Home className="w-4 h-4" /></div>
          <span className="text-[11px] font-bold uppercase tracking-widest opacity-80">Professional Technical Services Across UAE</span>
        </div>
        <div className="h-8 w-[1px] bg-gray-200" />
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-[#D9A520]"><UserCheck className="w-4 h-4" /></div>
          <span className="text-[11px] font-bold uppercase tracking-widest opacity-80">Certified Experts</span>
        </div>
        <div className="h-8 w-[1px] bg-gray-200" />
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-brand-navy"><ShieldCheck className="w-4 h-4" /></div>
          <span className="text-[11px] font-bold uppercase tracking-widest opacity-80">Quality Guaranteed</span>
        </div>
        <div className="h-8 w-[1px] bg-gray-200" />
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-[#C9153B]"><Headphones className="w-4 h-4" /></div>
          <span className="text-[11px] font-bold uppercase tracking-widest opacity-80">24/7 Support</span>
        </div>
      </div>
      
      {/* Decorative pointer */}
      <div className="absolute top-0 left-1/2 -translate-x-[150px] -translate-y-1.5 w-3 h-3 bg-white rotate-45 border-l border-t border-gray-100 shadow-[-5px_-5px_10px_rgba(0,0,0,0.02)]" />
    </motion.div>
  );
};
