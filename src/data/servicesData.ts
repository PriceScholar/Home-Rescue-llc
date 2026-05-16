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

  // --- AC SERVICES ---
  'ac-repair': {
    id: 'ac-repair',
    title: 'Emergency AC Repair',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: '24/7 emergency AC repair for any breakdowns. We handle gas leaks, capacitor failures, and compressor issues instantly.',
    image: 'https://images.unsplash.com/photo-1631545806609-26d2b1f4f5e6?w=800&h=800&fit=crop',
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
  'ac-installation': {
    id: 'ac-installation',
    title: 'New AC Installation',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Professional installation of Split, Window, and Duct-type AC units. We ensure proper vacuuming and leak-free copper piping.',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&h=800&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=800&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=800&fit=crop',
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

  // --- PLUMBING ---
  'sanitary': {
    id: 'sanitary',
    title: 'Sanitary Services',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Expert installation and repair of toilets, washbasins, and sanitary fixtures. We fix flush issues and install luxury bathroom fittings.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=800&fit=crop',
    estimateDuration: '2-4 Hours',
    material: 'Grohe / Kohler Fittings',
    technician: 'Licensed Plumbers',
    warranty: '1-Year Fix Warranty',
    subServices: [], process: [], packages: [
      {name: 'Basic Fix', price: 'AED 150', recommended: true, features: ['Mechanism Fix', 'Sealant Work']}
    ],
    faqs: [], reviews: []
  },
  'drainage': {
    id: 'drainage',
    title: 'Drainage Cleaning',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Unblocking floor traps, kitchen sinks, and main manholes using industrial-grade snake machines and hydro-jetters.',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=800&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1585999928141-b27c4f7c0fc1?w=800&h=800&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1585128792020-803d29415281?w=800&h=800&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=800&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop',
    estimateDuration: '2-4 Hours',
    material: 'High-Grade Flexible Hoses',
    technician: 'Kitchen Specialists',
    warranty: '1-Year Warranty',
    subServices: [], process: [], packages: [
      {name: 'Mixer Install', price: 'AED 150', recommended: true, features: ['Mixer Fix', 'Drain Connect']}
    ],
    faqs: [], reviews: []
  },

  // --- ELECTRICAL ---
  'electrical-contracting': {
    id: 'electrical-contracting',
    title: 'Electrical Contracting',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'DEWA-approved electrical contracting for villas and commercial shops. We handle DB dressing, main load cables, and cabling.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=800&fit=crop',
    estimateDuration: '2-7 Days',
    material: 'Ducab / Schneider Cables',
    technician: 'DEWA Approved Electricians',
    warranty: '2-Year Work Warranty',
    subServices: [], process: [], packages: [
       {name: 'DB Dressing', price: 'AED 800', recommended: true, features: ['Labeling', 'Ferruling', 'Load Balance']}
    ],
    faqs: [], reviews: []
  },
  'lighting': {
    id: 'lighting',
    title: 'Lighting Installation',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Expert spotlight, LED strip, and chandeliers installation. We design indoor and outdoor lighting layouts for luxury homes.',
    image: 'https://images.unsplash.com/photo-1565636192335-c4a04eb0f12d?w=800&h=800&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&h=800&fit=crop',
    estimateDuration: '2 Hours',
    material: 'Schneider / Hager MCB',
    technician: 'Safety Electricians',
    warranty: '1-Year Component Warranty',
    subServices: [], process: [], packages: [
      {name: 'Fix Trip', price: 'AED 150', recommended: true, features: ['Isolation', 'Breaker Fix']}
    ],
    faqs: [], reviews: []
  },
  'smart-home': {
    id: 'smart-home',
    title: 'Smart Home Solutions',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Smart Wi-Fi switches, curtain controls, and doorbell installations. Control your home via Alexa or Google Home.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=800&fit=crop',
    estimateDuration: '4-8 Hours',
    material: 'Tuya / Sonoff / Lutron',
    technician: 'Smart Tech Team',
    warranty: '1-Year App Warranty',
    subServices: [], process: [], packages: [
      {name: 'Living Room App', price: 'AED 800', recommended: true, features: ['Smart Lights', 'AC Control']}
    ],
    faqs: [], reviews: []
  },
  'chandelier': {
    id: 'chandelier',
    title: 'Chandelier Install',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Hanging heavy chandeliers safely with reinforced ceiling supports. Expert assembly of crystal and modern lighting fixtures.',
    image: 'https://images.unsplash.com/photo-1565374395542-0ce18882c857?w=800&h=800&fit=crop',
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
  'duct-ac-install': {
    id: 'duct-ac-install',
    title: 'Duct AC Install',
    tagline: 'TECHNICAL SERVICE DETAIL',
    description: 'Large scale duct-type AC installation for luxury villas. Full design and execution.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=800&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1605557202138-6d2db66bb1f3?w=800&h=800&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&h=800&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=800&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=800&fit=crop',
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
  }
};

export const serviceCategories = [
  {
    name: 'Paint Work', 
    icon: 'fa-solid fa-paint-roller', 
    color: 'bg-brand-red',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=800&fit=crop',
    subs: [
      {name: 'Wall Painting', id: 'wall-painting', icon: 'fa-solid fa-brush'},
      {name: 'Interior Painting', id: 'interior-painting', icon: 'fa-solid fa-house-chimney-window'},
      {name: 'Exterior Painting', id: 'exterior-painting', icon: 'fa-solid fa-building'},
      {name: 'Texture Painting', id: 'texture-painting', icon: 'fa-solid fa-fill-drip'}
    ]
  },
  {
    name: 'AC Maintenance', 
    icon: 'fa-solid fa-snowflake', 
    color: 'bg-blue-600',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=800&fit=crop',
    subs: [
      {name: 'Emergency AC Repair', id: 'ac-repair', icon: 'fa-solid fa-screwdriver-wrench'},
      {name: 'New AC Installation', id: 'ac-installation', icon: 'fa-solid fa-fan'},
      {name: 'AC Ducting', id: 'ac-ducting', icon: 'fa-solid fa-wind'},
      {name: 'Duct Type AC Install', id: 'duct-ac-install', icon: 'fa-solid fa-air-freshener'},
      {name: 'Chilled Water AC', id: 'chilled-water-ac', icon: 'fa-solid fa-temperature-low'},
      {name: 'AC Annual Contracts', id: 'ac-contracts', icon: 'fa-solid fa-file-contract'}
    ]
  },
  {
    name: 'Plumbing Services', 
    icon: 'fa-solid fa-droplet', 
    color: 'bg-brand-red',
    image: 'https://images.unsplash.com/photo-1585999928141-b27c4f7c0fc1?w=800&h=800&fit=crop',
    subs: [
      {name: 'Sanitary Services', id: 'sanitary', icon: 'fa-solid fa-toilet'},
      {name: 'Drainage Cleaning', id: 'drainage', icon: 'fa-solid fa-sink'},
      {name: 'Leakage Repair', id: 'leakage-repair', icon: 'fa-solid fa-faucet-drip'},
      {name: 'Water Heaters', id: 'water-heaters', icon: 'fa-solid fa-fire'},
      {name: 'Bathroom Plumbing', id: 'bathroom-plumbing', icon: 'fa-solid fa-bath'},
      {name: 'Kitchen Plumbing', id: 'kitchen-plumbing', icon: 'fa-solid fa-faucet'}
    ]
  },
  {
    name: 'Electrical Services', 
    icon: 'fa-solid fa-bolt', 
    color: 'bg-yellow-500',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=800&fit=crop',
    subs: [
      {name: 'Electrical Contracting', id: 'electrical-contracting', icon: 'fa-solid fa-plug'},
      {name: 'Interior/Exterior Light', id: 'lighting', icon: 'fa-solid fa-lightbulb'},
      {name: 'Home Wiring', id: 'home-wiring', icon: 'fa-solid fa-network-wired'},
      {name: 'Circuit Breakers', id: 'circuit-breakers', icon: 'fa-solid fa-power-off'},
      {name: 'Smart Home Solutions', id: 'smart-home', icon: 'fa-solid fa-house-laptop'},
      {name: 'Office Electrical', id: 'office-electrical', icon: 'fa-solid fa-building'},
      {name: 'DEWA Approvals', id: 'dewa', icon: 'fa-solid fa-clipboard-check'},
      {name: 'Chandelier Install', id: 'chandelier', icon: 'fa-solid fa-gem'}
    ]
  },
  {
    name: 'Tile & Wooden', 
    icon: 'fa-solid fa-border-all', 
    color: 'bg-brand-navy',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=800&fit=crop',
    subs: [
      {name: 'Marble Installation', id: 'marble', icon: 'fa-solid fa-chess-board'},
      {name: 'Granite Work', id: 'granite', icon: 'fa-solid fa-mountain'},
      {name: 'Porcelain Tiles', id: 'porcelain', icon: 'fa-solid fa-grip'},
      {name: 'Interlock Stones', id: 'interlock', icon: 'fa-solid fa-puzzle-piece'},
      {name: 'Pergola Design', id: 'pergola', icon: 'fa-solid fa-tree'},
      {name: 'Gazebo Construction', id: 'gazebo', icon: 'fa-solid fa-umbrella-beach'},
      {name: 'Wooden Doors', id: 'wooden-doors', icon: 'fa-solid fa-door-open'},
      {name: 'Outdoor Kitchen', id: 'outdoor-kitchen', icon: 'fa-solid fa-kitchen-set'}
    ]
  },
  {
    name: 'Handyman & More', 
    icon: 'fa-solid fa-screwdriver-wrench', 
    color: 'bg-brand-green',
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&h=800&fit=crop',
    subs: [
      {name: 'Furniture Install', id: 'furniture-install', icon: 'fa-solid fa-couch'},
      {name: 'TV Installation', id: 'tv-install', icon: 'fa-solid fa-tv'},
      {name: 'Drilling & Hanging', id: 'drilling', icon: 'fa-solid fa-screwdriver'},
      {name: 'Curtains & Blinds', id: 'curtains', icon: 'fa-solid fa-window-maximize'},
      {name: 'Door Lock Repair', id: 'door-lock', icon: 'fa-solid fa-lock'},
      {name: 'Kitchen Hood', id: 'kitchen-hood', icon: 'fa-solid fa-utensils'},
      {name: 'Drain Unblocking', id: 'drain-unblock', icon: 'fa-solid fa-water'},
      {name: 'CCTV Drain Check', id: 'cctv-drain', icon: 'fa-solid fa-video'}
    ]
  }
];
