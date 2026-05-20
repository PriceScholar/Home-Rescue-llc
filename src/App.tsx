import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {LanguageProvider} from './context/LanguageContext';
import {BookingProvider} from './components/BookingModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Chatbot from './components/Chatbot';

// Lazy loading major pages
const Home = lazy(() => import('./Home'));
const Services = lazy(() => import('./Services'));
const Contact = lazy(() => import('./Contact'));
const About = lazy(() => import('./About'));
const Booking = lazy(() => import('./Booking'));
const Credentials = lazy(() => import('./Credentials'));
const Portfolio = lazy(() => import('./Portfolio'));
const ServiceDetail = lazy(() => import('./ServiceDetail'));

const RootLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="w-10 h-10 border-4 border-[#D9A520] border-t-[#08264B] rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <LanguageProvider>
      <BookingProvider>
        <Router>
          <Suspense fallback={<RootLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} /> 
              <Route path="/service" element={<Navigate to="/services" replace />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/credentials" element={<Credentials />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Home />} />
              {/* Catch-all route to redirect back to home if a link is broken */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
          <FloatingWhatsApp />
          <Chatbot />
        </Router>
      </BookingProvider>
    </LanguageProvider>
  );
}
