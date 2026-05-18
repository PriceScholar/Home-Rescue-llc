// --- Service Data Interfaces ---
export interface ServicePackage {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Review {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface ServiceData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  estimateDuration: string;
  material: string;
  technician: string;
  warranty: string;
  subServices: {name: string; icon: string; desc: string}[];
  process: {step: string; title: string; desc: string}[];
  packages: ServicePackage[];
  faqs: FAQ[];
  reviews: Review[];
}

export const servicesData: Record<string, ServiceData> = {
  // --- PAINT WORK ---
  'wall-painting': {
    id: 'wall-painting',
    title: 'Wall Painting',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Expert wall painting for villas and apartments. We ensure perfect surface preparation and a flawless finish using premium Jotun and Berger paints.',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=800&fit=crop',
    estimateDuration: '1-2 Days',
    material: 'Premium Acrylic Emulsion',
    technician: 'Professional Painters',
    warranty: '1-Year Warranty',
    subServices: [
      {name: 'Sanding & Filling', icon: 'fa-solid fa-check-circle', desc: 'Smoothing walls and filling cracks.'},
      {name: 'Double Coating', icon: 'fa-solid fa-check-circle', desc: 'Achieving deep color and durability.'}
    ],
    process: [
      {step: '01', title: 'Preparation', desc: 'Covering furniture and masking edges.'},
      {step: '02', title: 'Scraping', desc: 'Removing old paint and loose plaster.'},
      {step: '03', title: 'Painting', desc: 'Applying primer and two coats of paint.'}
    ],
    packages: [
      {name: 'Diagnosis', price: 'AED 99', features: ['Inspection', 'Color Advice']},
      {name: 'Standard', price: 'From AED 250', recommended: true, features: ['Premium Paint', '2-Year Warranty']}
    ],
    faqs: [], reviews: []
  },
  'interior-painting': {
    id: 'interior-painting',
    title: 'Interior Painting',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Luxury interior painting for bedrooms, living halls, and kitchens. Specialized in odorless and environmentally friendly villa painting solutions.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=800&fit=crop',
    estimateDuration: '2-3 Days',
    material: 'Odorless Premium Paint',
    technician: 'Design Experts',
    warranty: '1-Year Warranty',
    subServices: [
      {name: 'Ceiling Painting', icon: 'fa-solid fa-check-circle', desc: 'Brightening up your space from above.'},
      {name: 'Accent Walls', icon: 'fa-solid fa-check-circle', desc: 'Stunning feature walls with unique colors.'}
    ],
    process: [], packages: [
      {name: 'Standard', price: 'From AED 350', recommended: true, features: ['Interior Specialist', 'Color Matching']}
    ],
    faqs: [], reviews: []
  },
  'exterior-painting': {
    id: 'exterior-painting',
    title: 'Exterior Painting',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Weather-resistant exterior painting for villa facades and boundary walls. We use high-durability paints designed for the UAE climate.',
    image: 'https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=800&h=800&fit=crop',
    estimateDuration: '3-5 Days',
    material: 'Exterior Grade Weather-Shield',
    technician: 'Facade Specialists',
    warranty: '2-Year Durability Warranty',
    subServices: [], process: [], packages: [
      {name: 'Standard', price: 'From AED 1200', recommended: true, features: ['Power Wash', 'Primer', 'Weather-Shield']}
    ],
    faqs: [], reviews: []
  },
  'texture-painting': {
    id: 'texture-painting',
    title: 'Texture Painting',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Decorative texture painting including stucco, velvet, and stone finishes. Add a touch of luxury to your feature walls.',
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&h=800&fit=crop',
    estimateDuration: '2 Days',
    material: 'Specialized Texture Paste',
    technician: 'Artistic Painters',
    warranty: '1-Year Warranty',
    subServices: [], process: [], packages: [
      {name: 'Standard', price: 'From AED 800', recommended: true, features: ['Unique Textures', 'Premium Material']}
    ],
    faqs: [], reviews: []
  },
  'enamel-painting': {
    id: 'enamel-painting',
    title: 'Enamel Painting',
    tagline: 'PREMIUM WOOD & METAL FINISHING',
    description: 'Specialized enamel painting for wooden doors, cabinets, and metal gates. High-gloss and semi-gloss finishes available.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=800&fit=crop',
    estimateDuration: '2 Days',
    material: 'High-Gloss Enamel',
    technician: 'Finish Specialists',
    warranty: '1-Year Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'protective-coating': {
    id: 'protective-coating',
    title: 'Protective Coating',
    tagline: 'SPECIALIZED SURFACE PROTECTION',
    description: 'Anti-carbonation and waterproof coatings for villas. Protects your building from humidity and salt air.',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=800&fit=crop',
    estimateDuration: '3-5 Days',
    material: 'Jotun Jotashield',
    technician: 'Coating Experts',
    warranty: '5-Year Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'villa-painting': {
    id: 'villa-painting',
    title: 'Villa Painting',
    tagline: 'LUXURY HOME FINISHING',
    description: 'Complete interior and exterior painting for luxury villas. We handle everything from walls to ceilings and decorative finishes.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=800&fit=crop',
    estimateDuration: '5-10 Days',
    material: 'Jotun Fenomastic',
    technician: 'Villa Team',
    warranty: '2-Year Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'office-painting': {
    id: 'office-painting',
    title: 'Office Painting',
    tagline: 'COMMERCIAL PAINT SOLUTIONS',
    description: 'Quick and professional painting for office spaces. Odorless paint options so you can resume work the same day.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=800&fit=crop',
    estimateDuration: '1-3 Days',
    material: 'Odorless Interior Paint',
    technician: 'Commericial Painters',
    warranty: '1-Year Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },

  // --- AC SERVICES ---
  'emergency-ac-repair': {
    id: 'emergency-ac-repair',
    title: 'Emergency AC Repair',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: '24/7 emergency AC repair for any breakdowns. We handle gas leaks, capacitor failures, and compressor issues instantly.',
    image: '/images/services/subs/emergency-ac-repair.jpg',
    estimateDuration: '2-4 Hours',
    material: 'OEM Spare Parts',
    technician: 'HVAC Experts',
    warranty: '90-Day Warranty on Spares',
    subServices: [], process: [], packages: [
      {name: 'Diagnosis', price: 'AED 99', features: ['Problem Identification']},
      {name: 'Standard Repair', price: 'From AED 250', recommended: true, features: ['Immediate Fix', 'Gas Top-up']}
    ],
    faqs: [], reviews: []
  },
  'new-ac-installation': {
    id: 'new-ac-installation',
    title: 'New AC Installation',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Professional installation of Split, Window, and Duct-type AC units. We ensure proper vacuuming and leak-free copper piping.',
    image: '/images/services/subs/ac-installation.jpg',
    estimateDuration: '4-6 Hours',
    material: 'Copper Pipe / Rigid Insulation',
    technician: 'Certified AC Installers',
    warranty: '1-Year Installation Warranty',
    subServices: [], process: [], packages: [
      {name: 'Split AC', price: 'AED 450', recommended: true, features: ['Mounting', 'Gas Charge', 'Testing']}
    ],
    faqs: [], reviews: []
  },
  'ac-ducting': {
    id: 'ac-ducting',
    title: 'AC Ducting Work',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Comprehensive AC duct design, installation, and modification. We improve airflow and cooling efficiency through optimized ducting.',
    image: '/images/services/subs/ac-ducting.jpg',
    estimateDuration: '1-3 Days',
    material: 'Aluminum Duct / GI Sheets',
    technician: 'Ducting Specialists',
    warranty: '2-Year Warranty',
    subServices: [], process: [], packages: [
      {name: 'Standard', price: 'From AED 1500', recommended: true, features: ['Airflow Design', 'Flawless Installation']}
    ],
    faqs: [], reviews: []
  },
  'ac-maintenance': {
    id: 'ac-maintenance',
    title: 'AC Maintenance',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Standard AC maintenance including coil cleaning, filter wash, and gas level checks. Recommended every 4 months for UAE homes.',
    image: '/images/services/service-ac.jpg',
    estimateDuration: '2 Hours',
    material: 'Eco-Friendly Coil Cleaner',
    technician: 'Maintenace Team',
    warranty: '90-Day Cooling Guarantee',
    subServices: [], process: [], packages: [
      {name: 'One-Time', price: 'AED 150', recommended: true, features: ['Deep Coil Wash', 'Gas Check', 'Drain Clear']}
    ],
    faqs: [], reviews: []
  },
  'central-ac': {
    id: 'central-ac',
    title: 'Central AC Services',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Specialized services for Centralized and Chilled Water AC systems. Large-scale cooling solutions for villas and buildings.',
    image: 'https://images.unsplash.com/photo-1605557202138-6d2db66bb1f3?w=800&q=80',
    estimateDuration: '4-8 Hours',
    material: 'Chilled Water Valves / Strainers',
    technician: 'Industrial HVAC Team',
    warranty: '1-Year Service Warranty',
    subServices: [], process: [], packages: [
      {name: 'Standard', price: 'From AED 500', recommended: true, features: ['Chiller Water Check', 'Actuator Fix']}
    ],
    faqs: [], reviews: []
  },
  'ac-gas-refilling': {
    id: 'ac-gas-refilling',
    title: 'AC Gas Refilling',
    tagline: 'COOLING RESTORATION',
    description: 'Top-up of R410a or R22 refrigerant gas to restore AC cooling. We fix the leak before refilling.',
    image: '/images/services/subs/ac-gas.jpg',
    estimateDuration: '1-2 Hours',
    material: 'R410A / R22 Gas',
    technician: 'HVAC Specialists',
    warranty: 'Season Guarantee',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'ac-filter-replacement': {
    id: 'ac-filter-replacement',
    title: 'AC Filter Replacement',
    tagline: 'AIR QUALITY IMPROVEMENT',
    description: 'Replacing dirty and damaged AC filters to improve air hygiene and airflow efficiency.',
    image: '/images/services/subs/ac-filter.jpg',
    estimateDuration: '30 Mins',
    material: 'High-Density Filters',
    technician: 'Maintenance Techs',
    warranty: 'Quality Assured',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },

  // --- PLUMBING ---
  'sanitary-services': {
    id: 'sanitary-services',
    title: 'Sanitary Services',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Expert installation and repair of toilets, washbasins, and sanitary fixtures. We fix flush issues and install luxury bathroom fittings.',
    image: '/images/services/subs/sanitary.jpg',
    estimateDuration: '2-4 Hours',
    material: 'Grohe / Kohler Fittings',
    technician: 'Licensed Plumbers',
    warranty: '1-Year Fix Warranty',
    subServices: [], process: [], packages: [
      {name: 'Basic Fix', price: 'AED 150', recommended: true, features: ['Mechanism Fix', 'Sealant Work']}
    ],
    faqs: [], reviews: []
  },
  'drainage-cleaning': {
    id: 'drainage-cleaning',
    title: 'Drainage Cleaning',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Unblocking floor traps, kitchen sinks, and main manholes using industrial-grade snake machines and hydro-jetters.',
    image: '/images/services/subs/drainage.jpg',
    estimateDuration: '3-5 Hours',
    material: 'Bio-Degradable Solvent',
    technician: 'Sanitary Specialists',
    warranty: '3-Month No-Block Guarantee',
    subServices: [], process: [], packages: [
      {name: 'Hydro-Jet', price: 'AED 450', recommended: true, features: ['CCTV Inspection', 'Deep Jet Flush']}
    ],
    faqs: [], reviews: []
  },
  'leakage-repair': {
    id: 'leakage-repair',
    title: 'Leakage Repair',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Advanced leak detection and repair for ceiling pipe leaks and underground water losses. We fix leaks without unnecessary breakage.',
    image: '/images/services/subs/leakage-repair.jpg',
    estimateDuration: '4-8 Hours',
    material: 'PPR / PEX High Pressure Pipes',
    technician: 'Lead Plumbers',
    warranty: '1-Year Leak Warranty',
    subServices: [], process: [], packages: [
      {name: 'Standard', price: 'From AED 350', recommended: true, features: ['Sonar Detection', 'Precision Fix']}
    ],
    faqs: [], reviews: []
  },
  'water-heaters': {
    id: 'water-heaters',
    title: 'Water Heaters',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Installation and replacement of Ariston and Atlantic water heaters. Safe electrical wiring and proper pressure valve fitting included.',
    image: '/images/services/subs/water-heaters.jpg',
    estimateDuration: '2-3 Hours',
    material: 'Ariston / Atlantic Heater',
    technician: 'Certified Plumbers',
    warranty: '5-Year Tank Warranty',
    subServices: [], process: [], packages: [
      {name: 'Full Install', price: 'AED 650', recommended: true, features: ['New Heater', 'Installation', 'Testing']}
    ],
    faqs: [], reviews: []
  },
  'bathroom-plumbing': {
    id: 'bathroom-plumbing',
    title: 'Bathroom Plumbing',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Full bathroom plumbing renovation including concealed mixers, shower sets, and bathtub installations.',
    image: '/images/services/subs/bathroom-plumbing.jpg',
    estimateDuration: '1-2 Days',
    material: 'Premium Sanitary Pipes',
    technician: 'Senior Plumbers',
    warranty: '2-Year Service Warranty',
    subServices: [], process: [], packages: [
      {name: 'Renovation', price: 'AED 2500+', recommended: true, features: ['Full Re-piping', 'New Fixtures']}
    ],
    faqs: [], reviews: []
  },
  'kitchen-plumbing': {
    id: 'kitchen-plumbing',
    title: 'Kitchen Plumbing',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Installing kitchen mixers, dishwashers, and water filter systems. We ensure zero leakages in your food prep area.',
    image: '/images/services/subs/kitchen-plumbing.jpg',
    estimateDuration: '2-4 Hours',
    material: 'High-Grade Flexible Hoses',
    technician: 'Kitchen Specialists',
    warranty: '1-Year Warranty',
    subServices: [], process: [], packages: [
      {name: 'Mixer Install', price: 'AED 150', recommended: true, features: ['Mixer Fix', 'Drain Connect']}
    ],
    faqs: [], reviews: []
  },
  'pipe-installation': {
    id: 'pipe-installation',
    title: 'Pipe Installation',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'High-quality pipe installation for villas and buildings. We use premium PPR and PEX materials for long-lasting performance.',
    image: '/images/services/subs/pipe-installation.jpg',
    estimateDuration: '1-3 Days',
    material: 'PPR / PEX Pipes',
    technician: 'Senior Plumbers',
    warranty: '2-Year Warranty',
    subServices: [], process: [], packages: [
      {name: 'Standard', price: 'AED 800+', recommended: true, features: ['Full Installation', 'Pressure Testing']}
    ],
    faqs: [], reviews: []
  },
  'emergency-plumbing': {
    id: 'emergency-plumbing',
    title: 'Emergency Plumbing',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: '24/7 emergency plumbing support for burst pipes, major leaks, and drainage overflows. Quick response time across Dubai.',
    image: '/images/services/subs/emergency-plumbing.jpg',
    estimateDuration: '1-3 Hours',
    material: 'All Necessary Spares',
    technician: 'Emergency Team',
    warranty: 'Service Warranty',
    subServices: [], process: [], packages: [
      {name: 'Emergency Call', price: 'AED 200', recommended: true, features: ['24/7 Availability', 'Quick Fix']}
    ],
    faqs: [], reviews: []
  },

  // --- ELECTRICAL ---
  'electrical-contracting': {
    id: 'electrical-contracting',
    title: 'Electrical Contracting',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'DEWA-approved electrical contracting for villas and commercial shops. We handle DB dressing, main load cables, and cabling.',
    image: '/images/services/subs/electrical-contracting.jpg',
    estimateDuration: '2-7 Days',
    material: 'Ducab / Schneider Cables',
    technician: 'DEWA Approved Electricians',
    warranty: '2-Year Work Warranty',
    subServices: [], process: [], packages: [
       {name: 'DB Dressing', price: 'AED 800', recommended: true, features: ['Labeling', 'Ferruling', 'Load Balance']}
    ],
    faqs: [], reviews: []
  },
  'interior-exterior-light': {
    id: 'interior-exterior-light',
    title: 'Lighting Installation',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Expert spotlight, LED strip, and chandeliers installation. We design indoor and outdoor lighting layouts for luxury homes.',
    image: '/images/services/subs/lighting.jpg',
    estimateDuration: '2-6 Hours',
    material: 'Phillips / OSRAM LED',
    technician: 'Lighting Specialists',
    warranty: '1-Year Wiring Warranty',
    subServices: [], process: [], packages: [
      {name: 'Standard', price: 'From AED 350', recommended: true, features: ['Ceiling Spots', 'Concealed LED']}
    ],
    faqs: [], reviews: []
  },
  'home-wiring': {
    id: 'home-wiring',
    title: 'Home Wiring',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Full house rewiring for old villas. We replace outdated cables and install modern sockets and switches with surge protection.',
    image: '/images/services/subs/home-wiring.jpg',
    estimateDuration: '1-5 Days',
    material: 'Ducab PVC Insulated Cables',
    technician: 'Senior Electricians',
    warranty: '5-Year Reliability Warranty',
    subServices: [], process: [], packages: [
      {name: 'Standard', price: 'Custom Quote', recommended: true, features: ['Full Conduit Check', 'New Wiring']}
    ],
    faqs: [], reviews: []
  },
  'circuit-breakers': {
    id: 'circuit-breakers',
    title: 'Circuit Breakers',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Repairing DB trips and replacing faulty circuit breakers. We ensure your home electrical system is safe from short circuits.',
    image: '/images/services/subs/circuit-breakers.jpg',
    estimateDuration: '2 Hours',
    material: 'Schneider / Hager MCB',
    technician: 'Safety Electricians',
    warranty: '1-Year Component Warranty',
    subServices: [], process: [], packages: [
      {name: 'Fix Trip', price: 'AED 150', recommended: true, features: ['Isolation', 'Breaker Fix']}
    ],
    faqs: [], reviews: []
  },
  'smart-home-solutions': {
    id: 'smart-home-solutions',
    title: 'Smart Home Solutions',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Smart Wi-Fi switches, curtain controls, and doorbell installations. Control your home via Alexa or Google Home.',
    image: '/images/services/subs/smart-home.jpg',
    estimateDuration: '4-8 Hours',
    material: 'Tuya / Sonoff / Lutron',
    technician: 'Smart Tech Team',
    warranty: '1-Year App Warranty',
    subServices: [], process: [], packages: [
      {name: 'Living Room App', price: 'AED 800', recommended: true, features: ['Smart Lights', 'AC Control']}
    ],
    faqs: [], reviews: []
  },
  'chandelier-install': {
    id: 'chandelier-install',
    title: 'Chandelier Install',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Hanging heavy chandeliers safely with reinforced ceiling supports. Expert assembly of crystal and modern lighting fixtures.',
    image: '/images/services/subs/chandelier.jpg',
    estimateDuration: '2-4 Hours',
    material: 'Steel Anchors / Chains',
    technician: 'Fixture Specialists',
    warranty: '1-Year Mounting Warranty',
    subServices: [], process: [], packages: [
      {name: 'Standard', price: 'AED 250', recommended: true, features: ['Assembly', 'Secure Mounting']}
    ],
    faqs: [], reviews: []
  },

  // --- TILE WORK ---
  'marble': {
    id: 'marble',
    title: 'Marble Installation',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Premium Italian and Spanish marble fixing for floors and walls. We specialize in book-matching and diamond polishing.',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=800&fit=crop',
    estimateDuration: '3-7 Days',
    material: 'Premium White Cement',
    technician: 'Marble Artisans',
    warranty: '2-Year Polish Warranty',
    subServices: [], process: [], packages: [
      {name: 'Fixing Only', price: 'AED 45/sqft', recommended: true, features: ['Leveling', 'Fixing', 'Grouting']}
    ],
    faqs: [], reviews: []
  },
  'granite': {
    id: 'granite',
    title: 'Granite Work',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Heavy-duty granite installation for kitchen countertops and stairs. Highly durable and heat-resistant finishes.',
    image: 'https://images.unsplash.com/photo-1556909114-44e3e9399a2f?w=800&h=800&fit=crop',
    estimateDuration: '2-4 Days',
    material: 'Epoxy Resin Fillers',
    technician: 'Granite Cutters',
    warranty: 'Lifetime Durability',
    subServices: [], process: [], packages: [
      {name: 'Countertop', price: 'AED 800+', recommended: true, features: ['Cutout', 'Side Edge Polish']}
    ],
    faqs: [], reviews: []
  },
  'porcelain': {
    id: 'porcelain',
    title: 'Porcelain Tiles',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Expert fixing of Porcelain and Ceramic tiles. We ensure zero air pockets under tiles to prevent cracking.',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=800&fit=crop',
    estimateDuration: '2-5 Days',
    material: 'Weber / Ardex Adhesive',
    technician: 'Master Tilers',
    warranty: '1-Year Tile Warranty',
    subServices: [], process: [], packages: [
      {name: 'Standard', price: 'AED 35/sqft', recommended: true, features: ['Spacer Check', 'Precision Cut']}
    ],
    faqs: [], reviews: []
  },
  'interlock': {
    id: 'interlock',
    title: 'Interlock Stones',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Luxury interlock design for villa driveways and pathways. Leveling, sand-filling, and stone fixing with modern patterns.',
    image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=800&h=800&fit=crop',
    estimateDuration: '3 Days',
    material: 'Desert Sand / Cement Mix',
    technician: 'Masonry Team',
    warranty: '2-Year Level Warranty',
    subServices: [], process: [], packages: [
      {name: 'Standard', price: 'AED 15/sqft', recommended: true, features: ['Compaction', 'Drainage Slope']}
    ],
    faqs: [], reviews: []
  },

  // --- WOODEN WORK ---
  'pergola': {
    id: 'pergola',
    title: 'Pergola Design',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Custom wooden pergola construction for villa gardens. We use treated wood resistant to UAE sun and termites.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=800&fit=crop',
    estimateDuration: '4-7 Days',
    material: 'Red Meranti / Teak Wood',
    technician: 'Master Carpenters',
    warranty: '3-Year Wood Warranty',
    subServices: [], process: [], packages: [
      {name: 'Standard', price: 'AED 3500+', recommended: true, features: ['Weather Proofing', 'Installation']}
    ],
    faqs: [], reviews: []
  },
  'gazebo': {
    id: 'gazebo',
    title: 'Gazebo Construction',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Constructing luxury wooden gazebos with tiled roofs. Perfect for shaded garden seating.',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=800&fit=crop',
    estimateDuration: '1 Week',
    material: 'Hardwood / Bitumen Tiles',
    technician: 'Outdoor Carpentry Team',
    warranty: '3-Year Warranty',
    subServices: [], process: [], packages: [
      {name: 'Premium', price: 'AED 8500+', recommended: true, features: ['Full Hut Design', 'Power Outlets']}
    ],
    faqs: [], reviews: []
  },
  'wooden-doors': {
    id: 'wooden-doors',
    title: 'Wooden Doors',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Fixing swollen doors, changing door hinges, and full wooden door installations for luxury villas.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop',
    estimateDuration: '2-6 Hours',
    material: 'Solid Wood / MDF Laminate',
    technician: 'Door Specialists',
    warranty: '1-Year Alignment Warranty',
    subServices: [], process: [], packages: [
      {name: 'Alignment', price: 'AED 150', recommended: true, features: ['Planer Work', 'Hinge Fix']}
    ],
    faqs: [], reviews: []
  },
  'outdoor-kitchen': {
    id: 'outdoor-kitchen',
    title: 'Outdoor Kitchen',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Custom BBQ area and outdoor cabinet construction. Weather-proof wood and stone finishes.',
    image: 'https://images.unsplash.com/photo-1556909195-8c95dde7d6c5?w=800&h=800&fit=crop',
    estimateDuration: '1 Week',
    material: 'Marine Plywood / Granite',
    technician: 'Multi-Skilled Mason/Carpenter',
    warranty: '2-Year Warranty',
    subServices: [], process: [], packages: [
      {name: 'Small Pack', price: 'AED 4500+', recommended: true, features: ['Cabinet', 'Sink Connect']}
    ],
    faqs: [], reviews: []
  },

  // --- HANDYMAN ---
  'furniture-install': {
    id: 'furniture-install',
    title: 'Furniture Install',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Assembling IKEA, Home Centre, and luxury furniture. Our carpenters handle fragile items with great care.',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=800&fit=crop',
    estimateDuration: '2-5 Hours',
    material: 'Industrial Screws / Dowels',
    technician: 'Expert Assemblers',
    warranty: 'Service Warranty',
    subServices: [], process: [], packages: [
      {name: 'Hourly', price: 'AED 80/hr', recommended: true, features: ['Fast Assembly', 'Waste Removal']}
    ],
    faqs: [], reviews: []
  },
  'tv-install': {
    id: 'tv-install',
    title: 'TV Installation',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Mounting Samsung, LG, Sony TVs on any wall type (concrete or drywall). Concealed wiring solutions available.',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&h=800&fit=crop',
    estimateDuration: '1 Hour',
    material: 'Heavy-Duty Wall Mount',
    technician: 'Media Specialists',
    warranty: '1-Year Mounting Warranty',
    subServices: [], process: [], packages: [
      {name: 'TV Fix', price: 'AED 150', recommended: true, features: ['Wall Bracket', 'Leveling']}
    ],
    faqs: [], reviews: []
  },
  'drilling': {
    id: 'drilling',
    title: 'Drilling & Hanging',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Hanging mirrors, artwork, shelving, and heavy wall decor. Precise drilling with no damage to your electrical conduits.',
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&h=800&fit=crop',
    estimateDuration: '1-3 Hours',
    material: 'Fischer Wall Plugs',
    technician: 'Certified Handyman',
    warranty: 'Mounting Guarantee',
    subServices: [], process: [], packages: [
      {name: 'Pack of 5', price: 'AED 180', recommended: true, features: ['Any Wall Type', 'Precision Leveling']}
    ],
    faqs: [], reviews: []
  },
  'curtains': {
    id: 'curtains',
    title: 'Curtains & Blinds',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Installing curtain rods, tracks, and roller blinds. Motorized curtain installation available.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=800&fit=crop',
    estimateDuration: '2 Hours',
    material: 'Heavy Duty Tracks',
    technician: 'Window Specialists',
    warranty: 'Service Warranty',
    subServices: [], process: [], packages: [
      {name: 'Per Window', price: 'AED 100', recommended: true, features: ['Rod Fix', 'Steam Ironing']}
    ],
    faqs: [], reviews: []
  },
  'door-lock': {
    id: 'door-lock',
    title: 'Door Lock Repair',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Fixing jammed locks and installing new luxury door handles and cylinders. Smart lock installation expert.',
    image: 'https://images.unsplash.com/photo-1565374395542-0ce18882c857?w=800&h=800&fit=crop',
    estimateDuration: '1 Hour',
    material: 'Yale / Kaba Lock Systems',
    technician: 'Locksmiths',
    warranty: 'Hardware Warranty',
    subServices: [], process: [], packages: [
      {name: 'Cylinder Fix', price: 'AED 150', recommended: true, features: ['New Keys', 'Installation']}
    ],
    faqs: [], reviews: []
  },
  'duct-type-ac-install': {
    id: 'duct-type-ac-install',
    title: 'Duct AC Install',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Large scale duct-type AC installation for luxury villas. Full design and execution.',
    image: '/images/services/subs/duct-ac-install.jpg',
    estimateDuration: '2-4 Days',
    material: 'GI Ducting',
    technician: 'Senior HVAC Team',
    warranty: '2-Year Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'chilled-water-ac': {
    id: 'chilled-water-ac',
    title: 'Chilled Water AC',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Chilled water unit maintenance and repair. Chiller plant connection fixes.',
    image: '/images/services/subs/chilled-water-ac.jpg',
    estimateDuration: '4-8 Hours',
    material: 'Brass Valves',
    technician: 'Industrial HVAC Specialists',
    warranty: '1-Year Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'ac-contracts': {
    id: 'ac-contracts',
    title: 'AC Annual Contracts',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Annual maintenance contracts for your home AC. Periodic visits included.',
    image: '/images/services/subs/ac-contracts.jpg',
    estimateDuration: 'Yearly',
    material: 'All Spares Included',
    technician: 'Contract Fleet',
    warranty: 'Continuous Coverage',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'office-electrical': {
    id: 'office-electrical',
    title: 'Office Electrical',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Cabling and wiring for office spaces. Server room electrical setup.',
    image: '/images/services/subs/office-electrical.jpg',
    estimateDuration: '1-3 Days',
    material: 'Data & Power Cables',
    technician: 'Commerical Electricians',
    warranty: '2-Year Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'dewa': {
    id: 'dewa',
    title: 'DEWA Approvals',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Technical drawings and submissions for DEWA approvals. Metric loads and layout plans.',
    image: '/images/services/subs/dewa.jpg',
    estimateDuration: '5-10 Days',
    material: 'Documentation',
    technician: 'Approved Engineers',
    warranty: 'Success Guaranteed',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'kitchen-hood': {
    id: 'kitchen-hood',
    title: 'Kitchen Hood',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Installation and unblocking of kitchen exhausts and hoods. Filter replacement included.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop',
    estimateDuration: '2-3 Hours',
    material: 'Filters / Duct tape',
    technician: 'Kitchen Techs',
    warranty: '1-Year Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'drain-unblock': {
    id: 'drain-unblock',
    title: 'Drain Unblocking',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Clearing stubborn blocks in bathroom and kitchen drains.',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=800&fit=crop',
    estimateDuration: '1-2 Hours',
    material: 'Enzymatic Cleaners',
    technician: 'Plumbing Team',
    warranty: '90-Day Guarantee',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'cctv-drain': {
    id: 'cctv-drain',
    title: 'CCTV Drain Check',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Inspecting underground pipes with high-tech cameras to find root blocks or breakage.',
    image: 'https://images.unsplash.com/photo-1558002038-bb4237b54e8b?w=800&h=800&fit=crop',
    estimateDuration: '2 Hours',
    material: 'CCTV Footage',
    technician: 'Inspection Experts',
    warranty: 'Accurate Diagnosis',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },

  // --- CEILING WORK ---
  'gypsum-board': {
    id: 'gypsum-board',
    title: 'Gypsum Board Ceiling',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Modern gypsum board ceiling installation with seamless finishing. We create beautiful flat and layered designs for luxury homes.',
    image: '/images/services/subs/gypsum-board.jpg',
    estimateDuration: '2-5 Days',
    material: 'Knauf / USG Boral Gypsum',
    technician: 'Gypsum Specialists',
    warranty: '2-Year Work Warranty',
    subServices: [], process: [], packages: [
      {name: 'Standard', price: 'AED 65/sqmt', recommended: true, features: ['Furring Channel', 'Board Fix', 'Joint Filling']}
    ],
    faqs: [], reviews: []
  },
  'grid-ceiling': {
    id: 'grid-ceiling',
    title: '60x60 Grid Ceiling',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Standard 60x60 tile ceiling for offices and commercial spaces. Easy access for AC and electrical maintenance.',
    image: '/images/services/subs/grid-ceiling.jpg',
    estimateDuration: '1-3 Days',
    material: 'Mineral Fiber Tiles',
    technician: 'Ceiling Team',
    warranty: '1-Year Warranty',
    subServices: [], process: [], packages: [
      {name: 'Standard', price: 'AED 45/sqmt', recommended: true, features: ['T-Grid System', 'Tile Installation']}
    ],
    faqs: [], reviews: []
  },
  'cove-lighting-design': {
    id: 'cove-lighting-design',
    title: 'Cove Lighting Design',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Creating hidden lighting pockets in false ceilings to provide soft, ambient light. Perfect for luxury bedroom and hall interiors.',
    image: '/images/services/subs/cove-lighting-design.jpg',
    estimateDuration: '2-3 Days',
    material: 'GI Tracks / Beads',
    technician: 'Master Craftmen',
    warranty: '2-Year Warranty',
    subServices: [], process: [], packages: [
      {name: 'Standard', price: 'AED 85/rmmt', recommended: true, features: ['Cove Framing', 'Finishing']}
    ],
    faqs: [], reviews: []
  },
  'gypsum-partition': {
    id: 'gypsum-partition',
    title: 'Gypsum Partition',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Installing gypsum walls for room division or office cabins. Soundproof and fire-rated options available.',
    image: '/images/services/subs/gypsum-partition.jpg',
    estimateDuration: '2-4 Days',
    material: 'Metal Stud / Gypsum Board',
    technician: 'Partition Specialists',
    warranty: '2-Year Structural Warranty',
    subServices: [], process: [], packages: [
      {name: 'Standard', price: 'AED 90/sqmt', recommended: true, features: ['Metal Framing', 'Double Sided Board']}
    ],
    faqs: [], reviews: []
  },
  'cornice-work': {
    id: 'cornice-work',
    title: 'Cornice & Molding',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Traditional and modern gypsum cornice installation for ceiling edges. Adds an elegant touch to any room.',
    image: '/images/services/subs/cornice-work.jpg',
    estimateDuration: '1-2 Days',
    material: 'Gypsum Molding',
    technician: 'Decortive Artists',
    warranty: '1-Year Warranty',
    subServices: [], process: [], packages: [
      {name: 'Standard', price: 'AED 25/foot', recommended: true, features: ['Adhesive Fix', 'Joint Polish']}
    ],
    faqs: [], reviews: []
  },
  'ceiling-repair': {
    id: 'ceiling-repair',
    title: 'Ceiling Repair',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Fixing water-damaged ceilings, cracks, and sagging boards. We match existing textures and colors perfectly.',
    image: '/images/services/subs/ceiling-repair.jpg',
    estimateDuration: '1-2 Days',
    material: 'Joint Compound / Plaster',
    technician: 'Patchwork Experts',
    warranty: 'Finish Warranty',
    subServices: [], process: [], packages: [
      {name: 'Small Fix', price: 'AED 250', recommended: true, features: ['Cutting', 'Patching', 'Sanding']}
    ],
    faqs: [], reviews: []
  },
  'gypsum-ceiling': {
    id: 'gypsum-ceiling',
    title: 'Gypsum Ceiling',
    tagline: 'PREMIUM FALSE CEILING',
    description: 'Standard gypsum board ceiling with flawless white finish or decorative layers.',
    image: '/images/services/subs/gypsum-board.jpg',
    estimateDuration: '2-4 Days',
    material: 'USG Boral',
    technician: 'Gypsum Masons',
    warranty: '2-Year Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'false-ceiling': {
    id: 'false-ceiling',
    title: 'False Ceiling',
    tagline: 'LUXURY INTERIOR CEILING',
    description: 'Designing and installing luxury false ceilings with integrated lighting pockets and modern layouts.',
    image: 'https://images.unsplash.com/photo-1615873966503-87a760f2524a?w=800&h=800&fit=crop',
    estimateDuration: '3-5 Days',
    material: 'Knauf Materials',
    technician: 'Ceiling Artisans',
    warranty: '3-Year Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'pop-design': {
    id: 'pop-design',
    title: 'POP Design',
    tagline: 'TRADITIONAL DECORATIVE CEILING',
    description: 'Expert Plaster of Paris designs for traditional and royal looks. Hand-crafted moldings and patterns.',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=800&fit=crop',
    estimateDuration: '4-7 Days',
    material: 'Premium POP mix',
    technician: 'Plaster Artists',
    warranty: '1-Year Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'cove-ceiling': {
    id: 'cove-ceiling',
    title: 'Cove Ceiling',
    tagline: 'AMBIENT LIGHTING DESIGN',
    description: 'Ceiling design specifically shaped for hidden cove lighting. Creates a warm glow in halls and bedrooms.',
    image: '/images/services/subs/cove-lighting-design.jpg',
    estimateDuration: '2-3 Days',
    material: 'Gypsum & Metal G.I',
    technician: 'Framing Experts',
    warranty: '2-Year Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'ceiling-painting': {
    id: 'ceiling-painting',
    title: 'Ceiling Painting',
    tagline: 'FRESH WHITE FINISH',
    description: 'Professional ceiling painting using non-drip paints to brighten up your rooms.',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=800&fit=crop',
    estimateDuration: '1 Day',
    material: 'Acrylic Flat Paint',
    technician: 'Professional Painters',
    warranty: '2-Year Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'partition-work': {
    id: 'partition-work',
    title: 'Partition Work',
    tagline: 'GYPSUM WALL SOLUTIONS',
    description: 'Quick gypsum partition walls for home room division or office cabins. Sound insulation included.',
    image: '/images/services/subs/gypsum-partition.jpg',
    estimateDuration: '2-3 Days',
    material: '75mm Studs / 12.5mm Board',
    technician: 'Partition Crew',
    warranty: 'Workmanship Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'custom-ceiling-design': {
    id: 'custom-ceiling-design',
    title: 'Custom Ceiling Design',
    tagline: 'BESPOKE INTERIOR LUXURY',
    description: 'Unique, high-end ceiling designs tailored to your villa\'s architecture. 3D designs visualized first.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=800&fit=crop',
    estimateDuration: '1-2 Weeks',
    material: 'Hybrid Materials',
    technician: 'Master Designers',
    warranty: 'Full Project Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },

  // --- TILE & WOODEN ---
  'marble-installation': {
    id: 'marble-installation',
    title: 'Marble Installation',
    tagline: 'PREMIUM STONE CRAFTSMANSHIP',
    description: 'Expert marble fixing with book-matching and diamond polishing for luxury properties.',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=800&fit=crop',
    estimateDuration: '3-7 Days',
    material: 'Italian/Spanish Marble',
    technician: 'Marble Artisans',
    warranty: '2-Year Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'granite-work': {
    id: 'granite-work',
    title: 'Granite Work',
    tagline: 'DURABLE STONE SOLUTIONS',
    description: 'Heavy-duty granite installation for countertops and stairs. Heat and scratch resistant.',
    image: 'https://images.unsplash.com/photo-1556909114-44e3e9399a2f?w=800&h=800&fit=crop',
    estimateDuration: '2-4 Days',
    material: 'Premium Granite',
    technician: 'Stone Specialists',
    warranty: 'Lifetime Durability',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'porcelain-tiles': {
    id: 'porcelain-tiles',
    title: 'Porcelain Tiles',
    tagline: 'MODERN FLOORING SOLUTIONS',
    description: 'Precision porcelain and ceramic tile fixing with perfect leveling and zero gaps.',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=800&fit=crop',
    estimateDuration: '2-5 Days',
    material: 'High-Grade Porcelain',
    technician: 'Master Tilers',
    warranty: '1-Year Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'interlock-stones': {
    id: 'interlock-stones',
    title: 'Interlock Stones',
    tagline: 'OUTDOOR PAVING EXPERTS',
    description: 'Luxury interlock design for driveways and pathways. Professional soil compaction included.',
    image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=800&h=800&fit=crop',
    estimateDuration: '3 Days',
    material: 'Interlock Blocks',
    technician: 'Masonry Team',
    warranty: '2-Year Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'pergola-design': {
    id: 'pergola-design',
    title: 'Pergola Design',
    tagline: 'CUSTOM WOODEN STRUCTURES',
    description: 'Building elegant wooden pergolas for gardens and rooftops. Termite-proof treated wood.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=800&fit=crop',
    estimateDuration: '4-7 Days',
    material: 'Meranti / Teak',
    technician: 'Master Carpenters',
    warranty: '3-Year Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'gazebo-construction': {
    id: 'gazebo-construction',
    title: 'Gazebo Construction',
    tagline: 'OUTDOOR LUXURY LIVING',
    description: 'Bespoke gazebo construction with roof tiling and integrated lighting.',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=800&fit=crop',
    estimateDuration: '1 Week',
    material: 'Solid Wood & Tiles',
    technician: 'Carpentry Team',
    warranty: '3-Year Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  // Removed duplicate wooden-doors
  // Removed duplicate outdoor-kitchen
  // Removed duplicate furniture-install
  'tv-installation': {
    id: 'tv-installation',
    title: 'TV Installation',
    tagline: 'SECURE WALL MOUNTING',
    description: 'Professional TV mounting on any wall with wire concealment options.',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&h=800&fit=crop',
    estimateDuration: '1 Hour',
    material: 'Heavy-Duty Bracket',
    technician: 'Media Techs',
    warranty: 'Mounting Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'drilling-hanging': {
    id: 'drilling-hanging',
    title: 'Drilling & Hanging',
    tagline: 'PRECISE WALL FIXTURES',
    description: 'Precise drilling for mirrors, paintings, and shelving without damaging pipes/wires.',
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&h=800&fit=crop',
    estimateDuration: '1-3 Hours',
    material: 'Industrial Plugs',
    technician: 'Expert Handyman',
    warranty: 'Service Guarantee',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'curtains-blinds': {
    id: 'curtains-blinds',
    title: 'Curtains & Blinds',
    tagline: 'WINDOW TREATMENT INSTALL',
    description: 'Installation of all types of curtains, rods, and roller blinds.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=800&fit=crop',
    estimateDuration: '2 Hours',
    material: 'Sturdy Rods/Tracks',
    technician: 'Window Techs',
    warranty: 'Service Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'door-lock-repair': {
    id: 'door-lock-repair',
    title: 'Door Lock Repair',
    tagline: 'SECURITY LOCK SOLUTIONS',
    description: 'Repairing jammed locks and installing new high-security lock systems.',
    image: 'https://images.unsplash.com/photo-1565374395542-0ce18882c857?w=800&h=800&fit=crop',
    estimateDuration: '1 Hour',
    material: 'Solid Brass Locks',
    technician: 'Locksmiths',
    warranty: '1-Year Hardware',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  // Removed duplicate kitchen-hood
  'drain-unblocking': {
    id: 'drain-unblocking',
    title: 'Drain Unblocking',
    tagline: 'QUICK CLOG REMOVAL',
    description: 'Professional clearing of kitchen, bathroom, and yard drain blockages.',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=800&fit=crop',
    estimateDuration: '1-2 Hours',
    material: 'De-clogging Agents',
    technician: 'Plumbing Team',
    warranty: '90-Day Guarantee',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'cctv-drain-check': {
    id: 'cctv-drain-check',
    title: 'CCTV Drain Check',
    tagline: 'VISUAL DRAIN INSPECTION',
    description: 'Advanced camera inspection of drains to find deep blocks or pipe cracks.',
    image: 'https://images.unsplash.com/photo-1558002038-bb4237b54e8b?w=800&h=800&fit=crop',
    estimateDuration: '2 Hours',
    material: 'Digital Report',
    technician: 'Technical Team',
    warranty: 'Diagnosis Report',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },

  // --- LIGHTING WORK ---
  'led-light-installation': {
    id: 'led-light-installation',
    title: 'LED Light Installation',
    tagline: 'EFFECIENT LIGHTING SETUP',
    description: 'Upgrading your space with energy-efficient LED panels and strips.',
    image: '/images/services/subs/lighting.jpg',
    estimateDuration: '2-4 Hours',
    material: 'Philips/Osram LED',
    technician: 'Electrician Team',
    warranty: '1-Year Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'chandelier-installation': {
    id: 'chandelier-installation',
    title: 'Chandelier Installation',
    tagline: 'LUXURY FIXTURE MOUNTING',
    description: 'Expert handling and mounting of heavy crystal and modern chandeliers.',
    image: '/images/services/subs/chandelier.jpg',
    estimateDuration: '3-5 Hours',
    material: 'Reinforced Mounts',
    technician: 'Fixture Specialists',
    warranty: 'Mounting Guarantee',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'spotlights': {
    id: 'spotlights',
    title: 'Spotlights',
    tagline: 'FOCUSED LIGHTING SOLUTIONS',
    description: 'Installation of adjustable and fixed spotlights for art and decor highlights.',
    image: 'https://images.unsplash.com/photo-1565636192335-c4a04eb0f12d?w=800&h=800&fit=crop',
    estimateDuration: '2-4 Hours',
    material: 'Dimmable Spots',
    technician: 'Lighting Techs',
    warranty: '1-Year Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'cove-lighting': {
    id: 'cove-lighting',
    title: 'Cove Lighting',
    tagline: 'HIDDEN AMBIENCE LIGHTS',
    description: 'Professional layout for hidden ceiling LED strips to create soft ambient light.',
    image: '/images/services/subs/cove-lighting-design.jpg',
    estimateDuration: '2-4 Hours',
    material: 'High-Lumen Strips',
    technician: 'LED Specialists',
    warranty: '1-Year Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'outdoor-lighting': {
    id: 'outdoor-lighting',
    title: 'Outdoor Lighting',
    tagline: 'EXTERIOR ILLUMINATION',
    description: 'Enhance your villa facade and garden with weather-proof outdoor lighting.',
    image: 'https://images.unsplash.com/photo-1565636192335-c4a04eb0f12d?w=800&h=800&fit=crop',
    estimateDuration: '4-8 Hours',
    material: 'IP65 Rated Fixtures',
    technician: 'Outdoor Electricians',
    warranty: '1-Year Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'decorative-lighting': {
    id: 'decorative-lighting',
    title: 'Decorative Lighting',
    tagline: 'AESTHETIC LIGHT SOLUTIONS',
    description: 'Wall sconces, floor lamps, and unique lighting installations for aesthetic appeal.',
    image: 'https://images.unsplash.com/photo-1565636192335-c4a04eb0f12d?w=800&h=800&fit=crop',
    estimateDuration: '2 Hours',
    material: 'Designer Fixtures',
    technician: 'Style Electricians',
    warranty: 'Service Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'smart-lighting': {
    id: 'smart-lighting',
    title: 'Smart Lighting',
    tagline: 'INTELLIGENT HOME LIGHTS',
    description: 'Control your lighting via phone or voice with smart switches and app integration.',
    image: '/images/services/subs/smart-home.jpg',
    estimateDuration: '4 Hours',
    material: 'Smart Hubs/Switches',
    technician: 'Smart Tech Team',
    warranty: 'App Support',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'light-repair': {
    id: 'light-repair',
    title: 'Light Repair',
    tagline: 'FIXTURE TROUBLESHOOTING',
    description: 'Fixing flickering lights, faulty drivers, and wiring issues in light fixtures.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&h=800&fit=crop',
    estimateDuration: '1 Hour',
    material: 'Drivers/Ballasts',
    technician: 'Safety Electricians',
    warranty: 'Fix Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },

  // --- GENERAL MAINTENANCE ---
  'preventive-maintenance': {
    id: 'preventive-maintenance',
    title: 'Preventive Maintenance',
    tagline: 'PROACTIVE HOME CARE',
    description: 'Periodic checks of AC, plumbing, and electrical systems to prevent major breakdowns.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=800&fit=crop',
    estimateDuration: '4 Hours',
    material: 'Audit Report',
    technician: 'Maintenance Team',
    warranty: 'Peace of Mind',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'door-window-repair': {
    id: 'door-window-repair',
    title: 'Door/Window Repair',
    tagline: 'FULL ENTRANCE UPKEEP',
    description: 'Fixing hinges, handles, and glass alignment for doors and windows.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop',
    estimateDuration: '2 Hours',
    material: 'Standard Hardware',
    technician: 'Expert Handyman',
    warranty: 'Service Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'minor-plumbing': {
    id: 'minor-plumbing',
    title: 'Minor Plumbing',
    tagline: 'QUICK FAUCET & LEAK FIX',
    description: 'Fast fix for leaky taps, running toilets, and minor drainage issues.',
    image: '/images/services/subs/sanitary.jpg',
    estimateDuration: '1-2 Hours',
    material: 'Washers/Sealants',
    technician: 'Basic Plumbers',
    warranty: 'Fix Guarantee',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'minor-electrical': {
    id: 'minor-electrical',
    title: 'Minor Electrical',
    tagline: 'FAST SOCKET & SWITCH FIX',
    description: 'Replacing faulty switches, sockets, and basic light bulb changes.',
    image: '/images/services/subs/circuit-breakers.jpg',
    estimateDuration: '1 Hour',
    material: 'Schneider Switches',
    technician: 'Safety Electrician',
    warranty: 'Service Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'wall-repair': {
    id: 'wall-repair',
    title: 'Wall Repair',
    tagline: 'PLASTER & CRACK FIXING',
    description: 'Patching holes and cracks in drywall or masonry before painting.',
    image: '/images/services/subs/gypsum-partition.jpg',
    estimateDuration: '2 Hours',
    material: 'Joint Compound',
    technician: 'Patchwork Artist',
    warranty: 'Finish Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'silicone-sealant': {
    id: 'silicone-sealant',
    title: 'Silicone Sealant',
    tagline: 'WATERTIGHT JOINT FIXING',
    description: 'Applying anti-fungus silicone to bathtubs, sinks, and windows.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=800&fit=crop',
    estimateDuration: '1-2 Hours',
    material: 'GP/Anti-Fungal Silicone',
    technician: 'Sealing Techs',
    warranty: '1-Year Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'fixture-replacement': {
    id: 'fixture-replacement',
    title: 'Fixture Replacement',
    tagline: 'HOME APPLIANCE SETUP',
    description: 'Replacing old faucets, towel rails, and small home fixtures.',
    image: '/images/services/subs/bathroom-plumbing.jpg',
    estimateDuration: '1 Hour',
    material: 'Mounting Screws',
    technician: 'Handy Team',
    warranty: 'Service Warranty',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },
  'property-upkeep': {
    id: 'property-upkeep',
    title: 'Property Upkeep',
    tagline: 'FULL VILLA MANAGEMENT',
    description: 'Continuous maintenance of property to retain its value and beauty.',
    image: 'https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=800&h=800&fit=crop',
    estimateDuration: 'Monthly',
    material: 'Full Service',
    technician: 'Professional Fleet',
    warranty: 'Asset Preservation',
    subServices: [], process: [], packages: [], faqs: [], reviews: []
  },

  // --- CATEGORY LANDING PAGES ---
  'paint-work': {
    id: 'paint-work',
    title: 'Painting Services',
    tagline: 'PREMIUM FINISHING SOLUTIONS',
    description: 'Expert interior and exterior painting services with high-quality industrial grade materials.',
    image: '/images/services/service-paint.jpg',
    estimateDuration: 'Varies',
    material: 'Jotun / Berger',
    technician: 'Master Painters',
    warranty: 'Color & Finish Warranty',
    subServices: [
      {name: 'Wall Painting', icon: 'fa-solid fa-brush', desc: 'Flawless wall finishing.'},
      {name: 'Interior/Exterior', icon: 'fa-solid fa-house', desc: 'Full building painting.'},
      {name: 'Texture Painting', icon: 'fa-solid fa-fill-drip', desc: 'Luxury wall textures.'},
      {name: 'Wallpaper Fix', icon: 'fa-solid fa-scroll', desc: 'Precision wallpapering.'}
    ],
    process: [], packages: [], faqs: [], reviews: []
  },
  'plumbing-services': {
    id: 'plumbing-services',
    title: 'Plumbing Services',
    tagline: 'LEAK-FREE SOLUTIONS',
    description: 'Trusted plumbing services for luxury properties. We handle everything from minor leaks to major renovations.',
    image: '/images/services/service-plumbing.jpg',
    estimateDuration: 'Varies',
    material: 'PPR / PEX Pipes',
    technician: 'Senior Plumbers',
    warranty: 'Leak-Free Warranty',
    subServices: [
      {name: 'Sanitary Fix', icon: 'fa-solid fa-toilet', desc: 'Toilet & sink repair.'},
      {name: 'Leak Detection', icon: 'fa-solid fa-faucet-drip', desc: 'Hidden leak sonar tech.'},
      {name: 'Drain Cleaning', icon: 'fa-solid fa-sink', desc: 'Blockage removal.'},
      {name: 'Water Heaters', icon: 'fa-solid fa-fire', desc: 'Install & Replace.'}
    ],
    process: [], packages: [], faqs: [], reviews: []
  },
  'electrical-services': {
    id: 'electrical-services',
    title: 'Electrical Services',
    tagline: 'POWER & SAFETY EXPERTS',
    description: 'DEWA certified electrical maintenance and smart home installations. Ensuring your home is safe and efficient.',
    image: '/images/services/service-electrical.jpg',
    estimateDuration: 'Varies',
    material: 'Ducab Cables',
    technician: 'DEWA Electricians',
    warranty: 'Workmanship Warranty',
    subServices: [
      {name: 'Contracting', icon: 'fa-solid fa-plug', desc: 'Full electrical setup.'},
      {name: 'Lighting', icon: 'fa-solid fa-lightbulb', desc: 'Fixture & LED install.'},
      {name: 'Fault Repair', icon: 'fa-solid fa-bolt', desc: 'Short circuit fixing.'},
      {name: 'Smart Home', icon: 'fa-solid fa-house-laptop', desc: 'Automation solutions.'}
    ],
    process: [], packages: [], faqs: [], reviews: []
  },
  'ceiling-work': {
    id: 'ceiling-work',
    title: 'Ceiling Work',
    tagline: 'INTERIOR CEILING SPECIALISTS',
    description: 'Elegant false ceiling designs and partition works. We transform your interiors with modern gypsum boards.',
    image: '/images/services/service-ceiling.jpg',
    estimateDuration: 'Varies',
    material: 'Knauf Gypsum',
    technician: 'Gypsum Experts',
    warranty: 'Material Warranty',
    subServices: [
      {name: 'Gypsum Board', icon: 'fa-solid fa-border-none', desc: 'Flat & Layered ceilings.'},
      {name: 'Grid Ceiling', icon: 'fa-solid fa-th', desc: 'Office 60x60 systems.'},
      {name: 'Cove Lighting', icon: 'fa-solid fa-lightbulb', desc: 'Ambient lighting pockets.'},
      {name: 'Partitioning', icon: 'fa-solid fa-columns', desc: 'Gypsum wall division.'}
    ],
    process: [], packages: [], faqs: [], reviews: []
  },
  'tile-wooden': {
    id: 'tile-wooden',
    title: 'Tile & Wooden',
    tagline: 'FLOORING ARTISANS',
    description: 'Premium tile fixing and marble polishing services. We give your floors a royal look.',
    image: '/images/services/service-tile.jpg',
    estimateDuration: 'Varies',
    material: 'Ardex Adhesive',
    technician: 'Master Masons',
    warranty: 'Fixing Warranty',
    subServices: [
      {name: 'Marble Fixing', icon: 'fa-solid fa-chess-board', desc: 'Luxury floor marble.'},
      {name: 'Tile Fixing', icon: 'fa-solid fa-grip', desc: 'Perfect porcelain joints.'},
      {name: 'Interlock', icon: 'fa-solid fa-puzzle-piece', desc: 'Villa driveway stones.'},
      {name: 'Polishing', icon: 'fa-solid fa-sun', desc: 'Marble shine restoration.'}
    ],
    process: [], packages: [], faqs: [], reviews: []
  },
  'handyman-more': {
    id: 'handyman-more',
    title: 'Handyman & More',
    tagline: 'QUICK HOME FIXES',
    description: 'Professional handyman for all your home improvements. TV mounting and furniture assembly.',
    image: '/images/services/service-handyman.jpg',
    estimateDuration: 'Hourly',
    material: 'Standard Fixings',
    technician: 'Expert Handyman',
    warranty: 'Service Warranty',
    subServices: [
      {name: 'Furniture', icon: 'fa-solid fa-couch', desc: 'Assembly & Install.'},
      {name: 'TV Mounting', icon: 'fa-solid fa-tv', desc: 'Safe wall mounting.'},
      {name: 'Hanging', icon: 'fa-solid fa-screwdriver', desc: 'Drilling & fixtures.'},
      {name: 'Lock Repair', icon: 'fa-solid fa-lock', desc: 'Security locks fix.'}
    ],
    process: [], packages: [], faqs: [], reviews: []
  },
  'lighting-work': {
    id: 'lighting-work',
    title: 'Lighting Work',
    tagline: 'ILLUMINATION EXPERTS',
    description: 'Specialized lighting solutions for home and offices. From LED upgrades to luxury chandeliers.',
    image: '/images/services/service-lighting.jpg',
    estimateDuration: 'Varies',
    material: 'LED Systems',
    technician: 'Lighting Electricians',
    warranty: '1-Year Warranty',
    subServices: [
      {name: 'LED Install', icon: 'fa-solid fa-lightbulb', desc: 'Energy efficient lighting.'},
      {name: 'Outdoor Lighting', icon: 'fa-solid fa-sun', desc: 'Garden & facade lights.'}
    ],
    process: [], packages: [], faqs: [], reviews: []
  },
  'home-general-maintenance': {
    id: 'home-general-maintenance',
    title: 'Home General Maintenance',
    tagline: 'FULL PROPERTY UPKEEP',
    description: 'Comprehensive property maintenance for villas and apartments. We keep your house in top condition.',
    image: '/images/services/service-maintenance.jpg',
    estimateDuration: 'Annual/Visit',
    material: 'Maintenance Spares',
    technician: 'Multi-Skilled Team',
    warranty: 'Quality Assurance',
    subServices: [
      {name: 'Preventive', icon: 'fa-solid fa-shield-halved', desc: 'Stops issues before they happen.'},
      {name: 'Emergency', icon: 'fa-solid fa-truck-fast', desc: 'Quick response for home fixes.'}
    ],
    process: [], packages: [], faqs: [], reviews: []
  }
}

export const serviceCategories = [
  {
    name: 'Paint Work', 
    id: 'paint-work',
    icon: 'fa-solid fa-paint-roller', 
    color: '#08264B',
    activeColor: '#EEF6FF',
    description: 'Professional painting solutions for homes and businesses. From surface preparation to the perfect finish, we deliver quality, durability and beauty that lasts.',
    image: '/images/services/service-paint.jpg',
    promoTitle: 'Beautiful Finishes For Every Space',
    subs: [
      {name: 'Wall Painting', id: 'wall-painting', icon: 'fa-solid fa-brush', desc: 'Smooth and flawless wall finishes.'},
      {name: 'Interior Painting', id: 'interior-painting', icon: 'fa-solid fa-house-chimney-window', desc: 'Elegant interiors that reflect you.'},
      {name: 'Exterior Painting', id: 'exterior-painting', icon: 'fa-solid fa-building', desc: 'Weather-resistant exterior paints.'},
      {name: 'Texture Painting', id: 'texture-painting', icon: 'fa-solid fa-fill-drip', desc: 'Stylish textures for stunning walls.'},
      {name: 'Enamel Painting', id: 'enamel-painting', icon: 'fa-solid fa-paint-roller', desc: 'Premium enamel for long-lasting shine.'},
      {name: 'Protective Coating', id: 'protective-coating', icon: 'fa-solid fa-shield', desc: 'Coatings that protect and extend life.'},
      {name: 'Villa Painting', id: 'villa-painting', icon: 'fa-solid fa-house-user', desc: 'Complete painting for luxury villas.'},
      {name: 'Office Painting', id: 'office-painting', icon: 'fa-solid fa-briefcase', desc: 'Neat, professional office finishes.'}
    ]
  },
  {
    name: 'AC Maintenance', 
    id: 'ac-maintenance',
    icon: 'fa-solid fa-snowflake', 
    color: '#2563eb',
    activeColor: '#EEF6FF',
    description: 'Keep your spaces cool and comfortable with our professional AC maintenance and installation services. Fast, reliable and energy-efficient solutions tailored for your needs.',
    image: '/images/services/service-ac.jpg',
    promoTitle: 'Reliable Cooling All Year Round',
    subs: [
      {name: 'Emergency AC Repair', id: 'emergency-ac-repair', icon: 'fa-solid fa-screwdriver-wrench', desc: 'Quick response for all AC issues.'},
      {name: 'New AC Installation', id: 'new-ac-installation', icon: 'fa-solid fa-fan', desc: 'Expert installation, all brands.'},
      {name: 'AC Ducting', id: 'ac-ducting', icon: 'fa-solid fa-wind', desc: 'Custom ducting solutions.'},
      {name: 'Duct Type AC Install', id: 'duct-type-ac-install', icon: 'fa-solid fa-air-freshener', desc: 'Efficient duct type AC setup.'},
      {name: 'Chilled Water AC', id: 'chilled-water-ac', icon: 'fa-solid fa-temperature-low', desc: 'Centralized cooling systems.'},
      {name: 'AC Annual Contracts', id: 'ac-contracts', icon: 'fa-solid fa-file-contract', desc: 'Planned maintenance and care.'},
      {name: 'AC Gas Refilling', id: 'ac-gas-refilling', icon: 'fa-solid fa-gas-pump', desc: 'R22 / R410A gas refilling.'},
      {name: 'AC Filter Replacement', id: 'ac-filter-replacement', icon: 'fa-solid fa-filter', desc: 'Clean air, better performance.'}
    ]
  },
  {
    name: 'Plumbing Services', 
    id: 'plumbing-services',
    icon: 'fa-solid fa-droplet', 
    color: '#D61F45',
    activeColor: '#EEF6FF',
    description: 'From minor repairs to complete installations, our expert plumbers deliver reliable, high-quality solutions to keep your water systems running smoothly and your home leak-free.',
    image: '/images/services/service-plumbing.jpg',
    promoTitle: 'Fast Plumbing Support When You Need It',
    subs: [
      {name: 'Sanitary Services', id: 'sanitary-services', icon: 'fa-solid fa-toilet', desc: 'Complete sanitary fitting and repair services.'},
      {name: 'Drainage Cleaning', id: 'drainage-cleaning', icon: 'fa-solid fa-sink', desc: 'Professional cleaning for clear and odor-free drains.'},
      {name: 'Leakage Repair', id: 'leakage-repair', icon: 'fa-solid fa-faucet-drip', desc: 'Quick detection and repair of all kinds of leaks.'},
      {name: 'Water Heaters', id: 'water-heaters', icon: 'fa-solid fa-fire', desc: 'Installation, repair and maintenance of water heaters.'},
      {name: 'Bathroom Plumbing', id: 'bathroom-plumbing', icon: 'fa-solid fa-bath', desc: 'Expert plumbing for bathrooms and accessories.'},
      {name: 'Kitchen Plumbing', id: 'kitchen-plumbing', icon: 'fa-solid fa-faucet', desc: 'Sink, faucet and pipe solutions for your kitchen.'},
      {name: 'Pipe Installation', id: 'pipe-installation', icon: 'fa-solid fa-layered-group', desc: 'High-quality pipe installation for long-lasting performance.'},
      {name: 'Emergency Plumbing', id: 'emergency-plumbing', icon: 'fa-solid fa-headset', desc: '24/7 emergency plumbing support when you need it most.'}
    ]
  },
  {
    name: 'Electrical Services', 
    id: 'electrical-services',
    icon: 'fa-solid fa-bolt', 
    color: '#D9A520',
    activeColor: '#EEF6FF',
    description: 'Expert electrical works and safe installations for homes and businesses. From wiring and lighting to smart solutions, we deliver reliable, efficient and code-compliant services you can trust.',
    image: '/images/services/service-electrical.jpg',
    promoTitle: 'Safe Power Solutions For Every Property',
    subs: [
      {name: 'Electrical Contracting', id: 'electrical-contracting', icon: 'fa-solid fa-plug', desc: 'Complete electrical contracting for new and existing projects.'},
      {name: 'Interior / Exterior Light', id: 'interior-exterior-light', icon: 'fa-solid fa-lightbulb', desc: 'Installation of indoor, outdoor and decorative lighting.'},
      {name: 'Home Wiring', id: 'home-wiring', icon: 'fa-solid fa-network-wired', desc: 'Safe and reliable home wiring and rewiring services.'},
      {name: 'Circuit Breakers', id: 'circuit-breakers', icon: 'fa-solid fa-power-off', desc: 'MCB, RCD installation and electrical panel upgrades.'},
      {name: 'Smart Home Solutions', id: 'smart-home-solutions', icon: 'fa-solid fa-house-laptop', desc: 'Smart switches, automation and energy management.'},
      {name: 'Office Electrical', id: 'office-electrical', icon: 'fa-solid fa-building', desc: 'Complete electrical solutions for offices and commercial spaces.'},
      {name: 'DEWA Approvals', id: 'dewa', icon: 'fa-solid fa-clipboard-check', desc: 'DEWA submissions and approvals for electrical installations.'},
      {name: 'Chandelier Install', id: 'chandelier-install', icon: 'fa-solid fa-gem', desc: 'Professional chandelier installation and setup.'}
    ]
  },
  {
    name: 'Tile & Wooden', 
    id: 'tile-wooden',
    icon: 'fa-solid fa-border-all', 
    color: '#08264B',
    activeColor: '#EEF6FF',
    description: 'Expert tile, marble and woodwork solutions that bring elegance, strength and lasting value to your spaces — inside and out.',
    image: '/images/services/service-tile.jpg',
    promoTitle: 'Premium Surfaces Built To Last',
    subs: [
      {name: 'Marble Installation', id: 'marble', icon: 'fa-solid fa-chess-board', desc: 'Premium marble fitting with flawless finishing.'},
      {name: 'Granite Work', id: 'granite', icon: 'fa-solid fa-mountain', desc: 'Granite cutting, fitting and polishing.'},
      {name: 'Porcelain Tiles', id: 'porcelain', icon: 'fa-solid fa-grip', desc: 'High-quality porcelain tiles for modern spaces.'},
      {name: 'Interlock Stones', id: 'interlock', icon: 'fa-solid fa-puzzle-piece', desc: 'Durable interlock solutions for driveways and yards.'},
      {name: 'Pergola Design', id: 'pergola', icon: 'fa-solid fa-tree', desc: 'Stylish and durable pergola designs for outdoors.'},
      {name: 'Wooden Doors', id: 'wooden-doors', icon: 'fa-solid fa-door-open', desc: 'Custom wooden doors crafted with precision.'},
      {name: 'Gazebo Construction', id: 'gazebo', icon: 'fa-solid fa-umbrella-beach', desc: 'Beautiful and sturdy gazebos built to last.'},
      {name: 'Outdoor Kitchen', id: 'outdoor-kitchen', icon: 'fa-solid fa-kitchen-set', desc: 'Functional and stylish outdoor kitchen setups.'}
    ]
  },
  {
    name: 'Handyman & More', 
    id: 'handyman-more',
    icon: 'fa-solid fa-screwdriver-wrench', 
    color: '#25D366',
    activeColor: '#EEF6FF',
    description: 'Quick installation and repair support for everyday tasks around your home or office. Professional, reliable and done right the first time.',
    image: '/images/services/service-handyman.jpg',
    promoTitle: 'Reliable Help For Everyday Jobs',
    subs: [
      {name: 'Furniture Install', id: 'furniture-install', icon: 'fa-solid fa-couch', desc: 'Assemble and install all types of furniture.'},
      {name: 'TV Installation', id: 'tv-install', icon: 'fa-solid fa-tv', desc: 'Wall-mounting and setup for all TV types.'},
      {name: 'Drilling & Hanging', id: 'drilling', icon: 'fa-solid fa-screwdriver', desc: 'Safe drilling and hanging for wall-mounted items.'},
      {name: 'Curtains & Blinds', id: 'curtains', icon: 'fa-solid fa-window-maximize', desc: 'Install curtain rods, rails and window blinds.'},
      {name: 'Door Lock Repair', id: 'door-lock', icon: 'fa-solid fa-lock', desc: 'Repair and replace door locks and handles.'},
      {name: 'Kitchen Hood', id: 'kitchen-hood', icon: 'fa-solid fa-utensils', desc: 'Installation and basic maintenance support.'},
      {name: 'Drain Unblocking', id: 'drain-unblock', icon: 'fa-solid fa-water', desc: 'Fast drain clearing for sinks, showers and more.'},
      {name: 'CCTV Drain Check', id: 'cctv-drain', icon: 'fa-solid fa-video', desc: 'Camera inspection for drain blockages and issues.'}
    ]
  },
  {
    name: 'Lighting Work',
    id: 'lighting-work',
    icon: 'fa-solid fa-lightbulb',
    color: '#EAB308',
    activeColor: '#EEF6FF',
    description: 'Enhance the beauty and functionality of your space with our expert lighting solutions. From modern designs to energy-efficient installations, we create the perfect ambiance for every need.',
    image: '/images/services/service-lighting.jpg',
    promoTitle: 'Bright Ideas For Every Interior',
    subs: [
      {name: 'LED Light Installation', id: 'led-light-installation', icon: 'fa-solid fa-bolt', desc: 'Energy-efficient LED lighting setup.'},
      {name: 'Chandelier Installation', id: 'chandelier-installation', icon: 'fa-solid fa-gem', desc: 'Elegant chandelier installation.'},
      {name: 'Spotlights', id: 'spotlights', icon: 'fa-solid fa-circle-dot', desc: 'Precise spotlight installation.'},
      {name: 'Cove Lighting', id: 'cove-lighting', icon: 'fa-solid fa-lightbulb', desc: 'Beautiful ambient cove lighting.'},
      {name: 'Outdoor Lighting', id: 'outdoor-lighting', icon: 'fa-solid fa-sun', desc: 'Weatherproof outdoor lighting.'},
      {name: 'Decorative Lighting', id: 'decorative-lighting', icon: 'fa-solid fa-star', desc: 'Stylish lights for every space.'},
      {name: 'Smart Lighting', id: 'smart-lighting', icon: 'fa-solid fa-wifi', desc: 'Smart lighting for modern living.'},
      {name: 'Light Repair', id: 'light-repair', icon: 'fa-solid fa-wrench', desc: 'Repair and fix all types of lights.'}
    ]
  },
  {
    name: 'Ceiling Work', 
    id: 'ceiling-work',
    icon: 'fa-solid fa-layer-group', 
    color: '#08264B',
    activeColor: '#EEF6FF',
    description: 'We specialize in gypsum, false ceiling and ceiling finishing work that enhances the look and feel of your interiors with precision, creativity and long-lasting quality.',
    image: '/images/services/service-ceiling.jpg',
    promoTitle: 'Elegant Ceiling Designs With Fine Finishing',
    subs: [
      {name: 'Gypsum Ceiling', id: 'gypsum-ceiling', icon: 'fa-solid fa-border-none', desc: 'Smooth and elegant gypsum ceilings for a modern look.'},
      {name: 'False Ceiling', id: 'false-ceiling', icon: 'fa-solid fa-th', desc: 'Stylish false ceilings tailored to your space.'},
      {name: 'POP Design', id: 'pop-design', icon: 'fa-solid fa-palette', desc: 'Decorative POP designs for beautiful ceiling finishes.'},
      {name: 'Cove Ceiling', id: 'cove-ceiling', icon: 'fa-solid fa-lightbulb', desc: 'Indirect lighting ceilings for a soft and premium ambiance.'},
      {name: 'Ceiling Repair', id: 'ceiling-repair', icon: 'fa-solid fa-hammer', desc: 'Fix cracks, dents and damages for a flawless finish.'},
      {name: 'Ceiling Painting', id: 'ceiling-painting', icon: 'fa-solid fa-paint-roller', desc: 'Neat and professional ceiling painting services.'},
      {name: 'Partition Work', id: 'partition-work', icon: 'fa-solid fa-columns', desc: 'Gypsum partition walls for smart space division.'},
      {name: 'Custom Ceiling Design', id: 'custom-ceiling-design', icon: 'fa-solid fa-pen-nib', desc: 'Bespoke ceiling designs crafted as per your vision.'}
    ]
  },
  {
    name: 'Home General Maintenance',
    id: 'home-general-maintenance',
    icon: 'fa-solid fa-house-circle-check',
    color: '#08264B',
    activeColor: '#EEF6FF',
    description: 'Routine upkeep and minor repair services to keep your home safe, comfortable and in perfect shape. Ideal for villas, townhouses and apartments.',
    image: '/images/services/service-maintenance.jpg',
    promoTitle: 'Complete Care For Your Home',
    subs: [
      {name: 'Preventive Maintenance', id: 'preventive-maintenance', icon: 'fa-solid fa-shield-halved', desc: 'Regular inspections and upkeep to prevent future issues.'},
      {name: 'Door & Window Repair', id: 'door-window-repair', icon: 'fa-solid fa-door-closed', desc: 'Adjust, repair or replace doors, locks and window fittings.'},
      {name: 'Minor Plumbing', id: 'minor-plumbing', icon: 'fa-solid fa-droplet', desc: 'Fix leaks, replace fittings and resolve minor plumbing issues.'},
      {name: 'Minor Electrical', id: 'minor-electrical', icon: 'fa-solid fa-bolt', desc: 'Fix switches, sockets, lights and other minor electrical issues.'},
      {name: 'Wall Repair', id: 'wall-repair', icon: 'fa-solid fa-trowel', desc: 'Patch holes, cracks and restore wall surfaces.'},
      {name: 'Silicone & Sealant', id: 'silicone-sealant', icon: 'fa-solid fa-broom', desc: 'Apply or replace silicone and sealants for a watertight finish.'},
      {name: 'Fixture Replacement', id: 'fixture-replacement', icon: 'fa-solid fa-faucet', desc: 'Replace worn-out fixtures and improve home functionality.'},
      {name: 'Property Upkeep', id: 'property-upkeep', icon: 'fa-solid fa-house-medical', desc: 'General home upkeep for a clean, safe and well-maintained space.'}
    ]
  }
];
