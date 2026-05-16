import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TopBar, Navbar, Footer } from './components/Navigation';
import { useBooking } from './components/BookingModal';
import { 
  Hotel, 
  MapPin, 
  Layout, 
  Building2, 
  Eye, 
  Star, 
  ShieldCheck, 
  Award, 
  CalendarCheck,
  CheckCircle2,
  Trophy,
  History
} from 'lucide-react';

interface Project {
  id: string;
  number: string;
  name: string;
  category: 'hotels' | 'locations' | 'developers';
  type: string;
  area: string;
  services: string[];
  image: string;
  featured?: string;
  featuredColor?: string;
  large?: boolean;
}

const projects: Project[] = [
  {
    id: 'radisson',
    number: '01',
    name: 'Radisson Blu Hotel',
    category: 'hotels',
    type: '5-STAR HOTEL',
    area: 'Dubai',
    services: ['AC', 'Plumbing', 'Maintenance'],
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop'
  },
  {
    id: 'internetcity',
    number: '02',
    name: 'Internet City',
    category: 'locations',
    type: 'BUSINESS DISTRICT',
    area: 'Dubai',
    services: ['Electrical', 'AC', 'Office Maintenance'],
    image: 'https://images.unsplash.com/photo-1582553081945-c20a7b85fee5?w=800&h=600&fit=crop'
  },
  {
    id: 'mgallery',
    number: '03',
    name: 'M Gallery Hotel',
    category: 'hotels',
    type: 'LUXURY HOTEL',
    area: 'Dubai',
    services: ['Renovation', 'Paint', 'Tile Work'],
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop'
  },
  {
    id: 'palm',
    number: '04',
    name: 'Palm Jumeirah',
    category: 'locations',
    type: 'PREMIUM LOCATION',
    area: 'Dubai',
    services: ['Luxury Villas', 'Premium Service', 'Complete Maintenance'],
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&h=600&fit=crop',
    featured: '⭐ ICONIC'
  },
  {
    id: 'parkinn',
    number: '05',
    name: 'Park Inn Hotel',
    category: 'hotels',
    type: 'INTERNATIONAL HOTEL',
    area: 'Dubai',
    services: ['AC', 'Electrical', 'Maintenance'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'
  },
  {
    id: 'motorcity',
    number: '06',
    name: 'Motor City',
    category: 'locations',
    type: 'RESIDENTIAL COMMUNITY',
    area: 'Dubai',
    services: ['Villas', 'Apartments', 'All Services'],
    image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&h=600&fit=crop'
  },
  {
    id: 'ramada',
    number: '07',
    name: 'Ramada Hotel',
    category: 'hotels',
    type: 'INTERNATIONAL HOTEL',
    area: 'Dubai',
    services: ['Plumbing', 'Paint', 'Tile Work'],
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop'
  },
  {
    id: 'downtown',
    number: '08',
    name: 'Downtown Dubai',
    category: 'locations',
    type: 'PRIME LOCATION',
    area: 'Burj Khalifa Area',
    services: ['Luxury', 'Premium', 'Complete Service'],
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop',
    featured: '⭐ PRIME'
  },
  {
    id: 'emaar',
    number: '09',
    name: 'Emaar Properties',
    category: 'developers',
    type: 'PREMIUM DEVELOPER',
    area: 'Dubai - Multiple Projects',
    services: ['Complete Maintenance', 'All Services', 'Long-term Partnership'],
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&h=600&fit=crop',
    featured: '⭐ FLAGSHIP',
    featuredColor: 'gold',
    large: true
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState<'all' | 'hotels' | 'locations' | 'developers'>('all');
  const { openBooking, askExpert } = useBooking();

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const openProjectDetail = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    const message = `Hi Home Rescue! I want services similar to what you provided at *${project?.name}*. Please contact me with details.`;
    window.open(`https://wa.me/971524524295?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />

      <section className="py-24 bg-gradient-to-b from-[#faf8f3] to-white min-h-screen px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-6">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-brand-gold text-brand-navy px-6 py-2 rounded-full text-xs font-bold tracking-[0.2em] shadow-lg shadow-brand-gold/20"
            >
              OUR WORK
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif font-bold text-brand-navy"
            >
              Premium Portfolio
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Showcasing our trusted partnerships with Dubai's leading hotels and prestigious developments.
            </motion.p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {[
              { id: 'all', label: 'All Projects', icon: <Layout className="w-4 h-4" />, count: 9 },
              { id: 'hotels', label: 'Hotels', icon: <Hotel className="w-4 h-4" />, count: 4 },
              { id: 'locations', label: 'Premium Locations', icon: <MapPin className="w-4 h-4" />, count: 4 },
              { id: 'developers', label: 'Developers', icon: <Building2 className="w-4 h-4" />, count: 1 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`
                  flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold transition-all duration-300 border-2
                  ${filter === tab.id 
                    ? 'bg-brand-navy text-white border-brand-navy shadow-xl shadow-brand-navy/20 scale-105' 
                    : 'bg-white text-gray-500 border-gray-100 hover:border-brand-gold hover:text-brand-navy hover:-translate-y-0.5'}
                `}
              >
                {tab.icon}
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  className={`
                    group bg-white rounded-[30px] overflow-hidden shadow-xl border-2 transition-all relative
                    ${project.featured ? 'border-brand-gold/30' : 'border-transparent'}
                    ${project.large ? 'lg:col-span-3' : ''}
                  `}
                >
                  {project.featured && (
                    <div className={`
                      absolute top-5 left-0 px-5 py-2 rounded-r-xl text-[10px] font-bold tracking-widest z-20 shadow-lg
                      ${project.featuredColor === 'gold' ? 'bg-brand-gold text-brand-navy' : 'bg-brand-red text-white'}
                    `}>
                      {project.featured}
                    </div>
                  )}

                  <div className={`relative ${project.large ? 'h-[400px]' : 'h-[250px]'} overflow-hidden bg-gray-100`}>
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = `https://placehold.co/1200x800/1a3a6b/d4af37?text=${encodeURIComponent(project.name)}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-brand-navy/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                      <button 
                        onClick={() => openProjectDetail(project.id)}
                        className="bg-brand-gold text-brand-navy px-8 py-3.5 rounded-full font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-xl"
                      >
                        <Eye className="w-5 h-5" /> View Details
                      </button>
                    </div>
                    <div className="absolute top-5 right-5 w-11 h-11 rounded-full bg-brand-navy/90 backdrop-blur-md border border-brand-gold text-brand-gold flex items-center justify-center font-serif text-lg font-bold z-10">
                      {project.number}
                    </div>
                  </div>

                  <div className="p-8">
                    <span className="inline-block bg-brand-red/10 text-brand-red px-3 py-1 rounded-full text-[10px] font-bold tracking-widest mb-3 uppercase">
                      {project.type}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-brand-navy mb-2 group-hover:text-brand-red transition-colors">
                      {project.name}
                    </h3>
                    <p className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                      <MapPin className="w-4 h-4 text-brand-red" />
                      {project.area}
                    </p>
                    
                    <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                      {project.services.map((service, i) => (
                        <span key={i} className="bg-brand-cream/50 text-brand-navy px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              { icon: <Hotel className="w-8 h-8" />, value: '4', label: 'Premium Hotels' },
              { icon: <MapPin className="w-8 h-8" />, value: '9', label: 'Premium Locations' },
              { icon: <CheckCircle2 className="w-8 h-8" />, value: '500+', label: 'Projects Done' },
              { icon: <History className="w-8 h-8" />, value: '10+', label: 'Years Experience' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[24px] text-center shadow-lg border-t-4 border-brand-gold"
              >
                <div className="text-brand-gold mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-4xl font-serif font-bold text-brand-navy mb-1">{stat.value}</div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-navy rounded-[30px] p-8 md:p-14 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-navy/30"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif font-bold">Want to Be Our Next Success Story?</h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
                Experience the same premium service that Dubai's top hotels and developers trust for their prestigious projects.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button 
                  onClick={() => openBooking()}
                  className="bg-brand-red text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all shadow-xl shadow-brand-red/30 flex items-center gap-3 text-lg"
                >
                  <CalendarCheck className="w-6 h-6" /> Book Service Now
                </button>
                <button 
                  onClick={() => askExpert()}
                  className="bg-brand-green text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all shadow-xl shadow-brand-green/30 flex items-center gap-3 text-lg"
                >
                  <i className="fa-brands fa-whatsapp text-2xl"></i> WhatsApp Us
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
