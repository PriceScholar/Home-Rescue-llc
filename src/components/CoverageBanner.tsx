import React from 'react';
import { MapPin } from 'lucide-react';

const CoverageBanner: React.FC = () => {
  const locations = [
    'Radisson Blu Hotel', 
    'Dubai Internet City', 
    'M Gallery Hotel', 
    'Palm Jumeirah', 
    'Park Inn Hotel', 
    'Motor City', 
    'Ramada Hotel', 
    'Downtown Dubai', 
    'Emaar Properties'
  ];

  return (
    <div className="bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy text-white py-2.5 overflow-hidden border-b-2 border-brand-gold relative z-[60]">
      <div className="flex whitespace-nowrap animate-marquee items-center gap-12">
        <div className="flex items-center gap-12 shrink-0">
          <div className="flex items-center gap-2 text-brand-gold font-black uppercase tracking-wider text-[10px]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Serving Dubai's Premium Locations:</span>
          </div>
          {locations.map((loc, i) => (
            <span key={i} className="text-xs font-bold text-white/90">• {loc}</span>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex items-center gap-12 shrink-0">
          <div className="flex items-center gap-2 text-brand-gold font-black uppercase tracking-wider text-[10px]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Serving Dubai's Premium Locations:</span>
          </div>
          {locations.map((loc, i) => (
            <span key={`dup-${i}`} className="text-xs font-bold text-white/90">• {loc}</span>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CoverageBanner;
