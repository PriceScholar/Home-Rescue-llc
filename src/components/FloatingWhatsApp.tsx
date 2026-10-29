import React from 'react';
import { motion } from 'motion/react';
import { trackWhatsAppConversion } from '../utils/trackConversion';

const FloatingWhatsApp: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/971524524295?text=Hi%20Home%20Rescue!%20%F0%9F%91%8B%0A%0AI'm%20interested%20in%20your%20services.%20Please%20contact%20me%20to%20discuss%20my%20needs.%0A%0AThank%20you!"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppConversion('Floating WhatsApp')}
      data-gtm-label="Floating WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 md:bottom-8 left-6 md:left-auto md:right-28 z-[9996] w-14 h-14 md:w-16 md:h-16 bg-[#25d366] text-white rounded-full hidden md:flex items-center justify-center text-2xl md:text-3xl shadow-2xl hover:shadow-[#25d366]/40 transition-shadow"
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white/20"></span>
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
