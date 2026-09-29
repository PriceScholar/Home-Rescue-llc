import React, { lazy } from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import App from './App.tsx';
import { servicesData } from './data/servicesData';

// Lazy loading major pages
const Home = lazy(() => import('./Home'));
const Services = lazy(() => import('./Services'));
const Contact = lazy(() => import('./Contact'));
const About = lazy(() => import('./About'));
const Booking = lazy(() => import('./Booking'));
const Credentials = lazy(() => import('./Credentials'));
const Portfolio = lazy(() => import('./Portfolio'));
const ServiceDetail = lazy(() => import('./ServiceDetail'));
const ThankYou = lazy(() => import('./ThankYou'));
const Blog = lazy(() => import('./Blog'));
const NotFound = lazy(() => import('./NotFound'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'service',
        element: <Navigate to="/services" replace />,
      },
      {
        path: 'services/apartment-renovation',
        element: <Navigate to="/services/villa-renovation" replace />,
      },
      {
        path: 'services/:serviceId',
        element: <ServiceDetail />,
      },
      {
        path: 'ac-cleaning-dubai',
        element: <Navigate to="/services/ac-cleaning-dubai" replace />,
      },
      {
        path: 'ac-cleaning',
        element: <Navigate to="/services/ac-cleaning-dubai" replace />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'booking',
        element: <Booking />,
      },
      {
        path: 'thank-you',
        element: <ThankYou />,
      },
      {
        path: 'thankyou',
        element: <Navigate to="/thank-you" replace />,
      },
      {
        path: 'credentials',
        element: <Credentials />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: '*',
        element: <NotFound />,
      }
    ]
  }
];

// Helper to get static paths for all 99 service pages
export async function getStaticPaths() {
  return Object.keys(servicesData).map(id => `/services/${id}`);
}

