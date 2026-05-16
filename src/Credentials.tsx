import React from 'react';
import { TopBar, Navbar, Footer } from './components/Navigation';
import { motion } from 'motion/react';
import { useBooking } from './components/BookingModal';
import { ShieldCheck, Award, FileCheck, CheckCircle, Globe, Building2, MapPin } from 'lucide-react';

const Credentials = () => {
  const { openLicense } = useBooking();

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply"></div>
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
            <div className="w-12 h-1 bg-brand-gold"></div>
            <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-xs">Official Registration</span>
            <div className="w-12 h-1 bg-brand-gold"></div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold"
          >
            Our Credentials
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto font-light"
          >
            Home Rescue is a legally registered and fully licensed Technical Services company operating under the regulations of Dubai Economy & Tourism.
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
                <span className="text-brand-red font-black uppercase tracking-[0.2em] text-xs block">Company Information</span>
                <h2 className="text-4xl font-serif font-bold text-brand-navy">Legal Status & Identification</h2>
                <p className="text-gray-600 leading-relaxed">
                  As part of our commitment to transparency and trust, we maintain all necessary legal permits to provide technical and renovation services in residential and commercial premises across the UAE.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: Building2, label: 'Registered Name', value: 'Home Rescue Technical Services L.L.C' },
                  { icon: Globe, label: 'Legal Form', value: 'Limited Liability Company (LLC)' },
                  { icon: FileCheck, label: 'License Number', value: '1191464' },
                  { icon: Award, label: 'Issuing Authority', value: 'DED Dubai' },
                  { icon: MapPin, label: 'Registered Office', value: 'Al Nahda 1, Dubai, UAE' },
                  { icon: ShieldCheck, label: 'Insurance Status', value: 'Fully Insured' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-brand-cream/30 border border-brand-gold/10">
                    <div className="w-10 h-10 rounded-lg bg-brand-navy flex items-center justify-center text-brand-gold shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">{item.label}</span>
                      <span className="block text-brand-navy font-bold text-sm">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-brand-navy p-8 rounded-[30px] text-white space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy text-2xl font-bold">!</div>
                  <h3 className="text-xl font-serif font-bold leading-tight">Verify Our License</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Customers are encouraged to verify our legal status directly with the Department of Economy & Tourism. We carry valid insurance for every project we undertake.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    onClick={openLicense}
                    className="bg-brand-gold text-brand-navy px-8 py-3 rounded-full font-bold hover:bg-white transition-all text-sm uppercase tracking-widest whitespace-nowrap"
                  >
                    View Official Document
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Certification & Badges */}
            <div className="space-y-12">
              <div className="relative pt-12 pb-8 px-8 bg-brand-cream/20 rounded-[40px] border-2 border-brand-gold/10 overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                 
                 <div className="relative z-10 space-y-8">
                    <div className="text-center space-y-4">
                       <ShieldCheck className="w-16 h-16 text-brand-gold mx-auto" />
                       <h3 className="text-3xl font-serif font-bold text-brand-navy">Quality Assurance</h3>
                       <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
                    </div>

                    <div className="space-y-6">
                       {[
                         { title: 'DED Licensed', desc: 'Officially registered commercial entity under Dubai laws.' },
                         { title: 'Technically Certified', desc: 'Our technicians hold relevant industrial certifications for specialized works.' },
                         { title: 'Quality Audited', desc: 'Internal quality control processes to ensure zero-defect delivery.' },
                         { title: 'Environment Friendly', desc: 'Compliance with local waste disposal and environmental regulations.' }
                       ].map((item, i) => (
                         <div key={i} className="flex items-start gap-4">
                            <div className="mt-1">
                               <CheckCircle className="w-5 h-5 text-brand-green" />
                            </div>
                            <div>
                               <h4 className="font-bold text-brand-navy">{item.title}</h4>
                               <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 {[
                   { label: 'Trusted By', value: '1000+ Villas' },
                   { label: 'Active Projects', value: '50+ Weekly' },
                 ].map((stat, i) => (
                   <div key={i} className="p-8 rounded-3xl border border-gray-100 text-center space-y-2 bg-white shadow-sm">
                      <div className="text-2xl font-bold text-brand-navy">{stat.value}</div>
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
