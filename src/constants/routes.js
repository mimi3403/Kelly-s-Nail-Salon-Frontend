import React from 'react';
import HomePage from '../pages/HomePage/HomePage';
import ContactUsPage from '../pages/ContactUsPage/ContactUsPage';
import ServicesPage from '../pages/ServicesPage/ServicesPage';

export const Routes = [
  {
    isExact: true,
    path: '/',
    component: <HomePage />,
  },
  {
    isExact: true,
    path: '/contactus',
    component: <ContactUsPage />,
  },
  {
    isExact: true,
    path: '/services',
    component: <ServicesPage />,
  },
];