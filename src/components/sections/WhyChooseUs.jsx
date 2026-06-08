import { motion } from 'framer-motion';
import { BsCheckLg } from 'react-icons/bs';
import { WHY_CHOOSE_US } from '../../constants';

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="py-24 relative overflow-hidden"
      style={{ background: '#0A1A2E' }}
    >
      {/* Background dot pattern */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      {/* Right glow */}
      <div
        className="absolute -right-40 top-1/3 w-[500px] h-[500px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Centered Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label mb-4 justify-center"
          >
            <span className="w-8 h-[1px] bg-neon-cyan block" />
            Why Choose Us
            <span className="w-8 h-[1px] bg-neon-cyan block" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-text-primary leading-tight mb-5 font-display"
          >
            A Partner You Can <span className="gradient-text">Trust</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted text-base leading-relaxed font-light"
          >
            We don&apos;t just manage technology — we transform it into your greatest competitive advantage.
          </motion.p>
        </div>

        {/* Feature Grid (2 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {WHY_CHOOSE_US.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <div
                className="group flex gap-5 p-6 rounded-2xl border border-cyber-border bg-cyber-card/60 hover:border-neon-cyan/50 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Checkmark Icon Container */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center bg-neon-cyan/10 border border-neon-cyan/25 flex-shrink-0"
                >
                  <BsCheckLg className="w-5 h-5 text-neon-cyan" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-text-primary mb-2 font-display">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Bottom divider */}
      <div className="gradient-divider absolute bottom-0 inset-x-0" />
    </section>
  );
}
