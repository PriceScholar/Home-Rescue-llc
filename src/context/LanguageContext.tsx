import React, {createContext, useContext, useState, useEffect} from 'react';

type Language = 'EN' | 'AR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  EN: {
    hero_title: "Premium Home Solutions Across UAE",
    hero_subtitle: "Rescue Your Home. Restore Your Comfort.",
    get_quote: "GET FREE QUOTE",
    watch_work: "WATCH OUR WORK",
    nav_home: "HOME",
    nav_services: "SERVICES",
    nav_about: "ABOUT",
    nav_portfolio: "PORTFOLIO",
    nav_blog: "BLOG",
    nav_contact: "CONTACT",
    call_now: "CALL NOW",
    whatsapp_chat: "Chat with us",
    stats_projects: "1000+ Projects",
    stats_customers: "500+ Happy Customers",
    stats_experience: "10+ Years Experience",
    stats_emirates: "7 Emirates Covered",
    services_title: "Our Specialized Services",
    why_choose_us: "Why Choose Home Rescue?",
    how_it_works: "Our Simple Process",
  },
  AR: {
    hero_title: "حلول منزلية متميزة في جميع أنحاء الإمارات",
    hero_subtitle: "أنقذ منزلك. استعد راحتك",
    get_quote: "احصل على عرض سعر مجاني",
    watch_work: "شاهد أعمالنا",
    nav_home: "الرئيسية",
    nav_services: "خدماتنا",
    nav_about: "من نحن",
    nav_portfolio: "أعمالنا",
    nav_blog: "المدونة",
    nav_contact: "اتصل بنا",
    call_now: "اتصل الآن",
    whatsapp_chat: "تحدث معنا",
    stats_projects: "١٠٠٠+ مشروع",
    stats_customers: "٥٠٠+ عميل سعيد",
    stats_experience: "١٠+ سنوات خبرة",
    stats_emirates: "٧ إمارات مغطاة",
    services_title: "خدماتنا المتخصصة",
    why_choose_us: "لماذا تختار هوم ريسكيو؟",
    how_it_works: "عمليتنا البسيطة",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('lang') as Language) || 'EN';
  });

  useEffect(() => {
    localStorage.setItem('lang', language);
    document.documentElement.dir = language === 'AR' ? 'rtl' : 'ltr';
    document.documentElement.lang = language === 'EN' ? 'en' : 'ar';
  }, [language]);

  const setLanguage = (lang: Language) => setLanguageState(lang);
  const isRTL = language === 'AR';

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{language, setLanguage, t, isRTL}}>
      <div className={isRTL ? 'rtl' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
