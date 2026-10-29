import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BsArrowRight, BsMenuButtonWide, BsXLg } from 'react-icons/bs';
import { NAV_LINKS } from '../../constants';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header
      className={`theme-dark fixed top-0 left-0 w-full z-50 border-b transition-all duration-500 ease-smooth ${
        scrolled
          ? 'bg-surface/95 backdrop-blur-xl border-line shadow-float'
          : 'bg-transparent border-transparent'
      }`}
    >
      {/* Full-width bar; content stays aligned with the page container */}
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex items-center justify-between transition-all duration-500 ease-smooth ${
            scrolled ? 'py-3' : 'py-5 md:py-6'
          }`}
        >
          {/* ── LOGO ──────────────────────────────────────── */}
          <Link to="/" className="flex items-center group flex-shrink-0 relative z-50">
            <Logo className="group-hover:scale-105 transition-transform duration-300" />
          </Link>

          {/* ── DESKTOP NAV ───────────────────────────────── */}
          <nav className="hidden xl:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              link.label === 'Contact Us' ? (
                <Link
                  key={link.path}
                  to={link.path}
                  id="nav-contact-btn"
                  className="btn-primary px-5 py-2.5 text-sm ml-2"
                >
                  Get a Free Assessment
                  <BsArrowRight className="w-3.5 h-3.5" />
                </Link>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`nav-link ${location.hash && link.path.endsWith(location.hash) ? 'is-active' : ''}`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* ── MOBILE BURGER ─────────────────────────────── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            id="mobile-menu-toggle"
            className="xl:hidden relative z-50 p-2.5 rounded-xl text-fg-2 hover:text-fg bg-surface/70 border border-line backdrop-blur-md transition-colors duration-300"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <BsXLg className="w-5 h-5" /> : <BsMenuButtonWide className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── MOBILE FULL-SCREEN MENU ────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(8px)' }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-40 xl:hidden flex flex-col pt-28 pb-10 px-6 overflow-y-auto bg-page/[0.98] backdrop-blur-xl"
          >
            {/* Animated grid bg */}
            <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
            
            <div className="flex flex-col gap-1 relative z-10">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                >
                  {link.label === 'Contact Us' ? (
                    <div className="pt-8 flex flex-col gap-4">
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="btn-primary text-center py-4 text-base rounded-2xl"
                      >
                        Get a Free Assessment
                      </Link>
                      <div className="text-center text-fg-dim text-sm space-y-1">
                        <p>📧 info@veltrixsecure.com</p>
                        <p className="text-fg-dim/60 text-xs tracking-widest uppercase">Secure · Automate · Transform</p>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block py-4 text-lg font-bold border-b border-line hover:text-accent transition-colors font-display text-fg-2"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
