import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, MessageCircle, Wrench, Calendar, Phone, Info } from 'lucide-react';
import { trackWhatsAppConversion } from './utils/trackConversion';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 py-16 bg-brand-cream/10">
      <Helmet>
        <title>Page Not Found (404) | Resqhome</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="max-w-2xl w-full text-center space-y-8 bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-gray-100/50 border border-brand-cream/35">
        {/* Animated 404 badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block"
        >
          <span className="text-8xl md:text-9xl font-serif font-black tracking-tighter text-brand-navy selection:bg-brand-gold select-none">
            404
          </span>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-brand-gold rounded-full"></div>
        </motion.div>

        {/* Message and Heading */}
        <div className="space-y-3">
          <h1 className="text-2xl md:text-4xl font-serif font-bold text-brand-navy tracking-tight">
            Page not found
          </h1>
          <p className="text-gray-500 max-w-md mx-auto text-sm md:text-base leading-relaxed">
            The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-navy text-white hover:bg-brand-navy/90 rounded-full font-bold text-sm transition-all duration-300 shadow-lg shadow-brand-navy/20 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <a
            href="https://wa.me/971524524295"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsAppConversion}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-green text-white hover:bg-brand-green/90 rounded-full font-bold text-sm transition-all duration-300 shadow-lg shadow-brand-green/20 hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Divider line */}
        <div className="relative flex py-4 items-center justify-center">
          <div className="flex-grow border-t border-gray-100"></div>
          <span className="flex-shrink mx-4 text-xs font-bold uppercase tracking-widest text-gray-400 select-none">Helpful Links</span>
          <div className="flex-grow border-t border-gray-100"></div>
        </div>

        {/* Helpful links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto">
          <Link
            to="/services"
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-brand-cream/20 hover:bg-brand-cream/40 border border-brand-cream/10 hover:border-brand-gold/30 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
              <Wrench className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-sm text-brand-navy">All Services</p>
              <p className="text-xs text-gray-400">View our premium offerings</p>
            </div>
          </Link>

          <Link
            to="/booking"
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-brand-cream/20 hover:bg-brand-cream/40 border border-brand-cream/10 hover:border-brand-gold/30 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-sm text-brand-navy">Book Free Inspection</p>
              <p className="text-xs text-gray-400">Schedule at your convenience</p>
            </div>
          </Link>

          <Link
            to="/contact"
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-brand-cream/20 hover:bg-brand-cream/40 border border-brand-cream/10 hover:border-brand-gold/30 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-sm text-brand-navy">Contact Us</p>
              <p className="text-xs text-gray-400">Get in touch with our team</p>
            </div>
          </Link>

          <Link
            to="/about"
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-brand-cream/20 hover:bg-brand-cream/40 border border-brand-cream/10 hover:border-brand-gold/30 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
              <Info className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-sm text-brand-navy">About Us</p>
              <p className="text-xs text-gray-400">Learn more about Resqhome</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
