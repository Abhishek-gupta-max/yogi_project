import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsChevronDown } from 'react-icons/bs';
import { FAQS } from '../../constants';

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="rounded-2xl overflow-hidden"
      style={{
        border: isOpen ? '1px solid rgba(0, 87, 255, 0.35)' : '1px solid rgba(26, 32, 53, 0.8)',
        background: isOpen ? 'rgba(0, 87, 255, 0.04)' : 'rgba(10, 10, 20, 0.7)',
        transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
        boxShadow: isOpen ? '0 0 30px rgba(0, 87, 255, 0.08)' : 'none',
      }}
    >
      <button
        id={`faq-toggle-${index}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
        aria-expanded={isOpen}
      >
        <span
          className="text-base font-semibold leading-snug font-display transition-colors duration-300"
          style={{ color: isOpen ? '#F0F6FF' : '#C8D6F0' }}
        >
          <span
            className="text-xs font-black mr-3 font-display"
            style={{
              color: isOpen ? '#1A75FF' : 'rgba(0,229,255,0.4)',
              transition: 'color 0.3s',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          {item.question}
        </span>
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{
            background: isOpen ? 'rgba(0, 87, 255, 0.15)' : 'rgba(26, 32, 53, 0.8)',
            border: isOpen ? '1px solid rgba(0, 87, 255, 0.4)' : '1px solid rgba(26, 32, 53, 0.8)',
          }}
        >
          <BsChevronDown
            className="w-4 h-4 text-neon-cyan transition-transform duration-400"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div
              className="px-6 pb-6"
              style={{ paddingLeft: 'calc(1.5rem + 2rem)' }} // align with question text
            >
              <div
                className="h-[1px] mb-5 -mt-2"
                style={{ background: 'rgba(0, 87, 255, 0.2)' }}
              />
              <p className="text-text-muted text-sm leading-relaxed font-light">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="py-32 relative overflow-hidden"
      style={{ background: '#0A0A14' }}
    >
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label justify-center mb-4"
          >
            <span className="w-8 h-[1px] bg-neon-cyan block" />
            FAQ
            <span className="w-8 h-[1px] bg-neon-cyan block" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-text-primary font-display mb-4"
          >
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted text-lg font-light"
          >
            Everything you need to know about working with DEVELTRIXSECURE.
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3">
          {FAQS.map((item, idx) => (
            <FAQItem
              key={idx}
              item={item}
              index={idx}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>

        {/* CTA below FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-text-muted text-sm mb-4">Still have questions?</p>
          <a href="mailto:info@veltrixsecure.com" id="faq-contact-email">
            <button className="btn-outline text-sm">
              Email us at info@veltrixsecure.com
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
