import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { BsArrowLeft, BsShieldExclamation } from 'react-icons/bs';
import Button from '../../components/ui/Button';

export default function NotFound() {
  useDocumentTitle(
    '404 — Page Not Found | VeltrixSecure',
    'The page you are looking for does not exist. Return to VeltrixSecure Technologies LLP homepage.'
  );

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6 bg-bg-primary">
      {/* Background radial spotlight */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-xl mx-auto text-center relative z-10 flex flex-col items-center gap-6">
        {/* Animated icon */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-20 h-20 rounded-2xl flex items-center justify-center bg-accent-primary/10 border border-accent-primary/20 text-accent-primary shadow-premium"
        >
          <BsShieldExclamation className="w-10 h-10" />
        </motion.div>

        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-8xl font-bold tracking-tight text-text-primary select-none bg-gradient-to-r from-accent-primary to-indigo-400 bg-clip-text text-transparent"
        >
          404
        </motion.div>

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary"
        >
          Access Node Offline
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-sm"
        >
          The page you&apos;re looking for doesn&apos;t exist, has been moved, or is temporarily offline.
        </motion.p>

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-2 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link to="/" id="notfound-home-btn" className="w-full sm:w-auto">
            <Button variant="primary" size="md" className="w-full sm:w-auto group">
              <BsArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Return to Homepage
            </Button>
          </Link>
          <a href="/#contact" id="notfound-contact-btn" className="w-full sm:w-auto">
            <Button variant="outline" size="md" className="w-full sm:w-auto">
              Contact Us
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
