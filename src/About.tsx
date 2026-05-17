import React from 'react';
import {TopBar, Navbar, Footer} from './components/Navigation';
import {motion} from 'motion/react';
import {CircleCheck, Clock, MapPin, Award, Users, Star, ChevronLeft, ShieldCheck} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from './lib/utils';
import VerifiedProjects from './components/VerifiedProjects';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBar />
      <Navbar />

      {/* Hero Section with Parallax feel */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop" 
            alt="Technical excellence" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center space-y-4 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-2"
          >
            <div className="w-12 h-[1px] bg-brand-gold"></div>
            <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px]">Since 2014</span>
            <div className="w-12 h-[1px] bg-brand-gold"></div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white"
          >
            Our Story
          </motion.h1>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="bg-brand-cream/30 py-4 px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-gray-400 text-[11px] font-bold uppercase tracking-widest">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <ChevronLeft className="w-3 h-3 rotate-180" />
          <span className="text-brand-navy">About Us</span>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <motion.div 
             initial={{opacity: 0, x: -30}} 
             whileInView={{opacity: 1, x: 0}} 
             viewport={{once: true}} 
             className="relative"
           >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2080&auto=format&fit=crop" 
                  alt="Our Craftsmanship" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -z-0"></div>
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-48 h-48 bg-brand-navy rounded-[2rem] p-8 flex flex-col justify-center border-4 border-white shadow-xl z-20">
                <span className="text-brand-gold text-4xl font-serif font-bold block">10+</span>
                <span className="text-white text-[10px] font-bold uppercase tracking-wider leading-tight">Years of UAE Experience</span>
              </div>
           </motion.div>

           <div className="space-y-10">
             <motion.div 
               initial={{opacity: 0, y: 20}} 
               whileInView={{opacity: 1, y: 0}} 
               viewport={{once: true}}
               className="space-y-6"
             >
               <span className="text-brand-red font-black tracking-[0.3em] uppercase text-xs">A Legacy of Quality</span>
               <h2 className="text-4xl md:text-6xl text-brand-navy font-serif leading-tight font-bold">Rescuing Homes with Precision.</h2>
               <p className="text-gray-600 text-lg leading-relaxed">
                 Home Rescue Technical Services was founded in Dubai with a single mission: to provide the highest quality technical repairs, maintenance, and renovations that the city's premium properties deserve.
               </p>
               <p className="text-gray-500 text-sm leading-relaxed">
                 From humble beginnings in Al Nahda to servicing the most prestigious villas in Palm Jumeirah and Emirates Hills, our journey has been defined by one thing: <strong>Unwavering Quality.</strong>
               </p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                 <div className="flex items-start gap-4">
                   <div className="bg-brand-cream p-4 rounded-2xl text-brand-gold shadow-sm border border-brand-gold/10">
                     <Award className="w-6 h-6" />
                   </div>
                   <div className="space-y-1">
                     <h3 className="font-bold text-brand-navy">Elite Technicians</h3>
                     <p className="text-xs text-gray-500">Every team member is rigorously trained and certified.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="bg-brand-cream p-4 rounded-2xl text-brand-gold shadow-sm border border-brand-gold/10">
                     <ShieldCheck className="w-6 h-6" />
                   </div>
                   <div className="space-y-1">
                     <h3 className="font-bold text-brand-navy">Safe & Insured</h3>
                     <p className="text-xs text-gray-500">Your property is covered by our comprehensive insurance.</p>
                   </div>
                 </div>
               </div>
             </motion.div>
           </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
           {[
             {val: '10+', label: 'Years Experience', icon: Clock},
             {val: '5000+', label: 'Projects Done', icon: CircleCheck},
             {val: '1200+', label: 'Active Clients', icon: Users},
             {val: '4.9/5', label: 'Average Rating', icon: Star}
           ].map((stat, i) => (
             <motion.div 
              key={i}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: i * 0.1}}
              className="text-center space-y-4"
             >
               <stat.icon className="w-12 h-12 text-brand-gold mx-auto" />
               <div>
                <div className="text-5xl font-serif font-bold text-white mb-1">{stat.val}</div>
                <div className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.2em]">{stat.label}</div>
               </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-4 md:px-8 bg-brand-cream/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <span className="text-brand-gold font-bold tracking-[0.4em] uppercase text-[10px]">What We Stand For</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-navy font-bold leading-tight">Our Core Philosophies</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               {
                 title: 'Excellence in Action', 
                 desc: 'We never settle for "good enough". Whether it is a single tile or a complete villa renovation, we aim for measurable perfection.', 
                 icon: 'fa-solid fa-gem'
               },
               {
                 title: 'Punctual Reliability', 
                 desc: 'Time is the ultimate luxury. We respect yours by arriving on schedule with everything needed to complete the task.', 
                 icon: 'fa-solid fa-clock'
               },
               {
                 title: 'Total Transparency', 
                 desc: 'Precision starts with the quote. No surprises, no hidden fees—just honest expert advice and fair pricing.', 
                 icon: 'fa-solid fa-handshake-angle'
               }
             ].map((v, i) => (
               <motion.div 
                 key={i} 
                 initial={{opacity: 0, y: 20}}
                 whileInView={{opacity: 1, y: 0}}
                 viewport={{once: true}}
                 transition={{delay: i * 0.1}}
                 className="bg-white p-12 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-gray-100 relative group overflow-hidden"
               >
                 <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cream/50 rounded-bl-[4rem] flex items-center justify-center transition-all duration-500 group-hover:bg-brand-navy group-hover:text-white group-hover:w-full group-hover:h-full group-hover:rounded-none z-0">
                    <i className={cn(v.icon, "text-2xl text-brand-gold transition-colors group-hover:text-white")}></i>
                 </div>
                 <div className="relative z-10 space-y-6">
                    <h3 className="text-2xl font-serif text-brand-navy font-bold pt-8 group-hover:text-white transition-colors">{v.title}</h3>
                    <p className="text-gray-500 leading-relaxed group-hover:text-white/80 transition-colors">{v.desc}</p>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <VerifiedProjects />

      {/* CTA section for About Page */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto rounded-[3rem] bg-brand-navy p-12 text-center text-white space-y-8 relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-brand-gold/5 -skew-y-12 translate-y-20"></div>
           <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-6xl font-serif font-bold">Ready to Experience the Difference?</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">Join thousands of happy homeowners who trust Home Rescue for their premium maintenance needs.</p>
              <div className="flex flex-wrap justify-center gap-4 pt-6">
                 <Link to="/contact" className="bg-brand-red text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-brand-red/20 uppercase tracking-widest">
                    Start Your Project
                 </Link>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
