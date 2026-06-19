import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { useBooking } from './BookingModal';
import { useLocation } from 'react-router-dom';
import { trackWhatsAppConversion } from '../utils/trackConversion';

export const StickyMobileBar = () => {
  const { openBooking, callNow, askExpert } = useBooking();
  const location = useLocation();

  const isAcOrPlumbingPath = 
    location.pathname.includes('ac-') || 
    location.pathname.includes('-ac') || 
    location.pathname.includes('plumbing-') || 
    location.pathname.includes('drain') || 
    location.pathname.includes('leak') ||
    location.pathname.includes('pipe');

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#08264B]/95 backdrop-blur-md border-t border-white/15 px-4 py-2.5 flex items-center justify-between gap-3 shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
      {/* Call CTA */}
      <button 
        onClick={callNow}
        className="flex-1 bg-[#C9153B] text-white py-3 rounded-xl flex items-center justify-center gap-2 font-black text-[10px] uppercase tracking-wider transition-all active:scale-95 shadow-lg shadow-red-900/15 cursor-pointer"
      >
        <Phone className="w-3.5 h-3.5 fill-current" />
        Call 24/7
      </button>

      {/* WhatsApp CTA */}
      <button 
        onClick={() => {
          trackWhatsAppConversion();
          askExpert();
        }}
        className="flex-1 bg-green-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-black text-[10px] uppercase tracking-wider transition-all active:scale-95 shadow-lg shadow-green-900/15 cursor-pointer"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        WhatsApp
      </button>

      {/* Book Inspection/Service CTA */}
      <button 
        onClick={() => openBooking(undefined, isAcOrPlumbingPath)}
        className="flex-1 bg-[#D9A520] text-brand-navy py-3 rounded-xl flex items-center justify-center gap-2 font-black text-[10px] uppercase tracking-wider transition-all active:scale-95 shadow-lg shadow-yellow-900/15 cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5" />
        {isAcOrPlumbingPath ? "Book Now" : "Book Free"}
      </button>
    </div>
  );
};
