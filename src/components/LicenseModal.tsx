import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface LicenseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LicenseModal: React.FC<LicenseModalProps> = ({ isOpen, onClose }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const licenseNumber = '1191464';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            onClick={onClose}
          />
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-[800px] rounded-[30px] shadow-2xl overflow-hidden max-h-[95vh] flex flex-col"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all z-10 text-xl"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="flex-1 overflow-y-auto p-8 md:p-12">
              <div className="text-center mb-10 pb-8 border-b-2 border-dashed border-gray-100">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-gold to-yellow-600 flex items-center justify-center text-brand-navy text-5xl mx-auto mb-6 shadow-xl shadow-brand-gold/40">
                  <i className="fa-solid fa-certificate"></i>
                </div>
                <span className="inline-block bg-brand-navy text-brand-gold px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">OFFICIAL DOCUMENT</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-2">Dubai Commercial License</h2>
                <p className="text-gray-600 font-medium lowercase">HOME RESCUE TECHNICAL SERVICES L.L.C</p>
              </div>

              {/* License Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 p-6 bg-brand-cream/30 rounded-2xl border-l-4 border-brand-gold shadow-sm">
                <div className="space-y-1">
                  <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest">Company Name</span>
                  <span className="block text-sm text-brand-navy font-bold leading-tight">Home Rescue Technical Services L.L.C</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest">License Number</span>
                  <span className="block text-sm text-brand-navy font-bold font-mono">{licenseNumber}</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest">License Type</span>
                  <span className="block text-sm text-brand-navy font-bold">Commercial License</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest">Issuing Authority</span>
                  <span className="block text-sm text-brand-navy font-bold">Dubai Economy & Tourism (DET)</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest">Registered Address</span>
                  <span className="block text-sm text-brand-navy font-bold">Office 205, Al Nahda 1, Dubai, UAE</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest">Expiry Date</span>
                  <span className="block text-sm text-brand-navy font-bold">05/06/2026</span>
                </div>
                <div className="col-span-1 md:col-span-2 pt-2 border-t border-gray-100 mt-2">
                  <div className="flex items-center gap-2 text-green-600 font-bold text-sm">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>Status: Active & Valid</span>
                  </div>
                </div>
              </div>

              {/* Activities Section */}
              <div className="mb-10">
                <h4 className="text-brand-navy font-bold text-sm mb-4 flex items-center gap-2 uppercase tracking-wider">
                  <i className="fa-solid fa-list-check text-brand-gold"></i>
                  Registered Activities
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Air-Conditioning & Ventilations Systems',
                    'Plumbing & Sanitary Installation',
                    'Painting Contracting',
                    'Floor & Wall Tiling Works',
                    'Carpentry & Wood Flooring',
                    'False Ceiling & Light Partitions'
                  ].map((act, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 text-xs font-medium text-gray-700">
                      <div className="w-2 h-2 bg-brand-gold rounded-full shrink-0"></div>
                      {act}
                    </div>
                  ))}
                </div>
              </div>

              {/* License Image Viewer */}
              <div className="mb-10">
                <h4 className="text-brand-navy font-bold text-sm mb-4 flex items-center gap-2 uppercase tracking-wider">
                  <i className="fa-solid fa-image text-brand-gold"></i>
                  Document Preview
                </h4>
                <div 
                  className="relative rounded-2xl overflow-hidden border-4 border-brand-gold bg-gray-100 cursor-zoom-in group aspect-[3/4] max-w-[400px] mx-auto shadow-2xl shadow-brand-gold/20"
                  onClick={() => setIsLightboxOpen(true)}
                >
                  <img 
                    src="https://placehold.co/800x1100/1a3a6b/d4af37?text=HOME+RESCUE\nTechnical+Services\nCommercial+License\n1191464" 
                    alt="Home Rescue Commercial License Dubai"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-navy/60 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <i className="fa-solid fa-magnifying-glass-plus text-4xl mb-2"></i>
                    <span className="font-bold text-sm uppercase tracking-widest">Click to enlarge</span>
                  </div>
                </div>
                <p className="text-center mt-4 text-xs text-gray-500 font-medium">
                  <i className="fa-solid fa-shield-halved text-green-500 mr-2"></i>
                  Verified by Department of Economy & Tourism, Dubai
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-around gap-6 p-6 bg-brand-cream/20 rounded-2xl border border-brand-gold/10 mb-10">
                {[
                  { icon: 'fa-circle-check', label: 'Legally Registered' },
                  { icon: 'fa-shield-halved', label: 'Fully Insured' },
                  { icon: 'fa-award', label: 'Certified Experts' }
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-3 text-brand-navy font-bold text-sm">
                    <i className={`fa-solid ${badge.icon} text-brand-red text-xl`}></i>
                    <span className="uppercase tracking-tight">{badge.label}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="flex-1 bg-brand-navy text-white font-bold py-5 rounded-2xl hover:bg-brand-red transition-all flex items-center justify-center gap-3 shadow-lg group"
                  onClick={() => alert('Download functionality would go here. In a real app, this would be a link to the PDF file.')}
                >
                  <i className="fa-solid fa-download text-xl group-hover:translate-y-0.5 transition-transform"></i>
                  Download License
                </button>
                <button 
                  onClick={onClose}
                  className="flex-1 bg-gray-100 text-gray-600 font-bold py-5 rounded-2xl hover:bg-gray-200 transition-all uppercase tracking-widest"
                >
                  Got It
                </button>
              </div>
            </div>
          </motion.div>

          {/* Lightbox */}
          <AnimatePresence>
            {isLightboxOpen && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[10001] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
                onClick={() => setIsLightboxOpen(false)}
              >
                <button 
                  className="absolute top-10 right-10 w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center text-2xl hover:bg-brand-red transition-all"
                  onClick={() => setIsLightboxOpen(false)}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <motion.img 
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  src="https://placehold.co/800x1100/1a3a6b/d4af37?text=HOME+RESCUE\nTechnical+Services\nCommercial+License\n1191464" 
                  alt="Commercial License Enlarged"
                  className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LicenseModal;
