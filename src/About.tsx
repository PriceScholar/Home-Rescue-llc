import React from 'react';
import {TopBar, Navbar, Footer} from './components/Navigation';
import {motion} from 'motion/react';
import {CheckCircle2, Clock, MapPin, Award, Users, Star, ChevronLeft, ShieldCheck} from 'lucide-react';
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />

      <section className="bg-brand-navy py-12 px-4 md:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-gray-400 text-sm">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <ChevronLeft className="w-3 h-3 rotate-180" />
          <span className="text-white">About Us</span>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <motion.div initial={{opacity: 0, x: -30}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} className="relative">
              <img 
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=2080&auto=format&fit=crop" 
                alt="Our Team" 
                className="rounded-[40px] shadow-2xl relative z-10"
              />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-navy/10 rounded-full blur-3xl"></div>
           </motion.div>

           <div className="space-y-8">
             <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}}>
               <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-sm">Our Legacy</span>
               <h1 className="text-4xl md:text-6xl text-brand-navy font-serif mt-4 mb-6 leading-tight font-bold">Trusted Name in Dubai Home Solutions</h1>
               <p className="text-gray-600 text-lg leading-relaxed mb-6">
                 Home Rescue Technical Services was founded with a single mission: to provide the highest quality technical services with transparency and reliability that Dubai's premium properties deserve.
               </p>
               <div className="grid grid-cols-2 gap-6 pt-4">
                 <div className="flex items-start gap-3">
                   <div className="bg-brand-cream p-3 rounded-xl text-brand-gold">
                     <Award className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="font-bold text-brand-navy">Top Rated</h3>
                     <p className="text-xs text-gray-500">Highest rated technician network in Al Nahda.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-3">
                   <div className="bg-brand-cream p-3 rounded-xl text-brand-gold">
                     <ShieldCheck className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="font-bold text-brand-navy">Fully Insured</h3>
                     <p className="text-xs text-gray-500">Every project is covered by our service insurance.</p>
                   </div>
                 </div>
               </div>
             </motion.div>
           </div>
        </div>
      </section>

      <section className="py-24 bg-brand-navy text-white px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
           {[
             {val: '10+', label: 'Years Experience', icon: Clock},
             {val: '1000+', label: 'Projects Done', icon: CheckCircle2},
             {val: '500+', label: 'Happy Clients', icon: Users},
             {val: '4.9/5', label: 'Average Rating', icon: Star}
           ].map((stat, i) => (
             <motion.div 
              key={i}
              initial={{opacity: 0, scale: 0.9}}
              whileInView={{opacity: 1, scale: 1}}
              viewport={{once: true}}
              transition={{delay: i * 0.1}}
              className="text-center space-y-3"
             >
               <stat.icon className="w-10 h-10 text-brand-gold mx-auto" />
               <div className="text-4xl font-serif font-bold">{stat.val}</div>
               <div className="text-gray-400 text-sm tracking-widest uppercase">{stat.label}</div>
             </motion.div>
           ))}
        </div>
      </section>

      <section className="py-24 px-4 bg-brand-cream">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-serif text-brand-navy mb-4">Our Core Values</h2>
          <p className="text-gray-500">The principles that guide every rescue mission we undertake.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             {title: 'Excellence', desc: 'We never settle for "good enough". We aim for perfection in every tile, setiap stroke of paint, and every wiring fix.'},
             {title: 'Reliability', desc: 'When we say we will be there at 9 AM, we ensure our technicians arrive with all the right tools on time.'},
             {title: 'Transparency', desc: 'No hidden costs. Detailed quotations. We explain exactly what your home needs and why.'}
           ].map((v, i) => (
             <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 group hover:bg-brand-navy transition-all duration-300">
               <h3 className="text-2xl font-serif text-brand-navy mb-4 group-hover:text-white transition-colors">{v.title}</h3>
               <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">{v.desc}</p>
             </div>
           ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
