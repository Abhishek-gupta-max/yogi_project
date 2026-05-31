import { motion } from 'framer-motion';
import { INDUSTRIES } from '../../constants';

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="py-32 relative overflow-hidden"
      style={{ background: '#07070F' }}
    >
      {/* Top divider */}
      <div className="gradient-divider absolute top-0 inset-x-0" />

      {/* Background pattern */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      {/* Glow blob */}
      <div
        className="absolute right-0 bottom-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,229,255,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label mb-4 justify-center"
          >
            <span className="w-8 h-[1px] bg-neon-cyan block" />
            Who We Serve
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-text-primary font-display leading-tight mb-5"
          >
            Industries{' '}
            <span className="gradient-text">We Serve</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted text-lg font-light max-w-2xl mx-auto"
          >
            Tailored IT and cybersecurity solutions for the sectors that power modern business.
          </motion.p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {INDUSTRIES.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              >
                <div
                  className="group relative flex flex-col items-center text-center p-7 rounded-2xl h-full cursor-default transition-all duration-400"
                  style={{
                    background: 'rgba(10, 10, 20, 0.6)',
                    border: '1px solid rgba(26, 32, 53, 0.8)',
                    backdropFilter: 'blur(12px)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = industry.color;
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = `0 20px 40px ${industry.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(26, 32, 53, 0.8)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Top glow line on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-t-2xl"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${industry.color}, transparent)`,
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-400 group-hover:scale-110"
                    style={{
                      background: industry.glow,
                      border: `1px solid ${industry.color}`,
                    }}
                  >
                    <Icon className="w-6 h-6 text-text-primary" />
                  </div>

                  {/* Label */}
                  <span className="text-sm font-bold text-text-secondary font-display leading-snug group-hover:text-white transition-colors duration-300">
                    {industry.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="gradient-divider absolute bottom-0 inset-x-0" />
    </section>
  );
}
