import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import LoadingSpinner from './components/common/LoadingSpinner';
import ScrollToTop from './components/common/ScrollToTop';
import SchemaMarkup from './components/seo/SchemaMarkup';
import SchemaMonitor from './components/seo/SchemaMonitor';

// Lazy load pages
const HomePage = React.lazy(() => import('./pages/HomePage'));
const VisionPage = React.lazy(() => import('./pages/VisionPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ExpertisePage = React.lazy(() => import('./pages/ExpertisePage'));
const PartnershipsPage = React.lazy(() => import('./pages/PartnershipsPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <SchemaMarkup />
        <SchemaMonitor />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="vision" element={<VisionPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="expertise" element={<ExpertisePage />} />
              <Route path="partnerships" element={<PartnershipsPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}