import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import ScrollToTop from '../common/ScrollToTop';

// ── Scroll Progress Bar ──────────────────────────────────────────────────────
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 400, damping: 40 });

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
    />
  );
}

// ── Page Layout ──────────────────────────────────────────────────────────────
export default function PageLayout({ children }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col text-text-primary bg-bg-primary">
      {/* Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll-To-Top Widget */}
      <ScrollToTop />
    </div>
  );
}
