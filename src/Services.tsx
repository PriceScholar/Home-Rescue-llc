import React from 'react';
import {TopBar, Navbar, Footer} from './components/Navigation';
import {motion} from 'motion/react';
import {Paintbrush, Wind, Droplets, Zap, Grid2X2, Hammer, ChevronRight, PenTool, Layout} from 'lucide-react';
import {Link} from 'react-router-dom';
import {useBooking} from './components/BookingModal';

const Services = () => {
  const { openBooking } = useBooking();
  const categories = [
    {id: 'paint', name: 'Painting Services', icon: Paintbrush, image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop', desc: 'Premium interior and exterior painting services with high-quality industrial grade materials.', subs: ['Villa Painting', 'Apartment Painting', 'Office Painting', 'Wall Paper Fixing']},
    {id: 'ac', name: 'AC Maintenance', icon: Wind, image: 'https://images.unsplash.com/photo-1599708146114-1e5b4b1a20cf?q=80&w=2070&auto=format&fit=crop', desc: 'Complete AC cooling solutions, cleaning, and preventative maintenance for Dubai heat.', subs: ['Duct Cleaning', 'Gas Refilling', 'Compressor Repair', 'Filter Cleaning']},
    {id: 'plumbing', name: 'Plumbing Works', icon: Droplets, image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2000&auto=format&fit=crop', desc: 'Expert plumbing repairs, leak detection, and sanitary installations for luxury properties.', subs: ['Leak Detection', 'Pipe Repair', 'Bathroom Fitting', 'Water Heater Repair']},
    {id: 'electrical', name: 'Electrical Works', icon: Zap, image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop', desc: 'DEWA certified electrical maintenance and smart home installations.', subs: ['Wiring Works', 'Light Installation', 'MCB Repair', 'Short Circuit Fix']},
    {id: 'tile', name: 'Tile & Marble', icon: Grid2X2, image: 'https://images.unsplash.com/photo-1502005075163-548c2617f698?q=80&w=2070&auto=format&fit=crop', desc: 'Premium tile fixing and marble polishing to give your floor a royal look.', subs: ['Tile Fixing', 'Grouting Work', 'Marble Polish', 'Epoxy Flooring']},
    {id: 'handyman', name: 'Handyman Services', icon: Hammer, image: 'https://images.unsplash.com/photo-1581578731522-aa7c6177b966?q=80&w=2070&auto=format&fit=crop', desc: 'Professional handyman for all your home improvements and quick fixes.', subs: ['TV Mounting', 'Curtain Hanging', 'Furniture Assembly', 'Door Repair']},
    {id: 'ceiling', name: 'False Ceiling', icon: Layout, image: 'https://images.unsplash.com/photo-1615873966503-87a760f2524a?q=80&w=1932&auto=format&fit=crop', desc: 'Modern gypsum and false ceiling designs for elegant interiors.', subs: ['Gypsum Board', '60x60 Ceiling', 'Cove Lighting', 'Cornice Work']},
    {id: 'wooden', name: 'Wooden Flooring', icon: PenTool, image: 'https://images.unsplash.com/photo-1581850518316-ab508a5065a7?q=80&w=2070&auto=format&fit=crop', desc: 'Luxury parquet and wooden flooring installation and maintenance.', subs: ['Parquet Install', 'Laminate Flooring', 'Wooden Polish', 'Vinyl Planks']}
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />

      <section className="bg-brand-navy py-24 text-center px-4">
        <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl text-white font-serif">Our Premium Services</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Home Rescue provides a wide range of specialized technical services tailored for the unique needs of Dubai luxury homes.
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-4 md:px-8 bg-brand-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12">
          {categories.map((cat, i) => (
            <motion.div 
              key={cat.id}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: i * 0.1}}
              className="bg-white rounded-[30px] overflow-hidden shadow-sm border border-gray-100 flex flex-col lg:flex-row min-h-[400px] hover:shadow-2xl transition-all"
            >
              <div className="lg:w-2/5 relative h-64 lg:h-auto">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-brand-navy/20"></div>
              </div>
              <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <cat.icon className="w-12 h-12 text-brand-gold mb-6" />
                <h2 className="text-3xl md:text-4xl font-serif text-brand-navy mb-4">{cat.name}</h2>
                <p className="text-gray-600 mb-8 max-w-xl leading-relaxed">{cat.desc}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-10">
                   {cat.subs.map(sub => (
                     <div key={sub} className="flex items-center gap-2 text-sm text-gray-500">
                       <div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
                       {sub}
                     </div>
                   ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link to={`/services/${cat.id}`} className="btn-primary min-w-[180px]">
                    VIEW DETAILS <ChevronRight className="w-4 h-4" />
                  </Link>
                  <button 
                    onClick={() => openBooking(cat.name)}
                    className="btn-outline min-w-[180px] bg-brand-navy text-white hover:bg-brand-gold border-brand-navy hover:border-brand-gold"
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
