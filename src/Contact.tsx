import React from 'react';
import {TopBar, Navbar, Footer} from './components/Navigation';
import {motion} from 'motion/react';
import {Phone, Mail, MapPin, Send, MessageCircle, Clock} from 'lucide-react';
import {useBooking} from './components/BookingModal';

const Contact = () => {
  const { callNow, askExpert, openBooking } = useBooking();
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openBooking();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />

      <section className="bg-brand-navy py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[100px]"></div>
        <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} className="relative z-10 max-w-4xl mx-auto space-y-4">
           <h1 className="text-4xl md:text-6xl text-white font-serif">Get In Touch</h1>
           <p className="text-gray-400 text-lg max-w-2xl mx-auto">We're available 24/7 for emergency repairs across all UAE. Send us a message or call directly.</p>
        </motion.div>
      </section>

      <section className="py-24 px-4 md:px-8 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
             <motion.div whileHover={{y: -5}} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
               <div className="w-16 h-16 bg-brand-navy/5 rounded-full flex items-center justify-center text-brand-navy mx-auto mb-6">
                 <Phone className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold mb-4">Call Us</h3>
               <p className="text-gray-500 mb-6 font-medium text-lg">+971 52 452 4295</p>
               <button onClick={callNow} className="text-brand-red font-bold hover:underline">CALL NOW</button>
             </motion.div>

             <motion.div whileHover={{y: -5}} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
               <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green mx-auto mb-6">
                 <MessageCircle className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold mb-4">WhatsApp</h3>
               <p className="text-gray-500 mb-6 font-medium text-lg">+971 52 452 4295</p>
               <button onClick={() => askExpert()} className="text-brand-green font-bold hover:underline">TEXT US</button>
             </motion.div>

             <motion.div whileHover={{y: -5}} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
               <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mx-auto mb-6">
                 <MapPin className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold mb-4">Our Office</h3>
               <p className="text-gray-500 mb-6 leading-relaxed">Al Nahda 1, Dubai,<br />United Arab Emirates</p>
               <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-brand-navy font-bold hover:underline">VIEW ON MAP</a>
             </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white rounded-[40px] p-8 md:p-16 shadow-xl border border-gray-50">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-serif text-brand-navy mb-6">Send Us A Message</h2>
                <p className="text-gray-500 leading-relaxed">Whether you have a question about a service, pricing, or need an urgent rescue for your home, our team is here to help.</p>
              </div>

              <div className="space-y-6">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center"><Clock className="w-6 h-6" /></div>
                   <div>
                     <div className="font-bold text-brand-navy">Office Hours</div>
                     <div className="text-sm text-gray-500">Mon - Sat: 9:00 AM - 6:00 PM</div>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-brand-gold text-white flex items-center justify-center"><Mail className="w-6 h-6" /></div>
                   <div>
                     <div className="font-bold text-brand-navy">Email Support</div>
                     <div className="text-sm text-gray-500">info@homerescue.ae</div>
                   </div>
                 </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <input type="text" placeholder="Your Name" className="w-full bg-brand-cream border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-gold transition-all outline-none" required />
                 <input type="tel" placeholder="Phone Number" className="w-full bg-brand-cream border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-gold transition-all outline-none" required />
              </div>
              <input type="email" placeholder="Email Address" className="w-full bg-brand-cream border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-gold transition-all outline-none" required />
              <select className="w-full bg-brand-cream border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-gold transition-all outline-none text-gray-500">
                <option value="">Select Service</option>
                <option value="paint">Painting</option>
                <option value="ac">AC Maintenance</option>
                <option value="plumbing">Plumbing</option>
                <option value="electrical">Electrical</option>
                <option value="other">Other</option>
              </select>
              <textarea placeholder="Tell us more about your requirements..." rows={5} className="w-full bg-brand-cream border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-gold transition-all outline-none" required></textarea>
              <button type="submit" className="btn-primary w-full py-5 text-xl bg-brand-red flex items-center justify-center gap-3">
                <Send className="w-6 h-6" /> SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="h-[400px] bg-gray-200">
        <iframe 
          title="Home Rescue Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115456.66986518388!2d55.27989390230245!3d25.263539828551383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f3e956461a5%3A0x600b3e648f888361!2sAl%20Nahda%20-%20Al%20Nahda%201%20-%20Dubai!5e0!3m2!1sen!2sae!4v1715809000000!5m2!1sen!2sae" 
          width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
