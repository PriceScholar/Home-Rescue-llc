import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { useBooking } from './BookingModal';
import { useLocation } from 'react-router-dom';
import { trackWhatsAppConversion, trackPhoneConversion } from '../utils/trackConversion';

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
      <a 
        href="tel:+971524524295"
        onClick={() => trackPhoneConversion('Call 24/7 - Sticky Mobile Bar')}
        data-gtm-label="Call 24/7 Mobile"
        className="flex-1 bg-[#C9153B] text-white py-3 rounded-xl flex items-center justify-center gap-2 font-black text-[10px] uppercase tracking-wider transition-all active:scale-95 shadow-lg shadow-red-900/15 cursor-pointer text-center"
      >
        <Phone className="w-3.5 h-3.5 fill-current" />
        Call 24/7
      </a>

      {/* WhatsApp CTA */}
      <a 
        href="https://wa.me/971524524295?text=Hi%20Home%20Rescue!%20%F0%9F%91%8B%0A%0AI'm%20interested%20in%20your%20services.%20Please%20contact%20me%20to%20discuss%20my%20needs.%0A%0AThank%20you!"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppConversion('WhatsApp - Sticky Mobile Bar')}
        data-gtm-label="WhatsApp Mobile"
        className="flex-1 bg-green-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-black text-[10px] uppercase tracking-wider transition-all active:scale-95 shadow-lg shadow-green-900/15 cursor-pointer text-center"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        WhatsApp
      </a>

      {/* Book Inspection/Service CTA */}
      <button 
        onClick={() => openBooking(undefined, isAcOrPlumbingPath)}
        data-gtm-label={isAcOrPlumbingPath ? "Book Now Mobile" : "Book Free Mobile"}
        className="flex-1 bg-[#D9A520] text-brand-navy py-3 rounded-xl flex items-center justify-center gap-2 font-black text-[10px] uppercase tracking-wider transition-all active:scale-95 shadow-lg shadow-yellow-900/15 cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5" />
        {isAcOrPlumbingPath ? "Book Now" : "Book Free"}
      </button>
    </div>
  );
};
