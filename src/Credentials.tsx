import React from 'react';
import { TopBar, Navbar, Footer } from './components/Navigation';
import { motion } from 'motion/react';
import { useBooking } from './components/BookingModal';
import { ShieldCheck, Award, FileCheck, CircleCheck, Globe, Building2, MapPin, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Credentials = () => {
  const { openLicense } = useBooking();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-brand-navy py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-gray-400 text-[11px] font-bold uppercase tracking-widest">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <ChevronLeft className="w-3 h-3 rotate-180" />
          <span className="text-white">Credentials</span>
        </div>
      </section>

      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-navy/90 mix-blend-multiply"></div>
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Dubai Skyline" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-12 h-[1px] bg-brand-gold"></div>
            <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px]">Official Compliance</span>
            <div className="w-12 h-[1px] bg-brand-gold"></div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold leading-tight"
          >
            Trust & Compliance
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 max-w-3xl mx-auto font-light"
          >
            Home Rescue is a legally registered and fully insured Technical Services entity operating under the regulations of Dubai Economy & Tourism.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Left: License Details */}
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-brand-red font-black uppercase tracking-[0.2em] text-xs block">Corporate Profile</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy">Registration Details</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Integrity is the core of our business. We maintain a valid DED license and comprehensive insurance to ensure your peace of mind and the safety of your property.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: Building2, label: 'Registered Name', value: 'Home Rescue Technical Services L.L.C' },
                  { icon: Globe, label: 'Legal Form', value: 'Limited Liability Company (LLC)' },
                  { icon: FileCheck, label: 'DED License Number', value: '1191464' },
                  { icon: Award, label: 'Issuing Authority', value: 'DED Dubai' },
                  { icon: MapPin, label: 'Main Office', value: 'Al Nahda, Dubai, UAE' },
                  { icon: ShieldCheck, label: 'Professional Liability', value: 'Fully Insured' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 rounded-[2rem] bg-brand-cream/20 border border-brand-gold/5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all hover:shadow-xl hover:bg-white">
                    <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center text-brand-gold shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">{item.label}</span>
                      <span className="block text-brand-navy font-bold text-sm leading-tight">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-brand-navy p-10 rounded-[2.5rem] text-white relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full translate-x-10 -translate-y-10 blur-2xl"></div>
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy shadow-lg">
                       <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold">Verification</h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Our clients are encouraged to verify our legal standing via the Dubai Economy & Tourism portal. We strictly adhere to all technical guidelines provided by Dubai Municipality.
                  </p>
                  <button 
                    onClick={openLicense}
                    className="bg-brand-gold text-brand-navy px-10 py-4 rounded-full font-bold hover:bg-white transition-all text-[11px] uppercase tracking-widest"
                  >
                    View Official License
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Quality Commitment */}
            <div className="space-y-12">
              <div className="relative p-12 bg-brand-cream/10 rounded-[3rem] border-2 border-brand-gold/5 overflow-hidden">
                 <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                 
                 <div className="relative z-10 space-y-10">
                    <div className="text-center space-y-4">
                       <Award className="w-16 h-16 text-brand-gold mx-auto" />
                       <h3 className="text-3xl font-serif font-bold text-brand-navy">Quality Assurance</h3>
                       <div className="w-24 h-[2px] bg-brand-gold mx-auto"></div>
                    </div>

                    <div className="space-y-8">
                       {[
                         { title: 'Registered Entity', desc: 'Officially documented and audited technical services license.' },
                         { title: 'Trained Specialists', desc: 'All technicians undergo mandatory skill verification tests.' },
                         { title: 'Punctuality Focus', desc: 'Tracked response times and scheduled arrival windows.' },
                         { title: 'Clean Work Policy', desc: 'Full protection of floor/furniture during every mission.' }
                       ].map((item, i) => (
                         <div key={i} className="flex items-start gap-5">
                            <div className="mt-1">
                               <CircleCheck className="w-6 h-6 text-brand-red opacity-80" />
                            </div>
                            <div>
                               <h4 className="font-bold text-brand-navy text-lg">{item.title}</h4>
                               <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                 {[
                   { label: 'Trusted By', value: '1000+ Homes' },
                   { label: 'Licensed Since', value: '2014' },
                 ].map((stat, i) => (
                   <div key={i} className="p-10 rounded-[2.5rem] border border-gray-100 text-center space-y-2 bg-white shadow-xl shadow-gray-400/5">
                      <div className="text-4xl font-serif font-bold text-brand-navy">{stat.value}</div>
                      <div className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">{stat.label}</div>
                   </div>
                 ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Credentials;
