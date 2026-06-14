import React, { useEffect } from 'react';
import {Helmet} from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useBooking } from './components/BookingModal';
import { TopBar, Navbar, Footer } from './components/Navigation';

const Booking = () => {
  const { openBooking } = useBooking();
  const navigate = useNavigate();

  useEffect(() => {
    openBooking();
    // Optionally redirect back to home after showing modal
    // but for now, let's just stay on this page if it's hit directly
  }, [openBooking]);

  return (
    <div className="flex flex-col bg-brand-cream">
      <Helmet>
        <title>Book a Free Inspection | Resqhome Dubai</title>
        <meta name="description" content="Book a free home maintenance inspection — AC, plumbing, electrical and more. No obligation, same-day response." />
        <link rel="canonical" href="https://resqhome.ae/booking" />
      </Helmet>
      <TopBar />
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center pt-10 md:pt-12 pb-16 md:pb-20">
        <h1 className="text-4xl font-serif text-brand-navy mb-4">Booking Your Service...</h1>
        <p className="text-gray-500 max-w-md mb-8">The booking form is opening. If it doesn't appear, please click the button below.</p>
        <button onClick={() => openBooking()} className="btn-primary px-10">OPEN BOOKING FORM</button>
        <button onClick={() => navigate('/')} className="text-brand-red font-bold mt-8 hover:underline">BACK TO HOME</button>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
