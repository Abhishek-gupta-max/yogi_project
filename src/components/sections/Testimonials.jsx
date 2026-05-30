import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../../constants';
import { BsChevronLeft, BsChevronRight, BsQuote } from 'react-icons/bs';

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);

  return (
    <section
      id="testimonials"
      className="py-32 relative overflow-hidden"
      style={{ background: '#07070F' }}
    >
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,87,255,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label justify-center mb-4"
          >
            <span className="w-8 h-[1px] bg-neon-cyan block" />
            Client Stories
            <span className="w-8 h-[1px] bg-neon-cyan block" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-text-primary font-display"
          >
            What Our Clients{' '}
            <span className="gradient-text">Say</span>
          </motion.h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="relative rounded-4xl p-10 md:p-14 text-center"
              style={{
                background: 'rgba(10, 10, 20, 0.8)',
                border: '1px solid rgba(0, 87, 255, 0.2)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.04)',
              }}
            >
              {/* Top glow line */}
              <div
                className="absolute top-0 inset-x-0 h-[1px] rounded-t-4xl"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(0,87,255,0.6), rgba(0,229,255,0.4), transparent)',
                }}
              />

              {/* Quote icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8"
                style={{
                  background: 'rgba(0, 87, 255, 0.08)',
                  border: '1px solid rgba(0, 87, 255, 0.2)',
                  boxShadow: '0 0 20px rgba(0, 87, 255, 0.15)',
                }}
              >
                <BsQuote className="w-7 h-7 text-neon-cyan" />
              </div>

              {/* Quote */}
              <blockquote className="text-text-secondary text-lg md:text-xl leading-relaxed font-light mb-10 max-w-3xl mx-auto">
                "{TESTIMONIALS[active].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={TESTIMONIALS[active].image}
                  alt={TESTIMONIALS[active].author}
                  className="w-14 h-14 rounded-full object-cover"
                  style={{
                    border: '2px solid rgba(0, 87, 255, 0.4)',
                    boxShadow: '0 0 16px rgba(0, 87, 255, 0.25)',
                  }}
                />
                <div className="text-left">
                  <div className="text-text-primary font-bold text-base">{TESTIMONIALS[active].author}</div>
                  <div className="text-neon-cyan text-sm">{TESTIMONIALS[active].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            id="testimonial-prev-btn"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-8 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'rgba(10, 10, 20, 0.9)',
              border: '1px solid rgba(0, 87, 255, 0.3)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 0 20px rgba(0, 87, 255, 0.15)',
            }}
            aria-label="Previous testimonial"
          >
            <BsChevronLeft className="w-5 h-5 text-text-secondary" />
          </button>

          <button
            id="testimonial-next-btn"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-8 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'rgba(10, 10, 20, 0.9)',
              border: '1px solid rgba(0, 87, 255, 0.3)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 0 20px rgba(0, 87, 255, 0.15)',
            }}
            aria-label="Next testimonial"
          >
            <BsChevronRight className="w-5 h-5 text-text-secondary" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              id={`testimonial-dot-${idx}`}
              onClick={() => setActive(idx)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: active === idx ? '32px' : '8px',
                height: '8px',
                background: active === idx
                  ? 'linear-gradient(90deg, #0050FF, #1A75FF)'
                  : 'rgba(255,255,255,0.15)',
              }}
              aria-label={`Testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
