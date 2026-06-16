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
        path: 'services/:serviceId',
        element: <ServiceDetail />,
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
        path: 'credentials',
        element: <Credentials />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'blog',
        element: <Home />,
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

