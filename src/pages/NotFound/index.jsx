import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { BsArrowLeft, BsShieldExclamation } from 'react-icons/bs';

export default function NotFound() {
  useDocumentTitle(
    '404 — Page Not Found | VeltrixSecure',
    'The page you are looking for does not exist. Return to VeltrixSecure Technologies homepage.',
    { noindex: true }
  );

  return (
    <section
      className="theme-dark section-page relative min-h-[80vh] flex items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 50% 40%, rgb(var(--brand-light) / 0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-xl mx-auto text-center relative z-10 flex flex-col items-center gap-6">
        {/* Animated icon */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="icon-tile w-24 h-24 rounded-3xl"
        >
          <BsShieldExclamation className="w-12 h-12 text-accent" />
        </motion.div>

        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="gradient-text text-9xl font-black font-display select-none"
        >
          404
        </motion.div>

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-black text-fg font-display"
        >
          Access Node Offline
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-fg-muted text-base leading-relaxed max-w-sm font-light"
        >
          The page you&apos;re looking for doesn&apos;t exist, has been moved, or is temporarily offline.
        </motion.p>

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-2 flex flex-wrap justify-center gap-4"
        >
          <Link to="/" id="notfound-home-btn" className="btn-primary px-8 py-4">
            <BsArrowLeft className="w-4 h-4" />
            Return to Homepage
          </Link>
          <Link to="/#contact" id="notfound-contact-btn" className="btn-outline px-8 py-4">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
