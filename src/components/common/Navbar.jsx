import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BsMenuButtonWide, BsXLg } from 'react-icons/bs';
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-smooth ${
        scrolled ? 'pt-3' : 'pt-5 md:pt-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className={`flex items-center justify-between transition-all duration-500 ease-smooth ${
            scrolled
              ? 'bg-cyber-darker/90 backdrop-blur-2xl border-b border-electric-DEFAULT/30 shadow-[0_4px_30px_rgba(21,73,138,0.15)] py-3 px-6 md:px-8 rounded-b-2xl rounded-t-none'
              : 'bg-transparent border-b border-transparent py-4 px-4'
          }`}
        >
          {/* ── LOGO ──────────────────────────────────────── */}
          <Link to="/" className="flex items-center group flex-shrink-0 relative z-50">
            <Logo className="group-hover:scale-105 transition-transform duration-300" />
          </Link>

          {/* ── DESKTOP NAV ───────────────────────────────── */}
          <nav className="hidden xl:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              link.label === 'Contact Us' ? (
                <Link
                  key={link.path}
                  to={link.path}
                  id="nav-contact-btn"
                  className="btn-primary px-5 py-2 text-sm ml-2"
                >
                  Get a Free Assessment
                </Link>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm font-semibold text-text-secondary hover:text-neon-cyan transition-colors duration-250 font-display"
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
            className="xl:hidden relative z-50 p-2.5 rounded-xl text-text-secondary hover:text-white transition-all duration-300"
            style={{
              background: 'rgba(14, 33, 56, 0.6)',
              border: '1px solid rgba(27, 58, 92, 0.8)',
              backdropFilter: 'blur(12px)',
            }}
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
            className="fixed inset-0 z-40 xl:hidden flex flex-col pt-28 pb-10 px-6 overflow-y-auto"
            style={{ background: 'rgba(6, 18, 31, 0.98)', backdropFilter: 'blur(24px)' }}
          >
            {/* Animated grid bg */}
            <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
            
            {/* Logo repeat inside menu */}
            <div className="flex items-center mb-8 relative z-10">
              <Logo />
            </div>

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
                      <div className="text-center text-text-dim text-sm space-y-1">
                        <p>📧 info@veltrixsecure.com</p>
                        <p className="text-text-dim/60 text-xs tracking-widest uppercase">Secure · Automate · Transform</p>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block py-4 text-lg font-bold border-b border-cyber-border/50 hover:text-neon-cyan transition-colors font-display text-text-secondary"
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
