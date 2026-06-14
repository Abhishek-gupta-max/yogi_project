import { motion } from 'framer-motion';

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="py-16 relative overflow-hidden"
      style={{ background: '#06121F' }}
    >
      {/* Top divider */}
      <div className="gradient-divider absolute top-0 inset-x-0" />

      {/* Background pattern */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

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
            Industries We Serve
            <span className="w-8 h-[1px] bg-neon-cyan block" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-text-primary font-display leading-tight mb-5"
          >
            Trusted Across <span className="gradient-text">Sectors</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted text-base font-light max-w-2xl mx-auto"
          >
            Secure, scalable technology solutions tailored to the unique needs of every industry.
          </motion.p>
        </div>

        {/* Industry Pills Row */}
        <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
          {[
            'Healthcare & Life Sciences',
            'Financial Services',
            'Manufacturing & Logistics',
            'Retail & E-Commerce',
            'Professional Services',
            'Small & Mid-Sized Business',
          ].map((industry, idx) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="bg-cyber-card border border-cyber-border hover:border-neon-cyan text-text-primary hover:text-neon-cyan rounded-full px-6 py-3.5 text-base font-semibold flex items-center gap-3 transition-all duration-300 cursor-default hover:scale-105"
            >
              <span className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_10px_#00D4FF]" />
              {industry}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="gradient-divider absolute bottom-0 inset-x-0" />
    </section>
  );
}
