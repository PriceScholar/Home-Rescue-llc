import { lazy, Suspense } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import {LanguageProvider} from './context/LanguageContext';
import {BookingProvider} from './components/BookingModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/Chatbot';
import { StickyMobileBar } from './components/StickyMobileBar';

const RootLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="w-10 h-10 border-4 border-[#D9A520] border-t-[#08264B] rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <LanguageProvider>
      <BookingProvider>
        <ScrollToTop />
        <Suspense fallback={<RootLoader />}>
          <Outlet />
        </Suspense>
        <FloatingWhatsApp />
        <Chatbot />
        <StickyMobileBar />
      </BookingProvider>
    </LanguageProvider>
  );
}

