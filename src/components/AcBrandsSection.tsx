import React from 'react';
import { UserCheck, BadgeCheck, ShieldCheck, MessageCircle } from 'lucide-react';
import { trackWhatsAppConversion } from '../utils/trackConversion';

const BRANDS = ['Gree', 'Carrier', 'Samsung', 'Midea', 'O General', 'Rheem', 'York'];

const TRUST_BADGES = [
  {
    icon: UserCheck,
    title: 'Trained & Qualified Technicians',
    sub: 'Experienced on all major AC brands',
  },
  {
    icon: BadgeCheck,
    title: 'Licensed & Insured',
    sub: 'Dubai registered company',
  },
  {
    icon: ShieldCheck,
    title: '90-Day Workmanship Warranty',
    sub: 'On every repair and service',
  },
];

const AcBrandsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-6 md:px-8 bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        {/* 1) Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="text-brand-gold font-black tracking-[0.35em] uppercase text-[11px] md:text-xs">
            All Major Brands
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-navy font-bold mt-3 mb-3">
            We Service Every <span className="text-brand-gold italic">Leading AC Brand</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            Our trained technicians repair, service and install all top AC brands across the UAE — split, window, ducted and central systems.
          </p>
        </div>

        {/* 2) Brand cards row */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-10">
          {BRANDS.map((brand) => (
            <div
              key={brand}
              className="basis-[calc(50%-6px)] sm:basis-[calc(25%-12px)] lg:basis-0 lg:flex-1 bg-white border border-gray-100 rounded-2xl py-5 px-3 text-center shadow-lg shadow-brand-navy/5"
            >
              <div className="font-serif font-bold text-brand-navy text-xl md:text-2xl">{brand}</div>
              <div className="w-7 h-0.5 bg-brand-gold rounded mx-auto my-2.5" />
              <div className="text-[11px] md:text-xs font-bold text-gray-500 tracking-wide">Repair · Service</div>
            </div>
          ))}
        </div>

        {/* 3) Trust badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6">
          {TRUST_BADGES.map((badge, i) => {
            const IconComponent = badge.icon;
            return (
              <div key={i} className="bg-brand-navy rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-none">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm md:text-base">{badge.title}</div>
                  <div className="text-gray-400 text-xs md:text-sm">{badge.sub}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4) Footer line */}
        <div className="text-center">
          <a
            href={
              'https://wa.me/971524524295?text=' +
              encodeURIComponent('Hi Resqhome, I need AC service. My AC brand is: ')
            }
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppConversion()}
            aria-label="Ask on WhatsApp about your AC brand"
            className="inline-flex items-center gap-2 text-brand-navy font-black text-sm border-b-2 border-brand-gold pb-0.5 hover:text-brand-gold transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-green-600" />
            Don't see your brand? WhatsApp us — we service it too
          </a>
          <p className="mt-4 text-[11px] text-gray-400 max-w-3xl mx-auto">
            Brand names are trademarks of their respective owners. Resqhome is an independent service provider and is not affiliated with these manufacturers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AcBrandsSection;
