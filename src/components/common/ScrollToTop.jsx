import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsArrowUpShort } from 'react-icons/bs';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          whileHover={{ scale: 1.1, backgroundColor: '#0066ff' }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full text-white shadow-2xl backdrop-blur-md transition-all duration-200"
          style={{
            background: 'rgba(10, 10, 20, 0.9)',
            border: '1px solid rgba(0, 87, 255, 0.4)',
            boxShadow: '0 0 20px rgba(0, 87, 255, 0.3)',
          }}
        >
          <BsArrowUpShort className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
