import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, MapPin, CircleCheck, X, ExternalLink } from 'lucide-react';

const VerifiedProjects = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const projects = [
    {
      hotel: "PARK INN by RADISSON",
      location: "Dubai Motor City",
      project: "Hotel bathroom renovation project",
      services: ["Guest Room Washroom", "Grouting", "Washbasin", "Shower Area"],
      image: "/park-inn-po.jpg",
      id: "park-inn"
    },
    {
      hotel: "M GALLERY by SOFITEL",
      location: "Palm Jumeirah",
      project: "Grouting work project",
      services: ["Tile Grouting", "Removal & New Grout", "Luxury Refurbishment"],
      image: "/m-gallery-po.jpg",
      id: "m-gallery"
    }
  ];

  return (
    <section className="py-24 bg-white px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-2"
          >
            <div className="w-12 h-px bg-brand-gold"></div>
            <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-xs">Official Proof</span>
            <div className="w-12 h-px bg-brand-gold"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-brand-navy"
          >
            Verified Corporate Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            Official Purchase Orders from Dubai's most prestigious hotels confirming our premium service quality and reliability.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -10 }}
              className="bg-brand-cream/30 rounded-3xl md:rounded-[40px] border-2 border-brand-gold/10 overflow-hidden shadow-xl flex flex-col"
            >
              <div 
                className="relative h-[300px] md:h-[450px] overflow-hidden group cursor-zoom-in" 
                onClick={() => setSelectedImg(proj.image)}
              >
                <img 
                  src={proj.image} 
                  alt={proj.hotel} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = `https://placehold.co/800x1200/1a3a6b/d4af37?text=${encodeURIComponent(proj.hotel)}+PO`;
                  }}
                />
                <div className="absolute top-6 left-6 bg-brand-green text-white px-4 py-2 rounded-full text-[10px] font-bold tracking-widest flex items-center gap-2 shadow-lg z-10">
                  <CircleCheck className="w-4 h-4" /> VERIFIED
                </div>
                <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm z-20">
                  <div className="bg-white/10 p-4 rounded-full border border-white/20">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-brand-navy/80 backdrop-blur-md text-brand-gold px-3 py-1.5 rounded-lg text-[10px] font-bold z-10 border border-brand-gold/30">
                  CLICK TO VIEW FULL DOCUMENT
                </div>
              </div>

              <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-bold text-brand-navy leading-tight">{proj.hotel}</h3>
                    <p className="flex items-center gap-2 text-brand-red font-bold text-sm">
                      <MapPin className="w-4 h-4" /> {proj.location}
                    </p>
                  </div>
                  <div className="p-4 bg-white/50 rounded-2xl border border-brand-gold/10 italic text-gray-600 text-sm">
                    "{proj.project}"
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {proj.services.map((s, j) => (
                      <span key={j} className="bg-brand-navy/5 text-brand-navy px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-brand-navy p-10 rounded-[30px] border border-brand-gold/20 relative overflow-hidden text-center md:text-left">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <ShieldCheck className="w-8 h-8 text-brand-gold" />
                <h4 className="text-white text-xl font-serif font-bold">Document Authentication</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                * Authentic documents shown above for verification purposes. Sensitive corporate details like bank account numbers and official signatures have been redacted for confidentiality and data protection. Every project we undertake is backed by official legal documentation.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <button className="bg-brand-gold text-brand-navy px-10 py-5 rounded-full font-bold text-sm tracking-widest hover:bg-white transition-all shadow-xl shadow-brand-gold/20 whitespace-nowrap">
                MORE PROVED PROJECTS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-navy/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-pointer"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-brand-gold transition-colors z-[110]"
              onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImg} 
                alt="Project PO Full View" 
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-black/50 border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VerifiedProjects;
