import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {LanguageProvider} from './context/LanguageContext';
import {BookingProvider} from './components/BookingModal';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import About from './About';
import Booking from './Booking';
import Credentials from './Credentials';
import Portfolio from './Portfolio';

import ServiceDetail from './ServiceDetail';

export default function App() {
  return (
    <LanguageProvider>
      <BookingProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} /> 
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/credentials" element={<Credentials />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Home />} />
          </Routes>
        </Router>
      </BookingProvider>
    </LanguageProvider>
  );
}
