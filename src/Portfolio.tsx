import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TopBar, Navbar, Footer } from './components/Navigation';
import { useBooking } from './components/BookingModal';
import { cn } from './lib/utils';
import { Link } from 'react-router-dom';
import VerifiedProjects from './components/VerifiedProjects';
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
  Trophy,
  History,
  CircleCheck
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
    area: 'Palm Jumeirah',
    services: ['Grouting', 'Tile Work', 'Removal of Grout'],
    image: '/work-site.jpg'
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
    <div className="flex flex-col min-h-screen bg-white">
      <TopBar />
      <Navbar />

      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-20 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-3 mb-2"
            >
              <div className="w-12 h-[1px] bg-brand-gold"></div>
              <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px]">Case Studies</span>
              <div className="w-12 h-[1px] bg-brand-gold"></div>
            </motion.div>
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
              Discover the standard of technical excellence we bring to Dubai's most prestigious landmarks, luxury hotels, and residential developments.
            </motion.p>
          </div>

          {/* Filter Tabs - Redefined for Luxury */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-20 border-b border-gray-100 pb-8">
            {[
              { id: 'all', label: 'All Excellence', icon: <Layout className="w-4 h-4" /> },
              { id: 'hotels', label: 'Luxury Hotels', icon: <Hotel className="w-4 h-4" /> },
              { id: 'locations', label: 'Premium Locations', icon: <MapPin className="w-4 h-4" /> },
              { id: 'developers', label: 'Corporate Partners', icon: <Building2 className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={cn(
                  "flex items-center gap-3 px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300",
                  filter === tab.id 
                    ? 'bg-brand-navy text-white shadow-xl translate-y-[-2px]' 
                    : 'bg-transparent text-gray-500 hover:text-brand-navy border border-transparent hover:border-gray-200'
                )}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={cn(
                    "group relative bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col",
                    project.large && "lg:col-span-2 lg:flex-row"
                  )}
                >
                  <div className={cn(
                    "relative overflow-hidden bg-gray-100",
                    project.large ? "lg:w-3/5 h-[450px]" : "h-[300px]"
                  )}>
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                       <button 
                         onClick={() => openProjectDetail(project.id)}
                         className="bg-white text-brand-navy px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-gold hover:text-white transition-all shadow-2xl"
                       >
                         View Details
                       </button>
                    </div>
                  </div>

                  <div className={cn(
                    "p-10 flex flex-col justify-between flex-1",
                    project.large && "lg:w-2/5"
                  )}>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-brand-red font-bold text-[10px] uppercase tracking-widest">{project.type}</span>
                        <span className="text-gray-300 font-serif italic">No. {project.number}</span>
                      </div>
                      <h3 className="text-3xl font-serif font-bold text-brand-navy leading-tight">{project.name}</h3>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <MapPin className="w-3 h-3 text-brand-gold" />
                        {project.area}
                      </div>
                      <div className="pt-6 flex flex-wrap gap-2">
                        {project.services.map((s, idx) => (
                           <span key={idx} className="bg-brand-cream/50 text-brand-navy text-[10px] font-bold px-3 py-1 rounded-md border border-brand-gold/10 uppercase tracking-tighter">
                             {s}
                           </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Stats Bar Integrated */}
          <div className="py-24 border-y border-gray-100 grid grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
            {[
              { label: 'Hotels Served', value: '4+', icon: 'fa-solid fa-hotel' },
              { label: 'Prime Areas', value: '15+', icon: 'fa-solid fa-map-location-dot' },
              { label: 'Projects Done', value: '5000+', icon: 'fa-solid fa-check-double' },
              { label: 'Client Retention', value: '98%', icon: 'fa-solid fa-heart-circle-check' }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-4">
                <i className={cn(stat.icon, "text-3xl text-brand-gold opacity-50")}></i>
                <div>
                  <div className="text-4xl font-serif font-bold text-brand-navy">{stat.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <VerifiedProjects />

          {/* Luxury CTA */}
          <section className="py-24 mt-20">
             <div className="bg-brand-navy rounded-[3.5rem] p-12 md:p-24 relative overflow-hidden text-center text-white">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>
                <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
                   <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">Start Your Own Transformation</h2>
                   <p className="text-xl text-white/70">Join the elite list of Dubai properties maintained by Home Rescue Technical Services.</p>
                   <div className="flex flex-wrap justify-center gap-6 pt-6">
                      <button 
                        onClick={() => openBooking()}
                        className="bg-brand-red text-white px-12 py-5 rounded-full font-bold text-lg uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-brand-red/30"
                      >
                        Book Free Inspection
                      </button>
                   </div>
                </div>
             </div>
          </section>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
