import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout Elements
import PageLayout from '../components/layout/PageLayout';
import PageTransition from '../components/layout/PageTransition';
import Loader from '../components/common/Loader';

// Lazy-Loaded Page Containers
const Home = lazy(() => import('../pages/Home'));
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
