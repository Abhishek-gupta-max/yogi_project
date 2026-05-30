import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BsMenuButtonWide, BsXLg, BsChevronDown } from 'react-icons/bs';
import { NAV_LINKS } from '../../constants';

// ── Shield + Circuit SVG Logo ──────────────────────────────────────────────
function ShieldLogo({ className = 'w-9 h-9' }) {
  return (
    <img src="/logo.png" alt="VeltrixSecure Logo" className={`${className} object-contain`} />
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();
  const closeTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleMouseEnter = (label) => {
    clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 100);
  };

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
              ? 'bg-cyber-darker/90 backdrop-blur-2xl border-b border-electric-DEFAULT/30 shadow-[0_4px_30px_rgba(0,87,255,0.15)] py-3 px-6 md:px-8 rounded-b-2xl rounded-t-none'
              : 'bg-transparent border-b border-transparent py-4 px-4'
          }`}
        >
          {/* ── LOGO ──────────────────────────────────────── */}
          <Link to="/" className="flex items-center group flex-shrink-0 relative z-50">
            <div className="relative">
              <img src="/logo.png" alt="VeltrixSecure" className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
            </div>
          </Link>

          {/* ── DESKTOP NAV ───────────────────────────────── */}
          <nav className="hidden xl:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                {link.label === 'Contact Us' ? (
                  <Link
                    to={link.path}
                    id="nav-contact-btn"
                    className="btn-primary px-5 py-2 text-sm ml-2"
                  >
                    Contact Us
                  </Link>
                ) : (
                  <NavLink
                    to={link.path}
                    id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className={({ isActive }) =>
                      `relative flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'text-white'
                          : 'text-text-secondary hover:text-white'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <motion.div
                            layoutId="nav-pill"
                            className="absolute inset-0 rounded-xl"
                            style={{ background: 'rgba(0, 87, 255, 0.12)', border: '1px solid rgba(0, 87, 255, 0.2)' }}
                            transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                          />
                        )}
                        <span className="relative z-10">{link.label}</span>
                        {link.dropdown && (
                          <BsChevronDown
                            className={`relative z-10 w-3 h-3 transition-transform duration-300 ${
                              activeDropdown === link.label ? 'rotate-180 text-neon-cyan' : 'text-text-muted'
                            }`}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                )}

                {/* ── Dropdown ── */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-72 rounded-2xl py-2 z-50 overflow-hidden"
                        style={{
                          background: 'rgba(10, 10, 20, 0.95)',
                          border: '1px solid rgba(0, 87, 255, 0.2)',
                          backdropFilter: 'blur(20px)',
                          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 87, 255, 0.1)',
                        }}
                        onMouseEnter={() => handleMouseEnter(link.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {/* Top glow line */}
                        <div className="gradient-divider mb-1" />
                        {link.dropdown.map((item, idx) =>
                          item.external ? (
                            <a
                              key={idx}
                              href={item.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center gap-3 px-5 py-2.5 text-sm text-text-muted hover:text-white transition-all duration-200 hover:bg-electric-DEFAULT/5"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-electric-DEFAULT/50 flex-shrink-0 group-hover:bg-neon-cyan group-hover:scale-150 transition-all duration-300" />
                              <span className="group-hover:translate-x-0.5 transition-transform duration-200">{item.label}</span>
                            </a>
                          ) : (
                            <Link
                              key={idx}
                              to={item.path}
                              className="group flex items-center gap-3 px-5 py-2.5 text-sm text-text-muted hover:text-white transition-all duration-200 hover:bg-electric-DEFAULT/5"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-electric-DEFAULT/50 flex-shrink-0 group-hover:bg-neon-cyan group-hover:scale-150 transition-all duration-300" />
                              <span className="group-hover:translate-x-0.5 transition-transform duration-200">{item.label}</span>
                            </Link>
                          )
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* ── MOBILE BURGER ─────────────────────────────── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            id="mobile-menu-toggle"
            className="xl:hidden relative z-50 p-2.5 rounded-xl text-text-secondary hover:text-white transition-all duration-300"
            style={{
              background: 'rgba(13, 17, 23, 0.6)',
              border: '1px solid rgba(26, 32, 53, 0.8)',
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
            className="fixed inset-0 z-40 xl:hidden flex flex-col pt-24 pb-10 px-6 overflow-y-auto"
            style={{ background: 'rgba(5, 8, 16, 0.97)', backdropFilter: 'blur(24px)' }}
          >
            {/* Animated grid bg */}
            <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
            
            {/* Logo repeat inside menu */}
            <div className="flex items-center mb-8 relative z-10">
              <img src="/logo.png" alt="VeltrixSecure" className="h-10 w-auto object-contain" />
            </div>

            <div className="flex flex-col gap-1 relative z-10">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                >
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded(mobileExpanded === link.label ? null : link.label)
                        }
                        className="w-full flex items-center justify-between py-4 text-lg font-bold text-text-secondary hover:text-white border-b border-cyber-border/50 transition-colors font-display"
                      >
                        {link.label}
                        <BsChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            mobileExpanded === link.label ? 'rotate-180 text-neon-cyan' : 'text-text-dim'
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28 }}
                            className="overflow-hidden pl-5 border-l-2 ml-2 mt-2 mb-3 flex flex-col gap-2"
                            style={{ borderColor: 'rgba(0, 87, 255, 0.4)' }}
                          >
                            {link.dropdown.map((item, idx) =>
                              item.external ? (
                                <a
                                  key={idx}
                                  href={item.path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block py-2 text-sm text-text-muted hover:text-neon-cyan transition-colors"
                                >
                                  {item.label}
                                </a>
                              ) : (
                                <Link
                                  key={idx}
                                  to={item.path}
                                  className="block py-2 text-sm text-text-muted hover:text-neon-cyan transition-colors"
                                >
                                  {item.label}
                                </Link>
                              )
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block py-4 text-lg font-bold border-b border-cyber-border/50 transition-colors font-display ${
                          isActive ? 'text-neon-cyan' : 'text-text-secondary hover:text-white'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  )}
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="pt-8 mt-auto flex flex-col gap-4"
              >
                <Link
                  to="/contact"
                  className="btn-primary text-center py-4 text-base rounded-2xl"
                >
                  Get In Touch
                </Link>
                <div className="text-center text-text-dim text-sm space-y-1">
                  <p>📧 info@veltrixsecure.com</p>
                  <p className="text-text-dim/60 text-xs tracking-widest uppercase">Secure · Automate · Transform</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
