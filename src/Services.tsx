import React from 'react';
import {Helmet} from 'react-helmet-async';
import {TopBar, Navbar, Footer} from './components/Navigation';
import {motion} from 'motion/react';
import {Paintbrush, Wind, Droplets, Zap, Grid2x2, Hammer, ChevronRight, PenTool, Layout} from 'lucide-react';
import {Link} from 'react-router-dom';
import {useBooking} from './components/BookingModal';

const getSubId = (name: string): string => {
  const map: Record<string, string> = {
    'Villa Painting': 'villa-painting',
    'Interior Painting': 'interior-painting',
    'Exterior Painting': 'exterior-painting',
    'Texture Painting': 'texture-painting',
    'Emergency AC Repair': 'emergency-ac-repair',
    'New AC Installation': 'new-ac-installation',
    'AC Ducting': 'ac-ducting',
    'Gas Refilling': 'ac-gas-refilling',
    'Sanitary Services': 'sanitary-services',
    'Leakage Repair': 'leakage-repair',
    'Bathroom Fitting': 'bathroom-plumbing',
    'Water Heaters': 'water-heaters',
    'Home Wiring': 'home-wiring',
    'Interior/Exterior Light': 'interior-exterior-light',
    'Circuit Breakers': 'circuit-breakers',
    'Dewa Approvals': 'dewa',
    'Marble Installation': 'marble-installation',
    'Granite Work': 'granite-work',
    'Porcelain Tiles': 'porcelain-tiles',
    'Interlock Stones': 'interlock-stones',
    'TV Installation': 'tv-installation',
    'Curtain Hanging': 'curtains-blinds',
    'Furniture Assembly': 'furniture-install',
    'Door Repair': 'door-lock-repair',
    'Gypsum Ceiling': 'gypsum-ceiling',
    'False Ceiling': 'false-ceiling',
    'POP Design': 'pop-design',
    'Cove Lighting': 'cove-lighting',
    'LED Installation': 'led-light-installation',
    'Chandelier Hanging': 'chandelier-installation',
    'Outdoor Lights': 'outdoor-lighting',
    'Smart Setup': 'smart-lighting',
    'Preventive Checks': 'preventive-maintenance',
    'Minor Plumbing': 'minor-plumbing',
    'Wall Repair': 'wall-repair',
    'Property Upkeep': 'property-upkeep'
  };
  return map[name] || name.toLowerCase().replace(/\s+/g, '-');
};

const Services = () => {
  const { openBooking } = useBooking();
  const categories = [
    {id: 'paint-work', name: 'Painting Services', icon: Paintbrush, image: '/images/services/service-paint.jpg', desc: 'Premium interior and exterior painting services with high-quality industrial grade materials.', subs: ['Villa Painting', 'Interior Painting', 'Exterior Painting', 'Texture Painting']},
    {id: 'ac-maintenance', name: 'AC Maintenance', icon: Wind, image: '/images/services/service-ac.jpg', desc: 'Complete AC cooling solutions, cleaning, and preventative maintenance for Dubai heat.', subs: ['Emergency AC Repair', 'New AC Installation', 'AC Ducting', 'Gas Refilling']},
    {id: 'plumbing-services', name: 'Plumbing Works', icon: Droplets, image: '/images/services/service-plumbing.jpg', desc: 'Expert plumbing repairs, leak detection, and sanitary installations for luxury properties.', subs: ['Sanitary Services', 'Leakage Repair', 'Bathroom Fitting', 'Water Heaters']},
    {id: 'electrical-services', name: 'Electrical Works', icon: Zap, image: '/images/services/service-electrical.jpg', desc: 'DEWA certified electrical maintenance and smart home installations.', subs: ['Home Wiring', 'Interior/Exterior Light', 'Circuit Breakers', 'Dewa Approvals']},
    {id: 'tile-wooden', name: 'Tile & Wooden', icon: Grid2x2, image: '/images/services/service-tile.jpg', desc: 'Premium tile fixing and marble polishing to give your floor a royal look.', subs: ['Marble Installation', 'Granite Work', 'Porcelain Tiles', 'Interlock Stones']},
    {id: 'handyman-more', name: 'Handyman & More', icon: Hammer, image: '/images/services/service-handyman.jpg', desc: 'Professional handyman for all your home improvements and quick fixes.', subs: ['TV Installation', 'Curtain Hanging', 'Furniture Assembly', 'Door Repair']},
    {id: 'ceiling-work', name: 'Ceiling & Gypsum', icon: Layout, image: '/images/services/service-ceiling.jpg', desc: 'Modern gypsum and false ceiling designs for elegant interiors.', subs: ['Gypsum Ceiling', 'False Ceiling', 'POP Design', 'Cove Lighting']},
    {id: 'lighting-work', name: 'Lighting Work', icon: Zap, image: '/images/services/service-lighting.jpg', desc: 'Specialized lighting solutions, chandeliers installation, and smart home lighting setup.', subs: ['LED Installation', 'Chandelier Hanging', 'Outdoor Lights', 'Smart Setup']},
    {id: 'home-general-maintenance', name: 'Home General Maintenance', icon: PenTool, image: '/images/services/service-maintenance.jpg', desc: 'Regular preventive maintenance and small repairs to keep your property in top condition.', subs: ['Preventive Checks', 'Minor Plumbing', 'Wall Repair', 'Property Upkeep']}
  ];

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>All Home Maintenance Services in Dubai | Resqhome</title>
        <meta name="description" content="Browse all services — AC repair, plumbing, electrical, painting, ceiling, tile, handyman. Trusted UAE technicians, transparent pricing." />
        <link rel="canonical" href="https://resqhome.ae/services" />
      </Helmet>
      <TopBar />
      <Navbar />

      <section className="bg-brand-navy py-10 md:py-14 text-center px-4">
        <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl text-white font-serif">Our Premium Services</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Home Rescue provides a wide range of specialized technical services tailored for the unique needs of Dubai luxury homes.
          </p>
        </motion.div>
      </section>

      <section className="py-10 md:py-14 px-4 md:px-8 bg-brand-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-5 md:gap-8">
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
                <img src={cat.image} alt={cat.name} className="w-full h-full object-contain" loading="lazy" />
                <div className="absolute inset-0 bg-brand-navy/20"></div>
              </div>
              <div className="lg:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                <cat.icon className="w-12 h-12 text-brand-gold mb-6" />
                <h2 className="text-2xl md:text-3xl font-serif text-brand-navy mb-4">{cat.name}</h2>
                <p className="text-gray-600 mb-8 max-w-xl leading-relaxed">{cat.desc}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-10">
                   {cat.subs.map(sub => {
                     const subId = getSubId(sub);
                     return (
                       <Link 
                         key={sub} 
                         to={`/services/${subId}`}
                         className="flex items-center gap-2 text-sm text-gray-500 hover:text-brand-gold transition-colors duration-200 group/sub"
                       >
                         <div className="w-1.5 h-1.5 bg-brand-gold rounded-full group-hover/sub:scale-125 transition-transform"></div>
                         <span className="border-b border-transparent group-hover/sub:border-brand-gold/40">{sub}</span>
                       </Link>
                     );
                   })}
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
