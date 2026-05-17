import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PaintRoller, Snowflake, Droplets, Bolt, Grid3X3, Wrench, Lightbulb, 
  Layers, Home, ChevronRight, Phone, Video, Calendar, ShieldCheck, 
  Star, Headphones, ArrowRight, UserCheck
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

interface SubService {
  name: string;
  id: string;
  icon: React.ReactNode;
  desc: string;
}

interface ServiceCategory {
  name: string;
  icon: React.ReactNode;
  color: string;
  activeColor: string;
  description: string;
  image: string;
  promoTitle: string;
  subs: SubService[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    name: 'Paint Work',
    icon: <PaintRoller className="w-5 h-5 text-white" />,
    color: '#C9153B',
    activeColor: '#EEF6FF',
    description: 'Professional painting solutions for homes and businesses. From surface preparation to the perfect finish, we deliver quality, durability and beauty that lasts.',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80',
    promoTitle: 'Beautiful Finishes For Every Space',
    subs: [
      { name: 'Wall Painting', id: 'wall-painting', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><PaintRoller className="w-4 h-4 text-blue-600" /></div>, desc: 'Smooth and flawless wall finishes.' },
      { name: 'Interior Painting', id: 'interior-painting', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Home className="w-4 h-4 text-blue-600" /></div>, desc: 'Elegant interiors that reflect you.' },
      { name: 'Exterior Painting', id: 'exterior-painting', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Grid3X3 className="w-4 h-4 text-blue-600" /></div>, desc: 'Weather-resistant exterior paints.' },
      { name: 'Texture Painting', id: 'texture-painting', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Layers className="w-4 h-4 text-blue-600" /></div>, desc: 'Stylish textures for stunning walls.' },
      { name: 'Enamel Painting', id: 'enamel-painting', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Star className="w-4 h-4 text-blue-600" /></div>, desc: 'Premium enamel for long-lasting shine.' },
      { name: 'Protective Coating', id: 'protective-coating', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><ShieldCheck className="w-4 h-4 text-blue-600" /></div>, desc: 'Coatings that protect and extend life.' },
      { name: 'Villa Painting', id: 'villa-painting', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Home className="w-4 h-4 text-blue-600" /></div>, desc: 'Complete painting for luxury villas.' },
      { name: 'Office Painting', id: 'office-painting', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><ArrowRight className="w-4 h-4 text-blue-600" /></div>, desc: 'Neat, professional office finishes.' }
    ]
  },
  {
    name: 'AC Maintenance',
    icon: <Snowflake className="w-5 h-5 text-white" />,
    color: '#2563eb',
    activeColor: '#EEF6FF',
    description: 'Keep your spaces cool and comfortable with our professional AC maintenance and installation services. Fast, reliable and energy-efficient solutions tailored for your needs.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    promoTitle: 'Reliable Cooling All Year Round',
    subs: [
      { name: 'Emergency AC Repair', id: 'ac-repair', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Wrench className="w-4 h-4 text-blue-600" /></div>, desc: 'Quick response for all AC issues.' },
      { name: 'New AC Installation', id: 'ac-installation', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Snowflake className="w-4 h-4 text-blue-600" /></div>, desc: 'Expert installation, all brands.' },
      { name: 'AC Ducting', id: 'ac-ducting', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Layers className="w-4 h-4 text-blue-600" /></div>, desc: 'Custom ducting solutions.' },
      { name: 'Duct Type AC Install', id: 'duct-ac-install', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Layers className="w-4 h-4 text-blue-600" /></div>, desc: 'Efficient duct type AC setup.' },
      { name: 'Chilled Water AC', id: 'chilled-water-ac', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Droplets className="w-4 h-4 text-blue-600" /></div>, desc: 'Centralized cooling systems.' },
      { name: 'AC Annual Contracts', id: 'ac-contracts', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Calendar className="w-4 h-4 text-blue-600" /></div>, desc: 'Planned maintenance and care.' },
      { name: 'AC Gas Refilling', id: 'ac-gas', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Layers className="w-4 h-4 text-blue-600" /></div>, desc: 'R22 / R410A gas refilling.' },
      { name: 'AC Filter Replacement', id: 'ac-filter', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Layers className="w-4 h-4 text-blue-600" /></div>, desc: 'Clean air, better performance.' }
    ]
  },
  {
    name: 'Plumbing Services',
    icon: <Droplets className="w-5 h-5 text-white" />,
    color: '#C9153B',
    activeColor: '#EEF6FF',
    description: 'From minor repairs to complete installations, our expert plumbers deliver reliable, high-quality solutions to keep your water systems running smoothly and your home leak-free.',
    image: 'https://images.unsplash.com/photo-1585999928141-b27c4f7c0fc1?w=800&q=80',
    promoTitle: 'Fast Plumbing Support When You Need It',
    subs: [
      { name: 'Sanitary Services', id: 'sanitary', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Droplets className="w-4 h-4 text-blue-600" /></div>, desc: 'Complete sanitary fitting and repair services.' },
      { name: 'Drainage Cleaning', id: 'drainage', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Layers className="w-4 h-4 text-blue-600" /></div>, desc: 'Professional cleaning for clear and odor-free drains.' },
      { name: 'Leakage Repair', id: 'leakage-repair', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Droplets className="w-4 h-4 text-blue-600" /></div>, desc: 'Quick detection and repair of all kinds of leaks.' },
      { name: 'Water Heaters', id: 'water-heaters', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Bolt className="w-4 h-4 text-blue-600" /></div>, desc: 'Installation, repair and maintenance of water heaters.' },
      { name: 'Bathroom Plumbing', id: 'bathroom-plumbing', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Droplets className="w-4 h-4 text-blue-600" /></div>, desc: 'Expert plumbing for bathrooms and accessories.' },
      { name: 'Kitchen Plumbing', id: 'kitchen-plumbing', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Droplets className="w-4 h-4 text-blue-600" /></div>, desc: 'Sink, faucet and pipe solutions for your kitchen.' },
      { name: 'Pipe Installation', id: 'pipe-install', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Layers className="w-4 h-4 text-blue-600" /></div>, desc: 'High-quality pipe installation for long-lasting performance.' },
      { name: 'Emergency Plumbing', id: 'emergency-plumbing', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Headphones className="w-4 h-4 text-blue-600" /></div>, desc: '24/7 emergency plumbing support when you need it most.' }
    ]
  },
  {
    name: 'Electrical Services',
    icon: <Bolt className="w-5 h-5 text-white" />,
    color: '#D9A520',
    activeColor: '#EEF6FF',
    description: 'Expert electrical works and safe installations for homes and businesses. From wiring and lighting to smart solutions, we deliver reliable, efficient and code-compliant services you can trust.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    promoTitle: 'Safe Power Solutions For Every Property',
    subs: [
      { name: 'Electrical Contracting', id: 'electrical-contracting', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Bolt className="w-4 h-4 text-blue-600" /></div>, desc: 'Complete electrical contracting for new and existing projects.' },
      { name: 'Interior/Exterior Light', id: 'lighting', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Lightbulb className="w-4 h-4 text-blue-600" /></div>, desc: 'Installation of indoor, outdoor and decorative lighting.' },
      { name: 'Home Wiring', id: 'home-wiring', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Layers className="w-4 h-4 text-blue-600" /></div>, desc: 'Safe and reliable home wiring and rewiring services.' },
      { name: 'Circuit Breakers', id: 'circuit-breakers', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Layers className="w-4 h-4 text-blue-600" /></div>, desc: 'MCB, RCD installation and electrical panel upgrades.' },
      { name: 'Smart Home Solutions', id: 'smart-home', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Home className="w-4 h-4 text-blue-600" /></div>, desc: 'Smart switches, automation and energy management.' },
      { name: 'Office Electrical', id: 'office-electrical', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><ArrowRight className="w-4 h-4 text-blue-600" /></div>, desc: 'Complete electrical solutions for offices and commercial spaces.' },
      { name: 'DEWA Approvals', id: 'dewa', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><ShieldCheck className="w-4 h-4 text-blue-600" /></div>, desc: 'DEWA submissions and approvals for electrical installations.' },
      { name: 'Chandelier Install', id: 'chandelier', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Star className="w-4 h-4 text-blue-600" /></div>, desc: 'Professional chandelier installation and setup.' }
    ]
  },
  {
    name: 'Tile & Wooden',
    icon: <Grid3X3 className="w-5 h-5 text-white" />,
    color: '#071E3D',
    activeColor: '#EEF6FF',
    description: 'Expert tile, marble and woodwork solutions that bring elegance, strength and lasting value to your spaces — inside and out.',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80',
    promoTitle: 'Premium Surfaces Built To Last',
    subs: [
      { name: 'Marble Installation', id: 'marble', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Grid3X3 className="w-4 h-4 text-blue-600" /></div>, desc: 'Premium marble fitting with flawless finishing.' },
      { name: 'Granite Work', id: 'granite', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Grid3X3 className="w-4 h-4 text-blue-600" /></div>, desc: 'Granite cutting, fitting and polishing.' },
      { name: 'Porcelain Tiles', id: 'porcelain', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Grid3X3 className="w-4 h-4 text-blue-600" /></div>, desc: 'High-quality porcelain tiles for modern spaces.' },
      { name: 'Interlock Stones', id: 'interlock', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Grid3X3 className="w-4 h-4 text-blue-600" /></div>, desc: 'Durable interlock solutions for driveways and yards.' },
      { name: 'Pergola Design', id: 'pergola', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Home className="w-4 h-4 text-blue-600" /></div>, desc: 'Stylish and durable pergola designs for outdoors.' },
      { name: 'Wooden Doors', id: 'wooden-doors', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Home className="w-4 h-4 text-blue-600" /></div>, desc: 'Custom wooden doors crafted with precision.' },
      { name: 'Gazebo Construction', id: 'gazebo', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Home className="w-4 h-4 text-blue-600" /></div>, desc: 'Beautiful and sturdy gazebos built to last.' },
      { name: 'Outdoor Kitchen', id: 'outdoor-kitchen', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Home className="w-4 h-4 text-blue-600" /></div>, desc: 'Functional and stylish outdoor kitchen setups.' }
    ]
  },
  {
    name: 'Handyman & More',
    icon: <Wrench className="w-5 h-5 text-white" />,
    color: '#10b981',
    activeColor: '#EEF6FF',
    description: 'Quick installation and repair support for everyday tasks around your home or office. Professional, reliable and done right the first time.',
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&q=80',
    promoTitle: 'Reliable Help For Everyday Jobs',
    subs: [
      { name: 'Furniture Install', id: 'furniture-install', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Wrench className="w-4 h-4 text-blue-600" /></div>, desc: 'Assemble and install all types of furniture.' },
      { name: 'TV Installation', id: 'tv-install', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Bolt className="w-4 h-4 text-blue-600" /></div>, desc: 'Wall-mounting and setup for all TV types.' },
      { name: 'Drilling & Hanging', id: 'drilling', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Wrench className="w-4 h-4 text-blue-600" /></div>, desc: 'Safe drilling and hanging for wall-mounted items.' },
      { name: 'Curtains & Blinds', id: 'curtains', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Layers className="w-4 h-4 text-blue-600" /></div>, desc: 'Install curtain rods, rails and window blinds.' },
      { name: 'Door Lock Repair', id: 'door-lock', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Bolt className="w-4 h-4 text-blue-600" /></div>, desc: 'Repair and replace door locks and handles.' },
      { name: 'Kitchen Hood', id: 'kitchen-hood', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Layers className="w-4 h-4 text-blue-600" /></div>, desc: 'Installation and basic maintenance support.' },
      { name: 'Drain Unblocking', id: 'drain-unblock', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Droplets className="w-4 h-4 text-blue-600" /></div>, desc: 'Fast drain clearing for sinks, showers and more.' },
      { name: 'CCTV Drain Check', id: 'cctv-drain', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Video className="w-4 h-4 text-blue-600" /></div>, desc: 'Camera inspection for drain blockages and issues.' }
    ]
  },
  {
    name: 'Lighting Work',
    icon: <Lightbulb className="w-5 h-5 text-white" />,
    color: '#a855f7',
    activeColor: '#EEF6FF',
    description: 'Enhance the beauty and functionality of your space with our expert lighting solutions. From modern designs to energy-efficient installations, we create the perfect ambiance for every need.',
    image: 'https://images.unsplash.com/photo-1565636192335-c4a04eb0f12d?w=800&q=80',
    promoTitle: 'Bright Ideas For Every Interior',
    subs: [
      { name: 'LED Light Installation', id: 'led-lighting', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Bolt className="w-4 h-4 text-blue-600" /></div>, desc: 'Energy-efficient LED lighting setup.' },
      { name: 'Chandelier Installation', id: 'chandelier-install', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Star className="w-4 h-4 text-blue-600" /></div>, desc: 'Elegant chandelier installation.' },
      { name: 'Spotlights', id: 'spotlights', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Layers className="w-4 h-4 text-blue-600" /></div>, desc: 'Precise spotlight installation.' },
      { name: 'Cove Lighting', id: 'cove-lighting', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Layers className="w-4 h-4 text-blue-600" /></div>, desc: 'Beautiful ambient cove lighting.' },
      { name: 'Outdoor Lighting', id: 'outdoor-lighting', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Home className="w-4 h-4 text-blue-600" /></div>, desc: 'Weatherproof outdoor lighting.' },
      { name: 'Decorative Lighting', id: 'decorative-lighting', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Star className="w-4 h-4 text-blue-600" /></div>, desc: 'Stylish lights for every space.' },
      { name: 'Smart Lighting', id: 'smart-lighting', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Phone className="w-4 h-4 text-blue-600" /></div>, desc: 'Smart lighting for modern living.' },
      { name: 'Light Repair', id: 'light-repair', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Wrench className="w-4 h-4 text-blue-600" /></div>, desc: 'Repair and fix all types of lights.' }
    ]
  },
  {
    name: 'Ceiling Work',
    icon: <Layers className="w-5 h-5 text-white" />,
    color: '#f97316',
    activeColor: '#EEF6FF',
    description: 'We specialize in gypsum, false ceiling and ceiling finishing work that enhances the look and feel of your interiors with precision, creativity and long-lasting quality.',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80',
    promoTitle: 'Elegant Ceiling Designs With Fine Finishing',
    subs: [
      { name: 'Gypsum Ceiling', id: 'gypsum-ceiling', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Grid3X3 className="w-4 h-4 text-blue-600" /></div>, desc: 'Smooth and elegant gypsum ceilings for a modern look.' },
      { name: 'False Ceiling', id: 'false-ceiling', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Layers className="w-4 h-4 text-blue-600" /></div>, desc: 'Stylish false ceilings tailored to your space.' },
      { name: 'POP Design', id: 'pop-design', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Grid3X3 className="w-4 h-4 text-blue-600" /></div>, desc: 'Decorative POP designs for beautiful ceiling finishes.' },
      { name: 'Cove Ceiling', id: 'cove-ceiling', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Layers className="w-4 h-4 text-blue-600" /></div>, desc: 'Indirect lighting ceilings for a soft and premium ambiance.' },
      { name: 'Ceiling Repair', id: 'ceiling-repair', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Wrench className="w-4 h-4 text-blue-600" /></div>, desc: 'Fix cracks, dents and damages for a flawless finish.' },
      { name: 'Ceiling Painting', id: 'ceiling-painting', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><PaintRoller className="w-4 h-4 text-blue-600" /></div>, desc: 'Neat and professional ceiling painting services.' },
      { name: 'Partition Work', id: 'partition-work', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Layers className="w-4 h-4 text-blue-600" /></div>, desc: 'Gypsum partition walls for smart space division.' },
      { name: 'Custom Ceiling Design', id: 'custom-ceiling', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Layers className="w-4 h-4 text-blue-600" /></div>, desc: 'Bespoke ceiling designs crafted as per your vision.' }
    ]
  },
  {
    name: 'Home General Maintenance',
    icon: <Home className="w-5 h-5 text-white" />,
    color: '#14b8a6',
    activeColor: '#EEF6FF',
    description: 'Routine upkeep and minor repair services to keep your home safe, comfortable and in perfect shape. Ideal for villas, townhouses and apartments.',
    image: 'https://images.unsplash.com/photo-1549517045-bc93ec0042f5?w=800&q=80',
    promoTitle: 'Complete Care For Your Home',
    subs: [
      { name: 'Preventive Maintenance', id: 'preventive-maintenance', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Calendar className="w-4 h-4 text-blue-600" /></div>, desc: 'Regular inspections and upkeep to prevent future issues.' },
      { name: 'Door & Window Repair', id: 'door-window-repair', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Home className="w-4 h-4 text-blue-600" /></div>, desc: 'Adjust, repair or replace doors, locks and window fittings.' },
      { name: 'Minor Plumbing', id: 'minor-plumbing', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Droplets className="w-4 h-4 text-blue-600" /></div>, desc: 'Fix leaks, replace fittings and resolve minor plumbing issues.' },
      { name: 'Minor Electrical', id: 'minor-electrical', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Bolt className="w-4 h-4 text-blue-600" /></div>, desc: 'Fix switches, sockets, lights and other minor electrical issues.' },
      { name: 'Wall Repair', id: 'wall-repair', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Layers className="w-4 h-4 text-blue-600" /></div>, desc: 'Patch holes, cracks and restore wall surfaces.' },
      { name: 'Silicone & Sealant', id: 'silicone-sealant', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Layers className="w-4 h-4 text-blue-600" /></div>, desc: 'Apply or replace silicone and sealants for a watertight finish.' },
      { name: 'Fixture Replacement', id: 'fixture-replacement', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Wrench className="w-4 h-4 text-blue-600" /></div>, desc: 'Replace worn-out fixtures and improve home functionality.' },
      { name: 'Property Upkeep', id: 'property-upkeep', icon: <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Layers className="w-4 h-4 text-blue-600" /></div>, desc: 'General home upkeep for a clean, safe and well-maintained space.' }
    ]
  }
];

interface ServicesMegaMenuProps {
  onClose: () => void;
  callNow: () => void;
  openConsultation: () => void;
}

export const ServicesMegaMenu = ({ onClose, callNow, openConsultation }: ServicesMegaMenuProps) => {
  const [activeCategory, setActiveCategory] = React.useState(serviceCategories[0]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="fixed left-1/2 -translate-x-1/2 w-[1400px] max-w-[95vw] bg-white rounded-[24px] shadow-[0_30px_60px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden mt-4 transform-gpu antialiased"
      style={{ 
        backfaceVisibility: 'hidden',
        WebkitFontSmoothing: 'antialiased',
        textRendering: 'optimizeLegibility'
      }}
    >
      <div className="flex h-[620px] will-change-transform">
        {/* Left Sidebar Category Menu */}
        <div className="w-[360px] bg-white border-r border-gray-100 py-6 overflow-y-auto">
          {serviceCategories.map((category) => (
            <button
              key={category.name}
              onMouseEnter={() => setActiveCategory(category)}
              className={cn(
                "w-full flex items-center justify-between px-6 py-4 transition-colors relative group outline-none",
                activeCategory.name === category.name 
                  ? "bg-[#EEF6FF] text-brand-navy" 
                  : "text-gray-600 hover:bg-gray-50 hover:text-brand-navy"
              )}
            >
              <div className="flex items-center gap-4">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 shadow-sm transition-all"
                  style={{ backgroundColor: category.color }}
                >
                  {category.icon}
                </div>
                <span className="font-bold text-[13px] uppercase tracking-wide text-left whitespace-nowrap">{category.name}</span>
              </div>
              <ChevronRight className={cn(
                "w-4 h-4 transition-all duration-300",
                activeCategory.name === category.name ? "text-brand-navy opacity-100 translate-x-0" : "opacity-0 -translate-x-1"
              )} />
              
              {activeCategory.name === category.name && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-navy" />
              )}
            </button>
          ))}
        </div>

        {/* Center Selected Service Detail */}
        <div className="flex-1 p-10 bg-white overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <div className="mb-10 selection:bg-brand-gold/30">
                <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] block mb-2">OUR SERVICES</span>
                <h2 className="text-4xl font-serif font-bold text-brand-navy mb-4">{activeCategory.name}</h2>
                <div className="w-16 h-1 bg-[#D9A520] mb-6" />
                <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">{activeCategory.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                {activeCategory.subs.map((sub) => (
                  <Link 
                    key={sub.id} 
                    to={`/services/${sub.id}`}
                    onClick={onClose}
                    className="flex items-start gap-4 group transition-opacity hover:opacity-80"
                  >
                    <div className="shrink-0 p-1">
                      {sub.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-brand-navy font-bold text-sm group-hover:text-[#C9153B] transition-colors">{sub.name}</h4>
                      <p className="text-gray-400 text-xs">{sub.desc}</p>
                      <div className="h-[1px] w-full bg-gray-50 group-hover:bg-[#C9153B]/20 transition-colors mt-2" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Promotional CTA Card */}
        <div className="w-[420px] p-8 bg-brand-navy relative overflow-hidden flex flex-col">
          {/* Subtle Dotted Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none" 
            style={{ 
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '12px 12px'
            }} 
          />
          
          <div className="relative z-10 flex flex-col h-full translate-z-0">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-8 border-2 border-white/10 group shadow-2xl shrink-0">
              <img 
                src={activeCategory.image} 
                alt={activeCategory.name} 
                className="w-full h-full object-cover transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent" />
            </div>
            
            <div className="min-h-[90px] mb-6">
              <h3 className="text-2xl font-serif font-bold text-white mb-3 leading-tight tracking-tight">
                {activeCategory.promoTitle}
              </h3>
              <div className="w-16 h-1 bg-[#D9A520]" />
            </div>
            
            <div className="flex items-center gap-4 mb-8 bg-white/5 p-4 rounded-2xl border border-white/10 shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#D9A520]/20 flex items-center justify-center text-[#D9A520]">
                <Headphones className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-white font-bold text-xs uppercase tracking-wider">Help Available 24/7</p>
                <p className="text-gray-400 text-[11px] font-medium">Free estimates and same-day support</p>
              </div>
            </div>

            <div className="space-y-4 mt-auto">
              <button 
                onClick={() => {
                  onClose();
                  callNow();
                }}
                className="w-full bg-[#F3B51B] text-brand-navy font-black py-4 rounded-xl hover:bg-white transition-all flex items-center justify-center gap-3 shadow-[0_10px_20px_rgba(243,181,27,0.2)]"
              >
                <Calendar className="w-5 h-5" /> BOOK SERVICE NOW
              </button>
              <button 
                onClick={() => {
                  onClose();
                  openConsultation();
                }}
                className="w-full border-2 border-[#D9A520] text-[#D9A520] font-bold py-4 rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-3"
              >
                <Video className="w-5 h-5" /> FREE CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Trust Strip */}
      <div className="bg-[#f8fafc] border-t border-gray-100 py-6 px-10 flex justify-between items-center text-brand-navy">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-brand-navy"><Home className="w-4 h-4" /></div>
          <span className="text-[11px] font-bold uppercase tracking-widest opacity-80">Professional Technical Services Across UAE</span>
        </div>
        <div className="h-8 w-[1px] bg-gray-200" />
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-[#D9A520]"><UserCheck className="w-4 h-4" /></div>
          <span className="text-[11px] font-bold uppercase tracking-widest opacity-80">Certified Experts</span>
        </div>
        <div className="h-8 w-[1px] bg-gray-200" />
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-brand-navy"><ShieldCheck className="w-4 h-4" /></div>
          <span className="text-[11px] font-bold uppercase tracking-widest opacity-80">Quality Guaranteed</span>
        </div>
        <div className="h-8 w-[1px] bg-gray-200" />
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-[#C9153B]"><Headphones className="w-4 h-4" /></div>
          <span className="text-[11px] font-bold uppercase tracking-widest opacity-80">24/7 Support</span>
        </div>
      </div>
      
      {/* Decorative pointer */}
      <div className="absolute top-0 left-1/2 -translate-x-[150px] -translate-y-1.5 w-3 h-3 bg-white rotate-45 border-l border-t border-gray-100 shadow-[-5px_-5px_10px_rgba(0,0,0,0.02)]" />
    </motion.div>
  );
};
