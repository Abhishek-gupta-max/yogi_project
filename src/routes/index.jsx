import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout Elements
import PageLayout from '../components/layout/PageLayout';
import PageTransition from '../components/layout/PageTransition';
import Loader from '../components/common/Loader';

// Lazy-Loaded Page Containers
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const Products = lazy(() => import('../pages/Products'));
const CaseStudies = lazy(() => import('../pages/CaseStudies'));
const Blogs = lazy(() => import('../pages/Blogs'));
const Careers = lazy(() => import('../pages/Careers'));
const Contact = lazy(() => import('../pages/Contact'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('../pages/TermsOfService'));
const NotFound = lazy(() => import('../pages/NotFound'));

export default function AppRoutes() {
  const location = useLocation();

  return (
    <PageLayout>
      {/* 24/7/365 Code Split Suspense Loader */}
      <Suspense fallback={<Loader size="large" fullPage={true} />}>
        {/* Framer Motion page switches tracker */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            
            {/* Core Pages */}
            <Route 
              path="/" 
              element={<PageTransition><Home /></PageTransition>} 
            />
            <Route 
              path="/about" 
              element={<PageTransition><About /></PageTransition>} 
            />
            <Route 
              path="/services" 
              element={<PageTransition><Services /></PageTransition>} 
            />
            <Route 
              path="/products" 
              element={<PageTransition><Products /></PageTransition>} 
            />
            <Route 
              path="/case-studies" 
              element={<PageTransition><CaseStudies /></PageTransition>} 
            />
            <Route 
              path="/blogs" 
              element={<PageTransition><Blogs /></PageTransition>} 
            />
            <Route 
              path="/careers" 
              element={<PageTransition><Careers /></PageTransition>} 
            />
            <Route 
              path="/contact" 
              element={<PageTransition><Contact /></PageTransition>} 
            />
            <Route 
              path="/privacy-policy" 
              element={<PageTransition><PrivacyPolicy /></PageTransition>} 
            />
            <Route 
              path="/terms-of-service" 
              element={<PageTransition><TermsOfService /></PageTransition>} 
            />
            
            {/* Fallback 404 Node */}
            <Route 
              path="*" 
              element={<PageTransition><NotFound /></PageTransition>} 
            />

          </Routes>
        </AnimatePresence>
      </Suspense>
    </PageLayout>
  );
}
