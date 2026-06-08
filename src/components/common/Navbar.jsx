import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BsMenuButtonWide, BsXLg } from 'react-icons/bs';
import { NAV_LINKS } from '../../constants';
import Logo from './Logo';
import Button from '../ui/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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

  // Separate regular nav links from CTA
  const desktopLinks = NAV_LINKS.filter(link => link.label !== 'Contact');

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Compliance / RA License Banner */}
      <div className="bg-bg-secondary/90 backdrop-blur-md border-b border-border-primary/40 text-[9px] sm:text-[11px] text-text-secondary py-2 text-center font-medium tracking-wide uppercase relative z-50">
        RA License: <span className="text-text-primary font-semibold">B-3395/UP/COM/100/5/11401/2026</span>
      </div>

      {/* Main Navbar Row */}
      <div
        className={`transition-all duration-300 ${
          scrolled 
            ? 'bg-bg-primary/80 backdrop-blur-md border-b border-border-primary/50 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group relative z-50">
            <Logo className="transition-transform duration-300 group-hover:scale-[1.02]" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {desktopLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a href="#contact" id="nav-contact-btn">
              <Button variant="primary" size="sm">
                Book Assessment
              </Button>
            </a>
          </div>

          {/* Mobile Burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            id="mobile-menu-toggle"
            className="md:hidden relative z-50 p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <BsXLg className="w-5 h-5" /> : <BsMenuButtonWide className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-bg-primary flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col gap-6 text-center">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-semibold text-text-secondary hover:text-text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-8">
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  <Button variant="primary" size="lg" className="w-full">
                    Book Assessment
                  </Button>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
