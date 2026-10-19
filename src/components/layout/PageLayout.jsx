import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import ScrollToTop from '../common/ScrollToTop';

// ── Custom Cursor ────────────────────────────────────────────────────────────
function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 1024px)').matches;
    if (isMobile) return;

    setIsVisible(true);
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animFrameId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mouseX + 'px';
        dotRef.current.style.top = mouseY + 'px';
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ringX + 'px';
        ringRef.current.style.top = ringY + 'px';
      }
      animFrameId = requestAnimationFrame(animateRing);
    };

    const onMouseOver = (e) => {
      const isInteractive = e.target.closest('a, button, [role="button"], input, textarea, select');
      ringRef.current?.classList.toggle('is-active', Boolean(isInteractive));
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    animFrameId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

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
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Coming from another page, the target section only exists after the lazy
    // page loads and its transition finishes, so keep looking for a few seconds.
    let attempts = 0;
    const timer = setInterval(() => {
      const element = document.getElementById(location.hash.slice(1));
      if (element || ++attempts > 40) {
        clearInterval(timer);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    return () => clearInterval(timer);
  }, [location]);

  return (
    <div
      className="min-h-screen flex flex-col text-fg bg-page"
      style={{ cursor: 'none' }}
    >
      {/* Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Custom Cursor */}
      <CustomCursor />

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
