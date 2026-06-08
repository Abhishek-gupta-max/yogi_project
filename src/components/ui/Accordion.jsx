import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsPlus, BsDash } from 'react-icons/bs';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 w-full">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-border-primary rounded-xl overflow-hidden bg-bg-secondary/40 transition-all duration-300 hover:border-border-hover"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full p-6 text-left font-medium text-text-primary transition-colors focus:outline-none focus:bg-bg-hover"
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span className="ml-4 flex-shrink-0 text-text-secondary">
                {isOpen ? <BsDash className="w-6 h-6" /> : <BsPlus className="w-6 h-6" />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-6 pb-6 text-sm leading-relaxed text-text-secondary">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
